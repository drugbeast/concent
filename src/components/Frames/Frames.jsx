import Frame from "./Frame/Frame";
import cn from "./Frames.module.scss";
import {
  REFERRAL_LINK_TITLEBLOCK_TITLE,
  REFERRAL_LINK_TITLEBLOCK_TEXT,
  REFERRAL_LINK_STEPS_LIST,
  RECENT_JOINS_TITLEBLOCK_TEXT,
  RECENT_JOINS_TITLEBLOCK_TITLE,
  RECENT_JOINS_USERS_LIST,
} from "../../constants/constants";

function Frames() {
  return (
    <section className={cn.frames}>
      <div className="container">
        <div className={cn.inner}>
          <Frame
            type="referral-link"
            title={REFERRAL_LINK_TITLEBLOCK_TITLE}
            text={REFERRAL_LINK_TITLEBLOCK_TEXT}
            list={REFERRAL_LINK_STEPS_LIST}
          />
          <Frame
            type="recent-joins"
            title={RECENT_JOINS_TITLEBLOCK_TITLE}
            text={RECENT_JOINS_TITLEBLOCK_TEXT}
            list={RECENT_JOINS_USERS_LIST}
          />
        </div>
      </div>
    </section>
  );
}

export default Frames;
