import PropTypes from "prop-types";
import cn from "./ReferralLinkListItem.module.scss";

function ReferralLinkListItem({ item }) {
  const { image, title, buttonText, buttonIcon } = item;
  return (
    <div className={cn.li}>
      <div className={cn.inner}>
        <div className={cn.imageWithTitle}>
          <div className={title.includes("X") ? cn.imageContainer : ""}>
            <img
              src={image}
              className={title.includes("X") ? `${cn.x} ${cn.image}` : cn.image}
            />
          </div>
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
