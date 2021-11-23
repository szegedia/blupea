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

              <button
                type="submit"
                className="cta"
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
