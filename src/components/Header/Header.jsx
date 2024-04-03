import { NavLink } from "react-router-dom";
import { HEADER_NAVS, PATHS } from "../../constants/constants";
import cn from "./Header.module.scss";

function Header() {
  return (
    <header className={cn.header}>
      <div className="container">
        <div className={cn.inner}>
          <nav className={cn.nav}>
            <div className={cn.navInner}>
              <div className={cn.linkBlock}>
                <div className={cn.iconBlock}>{HEADER_NAVS[0].icon}</div>
                <NavLink className={cn.link} to={PATHS.home}>
                  {HEADER_NAVS[0].text}
                </NavLink>
              </div>
              <div className={cn.navsWithLogoInCenter}>
                {HEADER_NAVS.map((item) => (
                  <>
                    {(item.id == 2 || item.id == 4) && (
                      <div className={cn.linkBlock} key={item.id}>
                        <div className={cn.iconBlock}>{item.icon}</div>
                        <NavLink className={cn.link} to={PATHS.home}>
                          {item.text}
                        </NavLink>
                      </div>
                    )}

                    {item.id == 3 && (
                      <NavLink to={PATHS.home} className={cn.logo} key={item.id}>
                        {item.icon}
                      </NavLink>
                    )}
                  </>
                ))}
              </div>
              <div className={cn.linkBlock}>
                <div className={cn.iconBlock}>{HEADER_NAVS[4].icon}</div>
                <NavLink className={cn.link} to={PATHS.home}>
                  {HEADER_NAVS[4].text}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
