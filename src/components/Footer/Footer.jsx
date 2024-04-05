import cn from "./Footer.module.scss";
import Logo from "../../assets/images/logo.svg?react";
import {
  FOOTER_NAVIGATION_TITLE,
  FOOTER_NAVS,
  PATHS,
  PRIVACY_POLICY_LINK,
  QR_AND_SOCIALS_TITLE,
  SIERRAAI_FOOTER_TEXT,
  SOCIALS_LIST,
  SOCIALS_LIST_TITLE,
  TERMS_OF_USE_LINK,
} from "../../constants/constants";
import QR from "../../assets/images/footer-icons/QR.svg?react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={cn.footer}>
      <section className={cn.inner}>
        <div className={cn.logo}>
          <Logo width={88} height={48} />
        </div>
      </section>
      <section className={cn.navigation}>
        <div className={cn.title}>{FOOTER_NAVIGATION_TITLE}</div>
        <div className={cn.navsList}>
          {FOOTER_NAVS.map((item) => (
            <NavLink className={cn.li} key={item.id} to={PATHS.home}>
              {item.icon} {item.text}
            </NavLink>
          ))}
        </div>
      </section>
      <section className={cn.qrAndSocials}>
        <div className={cn.upperBlock}>
          <div className={cn.qrAndSocialsTitle}>{QR_AND_SOCIALS_TITLE}</div>
          <div className={cn.socialsListBlock}>
            <div className={cn.socialsListTitle}>{SOCIALS_LIST_TITLE}</div>
            <div className={cn.list}>
              {SOCIALS_LIST.map((item) => (
                <NavLink className={cn.socialsListItem} key={item.id} to={PATHS.home}>
                  {item.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className={cn.lowerBlock}>
          <div className={cn.blockWithQr}>
            <QR />
            <span className={cn.sierra}>{SIERRAAI_FOOTER_TEXT}</span>
          </div>
          <div className={cn.blockWithoutQr}>
            <NavLink className={cn.privacyPolicy} to={PATHS.home}>{PRIVACY_POLICY_LINK}</NavLink>
            <NavLink className={cn.termsOfUse} to={PATHS.home}>{TERMS_OF_USE_LINK}</NavLink>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
