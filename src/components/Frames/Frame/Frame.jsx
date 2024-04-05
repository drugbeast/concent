import { useState } from "react";
import RecentJoinsListItem from "../RecentJoinsListItem/RecentJoinsListItem";
import ReferralLinkListItem from "../ReferralLinkLIstItem/ReferralLinkListItem";
import TitleBlock from "../TitleBlock/TitleBlock";
import cn from "./Frame.module.scss";
import PropTypes from "prop-types";
import {
  AFTER_STEPS_COPY_BUTTON_TEXT,
  AFTER_STEPS_COPY_LINK,
  AFTER_STEPS_UPPER,
  BUTTONS_AMOUNT,
} from "../../../constants/constants";
import Copy from "../../../assets/images/referral-link/copy.svg?react";

function Frame(props) {
  const { type, title, text, list } = props;
  const [currentButton, setCurrent] = useState(1);

  return (
    <section className={cn.frame}>
      <div className={cn.inner}>
        <TitleBlock title={title} text={text} type={type} />
        {currentButton <= BUTTONS_AMOUNT && (
          <div className={cn.list}>
            {list.map((item) =>
              type == "referral-link" ? (
                <ReferralLinkListItem
                  key={item.id}
                  item={item}
                  setCurrent={setCurrent}
                  current={currentButton}
                />
              ) : type == "recent-joins" ? (
                <RecentJoinsListItem key={item.id} item={item} />
              ) : null
            )}
          </div>
        )}
        {currentButton > BUTTONS_AMOUNT && (
          <div className={cn.afterSteps}>
            <div className={cn.upper}>
              {AFTER_STEPS_UPPER.map((item) => (
                <div className={cn.upperInner} key={item.id}>
                  <div className={cn.LeftimageContainer}>{item.icon}</div>
                  <span className={cn.LeftTitle}>{item.title}</span>
                  <span className={cn.LeftText}>{item.text}</span>
                </div>
              ))}
            </div>
            <div className={cn.lower}>
              <div className={cn.linkField}>{AFTER_STEPS_COPY_LINK}</div>
              <button className={cn.copyButton}>
                {AFTER_STEPS_COPY_BUTTON_TEXT} <Copy />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

Frame.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.array,
};

export default Frame;
