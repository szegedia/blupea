import * as React from 'react'
import Layout from '@components/Layout/LayoutComponent'
import useContact from './hooks/useContact'

const ContactComponent = () => {
  const {
    handleSubmit
  } = useContact()

  return (
    <Layout name="contact" className="flex items-center justify-center py-60">
      <section className="lg:w-1/2 lg:mx-auto">
        <h3>Let's talk about your project!</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row">
            <div className="form-item">
              <input
                type="text"
                name="name"
                placeholder="név"
              />
            </div>

            <div className="form-item lg:mx-8">
              <input
                type="email"
                name="email"
                placeholder="e-mail"
              />
            </div>

            <div className="form-item">
              <input
                type="text"
                name="phone"
                placeholder="telefon"
              />
            </div>
          </div>

          <div className="form-item mb-12">
            <label htmlFor="message" className="block mb-2 text-gray-400">üzenet</label>
            <textarea
              id="message"
              name="message"
              rows="6"
            />
          </div>

          <button type="submit" className="cta">Send Request</button>
        </form>
      </section>
    </Layout>
  )
}

export default ContactComponent