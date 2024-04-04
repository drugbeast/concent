import cn from "./Footer.module.scss";
import Logo from "../../assets/images/logo.svg?react";
import {
  FOOTER_NAVIGATION_TITLE,
  FOOTER_NAVS,
  PRIVACY_POLICY_LINK,
  QR_AND_SOCIALS_TITLE,
  SIERRAAI_FOOTER_TEXT,
  SOCIALS_LIST,
  SOCIALS_LIST_TITLE,
  TERMS_OF_USE_LINK,
} from "../../constants/constants";
import QR from "../../assets/images/footer-icons/QR.svg?react";

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
            <div className={cn.li} key={item.id}>
              {item.icon} {item.text}
            </div>
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
                <div className={cn.socialsListItem} key={item.id}>
                  {item.text}
                </div>
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
            <span className={cn.privacyPolicy}>{PRIVACY_POLICY_LINK}</span>
            <span className={cn.termsOfUse}>{TERMS_OF_USE_LINK}</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
