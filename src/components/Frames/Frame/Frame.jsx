import RecentJoinsListItem from "../RecentJoinsListItem/RecentJoinsListItem";
import ReferralLinkListItem from "../ReferralLinkLIstItem/ReferralLinkListItem";
import TitleBlock from "../TitleBlock/TitleBlock";
import cn from "./Frame.module.scss";
import PropTypes from "prop-types";

function Frame(props) {
  const { type, title, text, list } = props;
  return (
    <section className={cn.frame}>
      <div className={cn.inner}>
        <TitleBlock title={title} text={text} type={type} />
        <div className={cn.list}>
          {list.map((item) =>
            type == "referral-link" ? (
              <ReferralLinkListItem key={item.id} item={item} />
            ) : type == "recent-joins" ? (
              <RecentJoinsListItem key={item.id} item={item} />
            ) : null
          )}
        </div>
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
