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
        <h3>Beszéljünk az ötleteidről!</h3>
        <h5 className="mb-8">Keress minket bizalommal, hogy megvalósíthassuk az elképzeléseidet.</h5>
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row">
            <div className="form-item">
              <input
                type="text"
                name="name"
                placeholder="név"
                required
              />
            </div>

            <div className="form-item lg:mx-8">
              <input
                type="email"
                name="email"
                placeholder="e-mail"
                required
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
              required
            />
          </div>

          <button type="submit" className="cta">Küldés</button>
        </form>
      </section>
    </Layout>
  )
}

export default ContactComponent