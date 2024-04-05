import cn from "./BoardItem.module.scss";
import PropTypes from "prop-types";
import Logo from "../../../../assets/images/logo.svg?react";

function BoardItem(props) {
  const { rank, name, avatar, invitedBy, invitedByAvatar, points } = props;
  return (
    <div className={cn.item}>
      <div className={cn.inner}>
        <div className={cn.rank}>{rank}</div>
        <div className={cn.user}>
          <img src={avatar} className={cn.avatar} />
          <span>{name}</span>
        </div>
        <div className={cn.invitedBy}>
          {invitedByAvatar != "" && (
            <img src={invitedByAvatar} className={cn.invitedByAvatar} />
          )}
          <span>{invitedBy}</span>
        </div>
        <div className={cn.points}>
          <span>{points}</span>
          <div className={cn.pointsSymbolWrapper}>
            <Logo fill="#ffffff" width={14} height={8}/>
          </div>
        </div>
      </div>
    </div>
  );
}

BoardItem.propTypes = {
  rank: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  invitedBy: PropTypes.string,
  invitedByAvatar: PropTypes.string,
  points: PropTypes.string,
};

export default BoardItem;
