import PropTypes from "prop-types";
import cn from "./ReferralLinkListItem.module.scss";
import { useState } from "react";
import Check from "../../../assets/images/referral-link/check.svg?react";

function ReferralLinkListItem({ item, setCurrent, current }) {
  const { id, image, title, buttonText, buttonIcon, buttonDisabledIcon } = item;
  const [isDone, setDone] = useState(false)

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
        <button
          className={(id == 1 && !isDone) || id == current ? cn.button : `${cn.button} ${cn.disabled}`}
          onClick={() => {
            setDone(true)
            setCurrent((prev) => prev + 1);
          }}
          disabled={isDone || current != id}
        >
          {!isDone ? buttonText : "Done"}{" "}
          {!isDone && (current == id ? buttonIcon : buttonDisabledIcon)}
          {isDone && <Check />}
        </button>
      </div>
    </div>
  );
}

ReferralLinkListItem.propTypes = {
  item: PropTypes.object,
  setCurrent: PropTypes.func,
  current: PropTypes.number
};

export default ReferralLinkListItem;
