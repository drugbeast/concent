import cn from "./BoardItem.module.scss";
import PropTypes from "prop-types";
import Logo from "../../../../assets/images/logo.svg?react";

function BoardItem(props) {
  const {
    rank,
    name,
    avatar,
    invitedBy,
    invitedByAvatar,
    points,
    type,
    timestamp,
    source,
    sourceIcon,
    joined,
    wallet,
  } = props;
  return (
    <div className={cn.item}>
      {type == "Leaderboard" && (
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
          <div className={`${cn.points} ${cn.leaderboard}`}>
            <span>{points}</span>
            <div className={cn.pointsSymbolWrapper}>
              <Logo fill="#ffffff" width={14} height={8} />
            </div>
          </div>
        </div>
      )}
      {type == "My Points" && (
        <div className={cn.inner}>
          <div className={cn.timestamp}>{timestamp}</div>
          <div className={cn.source}>
            {!sourceIcon.includes("x") ? (
              <img src={sourceIcon} className={cn.sourceIcon} />
            ) : (
              <div className={cn.sourceIconWrapper}>
                <img src={sourceIcon} className={cn.sourceIcon} />
              </div>
            )}
            <span>{source}</span>
          </div>
          <div className={`${cn.points} ${cn.mypoints}`}>
            <span>{points}</span>
            <div className={cn.pointsSymbolWrapper}>
              <Logo fill="#ffffff" width={14} height={8} />
            </div>
          </div>
        </div>
      )}
      {type == "My Referrals" && (
        <div className={cn.inner}>
          <div className={cn.joined}>{joined}</div>
          <div className={cn.referral}>
            <img src={avatar} className={cn.avatar} />
            <span>{name}</span>
          </div>
          <div className={cn.wallet}>{wallet}</div>
          <div className={`${cn.points} ${cn.myreferrals}`}>
            <span>{points}</span>
            <div className={cn.pointsSymbolWrapper}>
              <Logo fill="#ffffff" width={14} height={8} />
            </div>
          </div>
        </div>
      )}
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
  type: PropTypes.string,
  timestamp: PropTypes.string,
  source: PropTypes.string,
  sourceIcon: PropTypes.string,
  wallet: PropTypes.string,
  joined: PropTypes.string,
};

export default BoardItem;
