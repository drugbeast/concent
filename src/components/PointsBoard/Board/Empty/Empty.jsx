import cn from "./Empty.module.scss";
import {
  NO_POINTS_EMPTY,
  NO_REFERRALS_EMPTY,
} from "../../../../constants/constants";
import PropTypes from "prop-types";

function Empty({ type }) {
  const staticInformation =
    type == "No Points" ? NO_POINTS_EMPTY : NO_REFERRALS_EMPTY;
  return (
    <div className={cn.empty}>
      <div className={cn.inner}>
        <div className={cn.content}>
          <div className={type == "No Points" ? cn.imageContainer : `${cn.imageContainer} ${cn.person}`}>{staticInformation.icon}</div>
          <p className={cn.title}>{staticInformation.title}</p>
          <p className={cn.text}>{staticInformation.text}</p>
        </div>
      </div>
    </div>
  );
}

Empty.propTypes = {
  type: PropTypes.string,
};

export default Empty;
