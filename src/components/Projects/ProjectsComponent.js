import * as React from 'react'
import Layout from '@components/Layout/LayoutComponent'

const ProjectsComponent = () => {
  return (
    <Layout name="projects" className="flex flex-col lg:flex-row">
      <section className="lg:w-1/3 lg:p-24">
        <h3>Minimalist style family apartment</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum purus id sapien tristique accumsan. Curabitur ac sapien sed nibh viverra luctus. Pellentesque semper ipsum non viverra porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis elit est, feugiat consequat libero non, auctor malesuada mi.
        </p>
      </section>
      <section>
        <img className="lg:w-3/5 mb-8" src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
        
        <ul className="flex overflow-x-auto">
          <li className="w-72 mr-10">
            <img className="mb-4" src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className="flex items-end justify-between">
              <span className="text-3xl font-thin text-gray-400">02</span>
              <span className="text-sm font-semibold">Stylish family apartment</span>
            </div>
          </li>

          <li className="w-72 mr-10">
            <img className="mb-4" src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className="flex items-end justify-between">
              <span className="text-3xl font-thin text-gray-400">03</span>
              <span className="text-sm font-semibold">Stylish family apartment</span>
            </div>
          </li>

          <li className="w-72 mr-10">
            <img className="mb-4" src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className="flex items-end justify-between">
              <span className="text-3xl font-thin text-gray-400">04</span>
              <span className="text-sm font-semibold">Stylish family apartment</span>
            </div>
          </li>

          <li className="w-72 mr-10">
            <img className="mb-4" src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className="flex items-end justify-between">
              <span className="text-3xl font-thin text-gray-400">05</span>
              <span className="text-sm font-semibold">Stylish family apartment</span>
            </div>
          </li>
        </ul>
      </section>

      {/* <section className={styles.projectBox}>
        <h1 className={styles.projectTitle}>Minimalist style family apartment</h1>
        <p className={styles.projectDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum purus id sapien tristique accumsan. Curabitur ac sapien sed nibh viverra luctus. Pellentesque semper ipsum non viverra porttitor. Fusce id rutrum velit, sed placerat dolor. Mauris euismod lacus et libero lacinia mattis. Vivamus id ullamcorper ante. Duis elit est, feugiat consequat libero non, auctor malesuada mi.</p>
      </section>
      <section className={styles.gallery}>
        <div className={styles.galleryCurrent}>
          <img className={styles.galleryCurrentImg} src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
        </div>

        <div className={styles.galleryRow}>
          <div className={styles.galleryRowItem}>
            <img src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className={styles.galleryRowItemDetails}>
              <span className={styles.galleryRowItemIndex}>01</span>
              <span className={styles.galleryRowItemName}>Stylish family apartment</span>
            </div>
          </div>

          <div className={styles.galleryRowItem}>
            <img src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className={styles.galleryRowItemDetails}>
              <span className={styles.galleryRowItemIndex}>02</span>
              <span className={styles.galleryRowItemName}>Stylish family apartment</span>
            </div>
          </div>

          <div className={styles.galleryRowItem}>
            <img src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className={styles.galleryRowItemDetails}>
              <span className={styles.galleryRowItemIndex}>03</span>
              <span className={styles.galleryRowItemName}>Stylish family apartment</span>
            </div>
          </div>

          <div className={styles.galleryRowItem}>
            <img src="https://lakbermagazin.hu/wp-content/uploads/2020/05/pasztell_szinek_hatalmas_tukor_valtozatos_vilagitas_csalad_80m2_es_otthonaban_03.jpg" alt="" />
            <div className={styles.galleryRowItemDetails}>
              <span className={styles.galleryRowItemIndex}>04</span>
              <span className={styles.galleryRowItemName}>Stylish family apartment</span>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}

export default ProjectsComponent