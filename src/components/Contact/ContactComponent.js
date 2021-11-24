import * as React from "react";
import Layout from "@components/Layout/LayoutComponent";
import { useState } from "react";

const ContactComponent = () => {
  const [state, setState] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("loading");

    await fetch("https://getform.io/f/80e10d4c-2b30-41ed-bba3-1cdd01388a7c", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      setState("success");
    });
  };

  return (
    <Layout
      name="contact"
      className="flex items-center justify-center py-20 px-10 md:px-0"
    >
      <section className="lg:w-1/2 lg:mx-auto">
        {state === "success" ? (
          <>
            <h3 className="text-center">Köszönjük</h3>
            <h5 className="text-center">Hamarosan jelentkezünk</h5>
          </>
        ) : (
          <>
            <h3 className="text-2xl">Beszéljünk az ötleteidről!</h3>
            <h5 className="mb-8">
              Keress minket bizalommal, hogy megvalósíthassuk az
              elképzeléseidet.
            </h5>
            <form className="form" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row">
                <div className="form-item">
                  <input
                    type="text"
                    name="name"
                    placeholder="név"
                    value={formData.name}
                    disabled={state === "loading"}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-item lg:mx-8">
                  <input
                    type="email"
                    name="email"
                    placeholder="e-mail"
                    value={formData.email}
                    disabled={state === "loading"}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-item">
                  <input
                    type="text"
                    name="phone"
                    placeholder="telefon"
                    value={formData.phone}
                    disabled={state === "loading"}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-item mb-12">
                <label htmlFor="message" className="block mb-2 text-gray-400">
                  üzenet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  disabled={state === "loading"}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  maxLength={1000}
                  required
                />
              </div>

              <div class="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id="contribute"
                  name="gdpr-contribute"
                  value="yes"
                  class="opacity-0 absolute h-8 w-8"
                  required
                />
                <div class="bg-white border rounded-md border-gray-900 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray-900">
                  <svg
                    class="fill-current hidden w-3 h-3 text-gray-900 pointer-events-none"
                    version="1.1"
                    viewBox="0 0 17 12"
                    width="8"
                    height="8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="black"
                        fill-rule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <label for="contribute" class="text-xs">
                  Hozzájárulok, hogy a(z){" "}
                  <a
                    href="https://getform.io/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold"
                  >
                    getform.io
                  </a>{" "}
                  kezelje az adataimat.
                </label>
              </div>

              <button
                type="submit"
                className="cta mt-10"
                disabled={state === "loading"}
              >
                Küldés
              </button>
            </form>
          </>
        )}
      </section>
    </Layout>
  );
};

export default ContactComponent;
