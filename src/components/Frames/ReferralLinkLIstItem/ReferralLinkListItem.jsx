import PropTypes from "prop-types";
import cn from "./ReferralLinkListItem.module.scss";

function ReferralLinkListItem({ item }) {
  const { image, title, buttonText, buttonIcon } = item;
  return (
    <div className={cn.li}>
      <div className={cn.inner}>
        <div className={cn.imageWithTitle}>
          <img src={image} />
          <span className={cn.title}>{title}</span>
        </div>
        <button className={cn.button}>
          {buttonText} {buttonIcon}
        </button>
      </div>
    </div>
  );
}

ReferralLinkListItem.propTypes = {
  item: PropTypes.object,
};

export default ReferralLinkListItem;
