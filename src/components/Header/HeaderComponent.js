import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, animateScroll as scroll } from 'react-scroll'
import classNames from 'classnames'

const HeaderComponent = () => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = React.useState(false)

  const handleScrollTop = () => {
    scroll.scrollToTop()
  }

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <nav className="fixed z-10 top-0 flex flex-wrap items-center justify-between w-full p-4 bg-white bg-opacity-75 lg:px-12 lg:py-6">
      <a href="#home" className="font-brand text-3xl" onClick={handleScrollTop}>blupea</a>
      <button
        className="lg:hidden w-5"
        onClick={handleToggleCollapse}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={classNames('w-full lg:w-auto', {
        'hidden': collapsed,
      })}>
        <ul className="flex flex-col pt-6 lg:flex-row lg:pt-0 lg:items-center">
          <li>
            <Link
              className="header-navlink"
              to="services"
              smooth
              spy
            >
              {t('header.services')}
            </Link>
          </li>
          <li>
            <Link
              className="header-navlink"
              to="projects"
              smooth
              spy
            >
              {t('header.projects')}
            </Link>
          </li>
          <li>
            <Link
              className="header-navlink"
              to="contact"
              smooth
              spy
            >
              {t('header.contact')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    // <nav className="fixed">
    //   <a href="#brand" onClick={handleScrollTop}>blupea</a>

    //   <button onClick={handleToggleCollapse}>[]</button>

    //   <div>
    //     <ul>
    //       <li>
    //         <Link
    //           to="projects"
    //           offset={headerOffset}
    //           smooth
    //         >
    //           {t('header.projects')}
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="services"
    //           offset={headerOffset}
    //           smooth
    //         >
    //           {t('header.services')}
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="contact"
    //           offset={headerOffset}
    //           smooth
    //         >
    //           {t('header.contact')}
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default HeaderComponent
