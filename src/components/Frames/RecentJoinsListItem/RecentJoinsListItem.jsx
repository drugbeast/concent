import PropTypes from "prop-types";
import cn from "./RecentJoinsListItem.module.scss";

function RecentJoinsListItem({ item }) {
  const { avatar, nickname, joined } = item;
  return (
    <div className={cn.li}>
      <div className={cn.inner}>
        <div className={cn.avatarWithNickname}>
          <img src={avatar} />
          <span className={cn.nickname}>{nickname}</span>
        </div>
        <div className={cn.joined}>{joined}</div>
      </div>
    </div>
  );
}

RecentJoinsListItem.propTypes = {
  item: PropTypes.object,
};

export default RecentJoinsListItem;
