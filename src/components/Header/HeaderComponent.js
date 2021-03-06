import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import { useEffect } from "react";

const HeaderComponent = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = React.useState(true);
  const isSmall = useMediaQuery({ query: "(max-width: 1024px)" });

  const handleScrollTop = () => {
    scroll.scrollToTop();
  };

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(isSmall);
  }, [isSmall]);

  return (
    <nav className="fixed z-20 top-0 flex flex-wrap items-center justify-between w-full p-4 bg-white bg-opacity-75 lg:px-12 lg:py-6">
      <a href="#home" className="font-brand text-3xl" onClick={handleScrollTop}>
        blupea
      </a>
      <button className="lg:hidden w-5" onClick={handleToggleCollapse}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={classNames("w-full lg:w-auto", {
          hidden: collapsed,
        })}
      >
        <ul className="flex flex-col pt-6 lg:flex-row lg:pt-0 lg:items-center">
          <li>
            <Link className="header-navlink" to="services" smooth spy>
              {t("header.services")}
            </Link>
          </li>
          <li>
            <Link
              className="header-navlink"
              to="contact"
              offset={100}
              smooth
              spy
            >
              {t("header.contact")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
