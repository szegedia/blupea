import * as React from "react";
import Layout from "@components/Layout/LayoutComponent";

const ServicesComponent = () => {
  return (
    <Layout
      name="services"
      className="flex items-center justify-center py-20 md:py-60 px-10 md:px-0"
    >
      <section className="w-full lg:w-3/4 lg:mx-auto">
        <h1>Szolgáltatások</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl">
              <span className="font-thin text-3xl text-gray-400 mr-4">01</span>
              Vázlatterv
            </h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            vestibulum purus id sapien tristique accumsan. Curabitur ac sapien
            sed nibh viverra luctus. Pellentesque semper ipsum non viverra
            porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod
            lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis
            elit est, feugiat consequat libero non, auctor malesuada mi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum
            purus id sapien tristique accumsan. Curabitur ac sapien sed nibh
            viverra luctus. Pellentesque semper ipsum non viverra porttitor.
            Fusce id rutrum velit, sed placerat dolor. Mauris euismod lacus et
            libero lacinia mattis. Vivamus id ullamcorper ante. Duis elit est,
            feugiat consequat libero non, auctor malesuada mi.
          </div>

          <div>
            <h3 className="text-2xl">
              <span className="font-thin text-3xl text-gray-400 mr-4">02</span>
              Kiviteliterv
            </h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            vestibulum purus id sapien tristique accumsan. Curabitur ac sapien
            sed nibh viverra luctus. Pellentesque semper ipsum non viverra
            porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod
            lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis
            elit est, feugiat consequat libero non, auctor malesuada mi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum
            purus id sapien tristique accumsan.
          </div>

          <div>
            <h3 className="text-2xl">
              <span className="font-thin text-3xl text-gray-400 mr-4">03</span>
              Művezetés
            </h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            vestibulum purus id sapien tristique accumsan. Curabitur ac sapien
            sed nibh viverra luctus. Pellentesque semper ipsum non viverra
            porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod
            lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis
            elit est, feugiat consequat libero non, auctor malesuada mi.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesComponent;
