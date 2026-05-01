import { useState } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { sendAppointmentToTelegram } from '@/server/send-appointment-to-telegram'

export default function AppointmentSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    primaryConcern: 'Pain Management',
    preferredTime: 'Morning (8am - 12pm)',
    additionalNotes: '',
  })
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
  })
  const submitAppointment = useServerFn(sendAppointmentToTelegram)

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (name === 'fullName' || name === 'email') {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage('')

    const nextErrors = {
      fullName: '',
      email: '',
    }
    const trimmedName = formValues.fullName.trim()
    const trimmedEmail = formValues.email.trim()

    if (!trimmedName) {
      nextErrors.fullName = 'Full name is required.'
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (nextErrors.fullName || nextErrors.email) {
      setFormErrors(nextErrors)
      return
    }

    const payload = {
      fullName: trimmedName,
      email: trimmedEmail,
      primaryConcern: formValues.primaryConcern.trim(),
      preferredTime: formValues.preferredTime.trim(),
      additionalNotes: formValues.additionalNotes.trim(),
    }

    try {
      setIsSubmitting(true)
      await submitAppointment({ data: payload })
      setFormValues({
        fullName: '',
        email: '',
        primaryConcern: 'Pain Management',
        preferredTime: 'Morning (8am - 12pm)',
        additionalNotes: '',
      })
      setFormErrors({
        fullName: '',
        email: '',
      })
      setStatusMessage('Your request has been submitted successfully.')
    } catch (error) {
      console.error('[appointment] Submit failed:', error)
      setStatusMessage('Unable to submit right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-surface-container-low px-12 py-32">
      <div className="editorial-shadow relative mx-auto max-w-4xl overflow-hidden bg-surface p-16 md:p-24">
        <div className="relative z-10 mb-16 text-center">
          <h2 className="mb-6 font-headline text-5xl text-primary">Request a Consultation</h2>
          <p className="text-on-surface-variant">Complete the form below and an Arua care coordinator will reach out within 24 hours.</p>
        </div>
        <form className="relative z-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2" noValidate onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Full Name</label>
            <input
              className="border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 transition-all placeholder:text-on-surface-variant/30 focus:border-primary focus:ring-0"
              name="fullName"
              onChange={handleFieldChange}
              placeholder="Enter your name"
              type="text"
              value={formValues.fullName}
            />
            {formErrors.fullName ? (
              <span style={{ color: '#ba1a1a', fontSize: '12px' }}>{formErrors.fullName}</span>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email Address</label>
            <input
              className="border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 transition-all placeholder:text-on-surface-variant/30 focus:border-primary focus:ring-0"
              name="email"
              onChange={handleFieldChange}
              placeholder="email@domain.com"
              type="text"
              value={formValues.email}
            />
            {formErrors.email ? (
              <span style={{ color: '#ba1a1a', fontSize: '12px' }}>{formErrors.email}</span>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Primary Concern</label>
            <select className="border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-on-surface-variant transition-all focus:border-primary focus:ring-0" name="primaryConcern" onChange={handleFieldChange} value={formValues.primaryConcern}>
              <option selected disabled value="">Select Primary Concern</option>
              <option value="Pain Management">Pain Management</option>
              <option value="Stress Anxiety">Stress &amp; Anxiety</option>
              <option value="Digestive Health">Digestive Health</option>
              <option value="Women Health">Women&apos;s Health</option>
              <option value="General Wellness">General Wellness</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Preferred Time</label>
            <select className="border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 text-on-surface-variant transition-all focus:border-primary focus:ring-0" name="preferredTime" onChange={handleFieldChange} value={formValues.preferredTime}>
              <option selected disabled value="">Select Preferred Time</option>
              <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
              <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
              <option value="Evening (4pm - 7pm)">Evening (4pm - 7pm)</option>
            </select>
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Additional Notes</label>
            <textarea className="border-0 border-b border-outline-variant/40 bg-transparent px-0 py-3 transition-all placeholder:text-on-surface-variant/30 focus:border-primary focus:ring-0" name="additionalNotes" onChange={handleFieldChange} placeholder="Tell us more about your needs..." rows={3} value={formValues.additionalNotes} />
          </div>
          <div className="pt-8 text-center md:col-span-2">
            <button className="w-full rounded-full bg-primary px-16 py-5 font-medium text-on-primary transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
          {statusMessage ? (
            <div className="md:col-span-2 text-center text-sm text-on-surface-variant">
              {statusMessage}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  )
}
