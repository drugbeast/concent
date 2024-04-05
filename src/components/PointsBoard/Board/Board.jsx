import {
  LEADERBOARD_HEADER_TITLES,
  LEADERBOARD_ITEMS,
  MY_POINTS_ITEMS,
  MY_REFERRALS_ITEMS,
  MY_POINTS_HEADER_TITLES,
  MY_REFERRALS_HEADER_TITLES,
} from "../../../constants/constants";
import cn from "./Board.module.scss";
import BoardHeader from "./BoardHeader/BoardHeader";
import BoardItem from "./BoardItem/BoardItem";
import PropTypes from "prop-types";

function Board({ type }) {
  return (
    <section className={cn.board}>
      <BoardHeader
        titles={
          type == "Leaderboard"
            ? LEADERBOARD_HEADER_TITLES
            : type == "My Points"
            ? MY_POINTS_HEADER_TITLES
            : type == "My Referrals"
            ? MY_REFERRALS_HEADER_TITLES
            : ""
        }
        type={type}
      />
      {type == "Leaderboard" &&
        LEADERBOARD_ITEMS.map((item) => (
          <BoardItem
            key={item.id}
            rank={item.rank}
            name={item.name}
            avatar={item.avatar}
            invitedBy={item.invitedBy}
            invitedByAvatar={item.invitedByAvatar}
            points={item.points}
            type={type}
          />
        ))}
      {type == "My Points" &&
        MY_POINTS_ITEMS.map((item) => (
          <BoardItem
            key={item.id}
            timestamp={item.timestamp}
            source={item.source}
            sourceIcon={item.sourceIcon}
            points={item.points}
            type={type}
          />
        ))}
      {type == "My Referrals" &&
        MY_REFERRALS_ITEMS.map((item) => (
          <BoardItem
            key={item.id}
            joined={item.joined}
            name={item.name}
            avatar={item.avatar}
            wallet={item.wallet}
            points={item.points}
            type={type}
          />
        ))}
    </section>
  );
}

Board.propTypes = {
  type: PropTypes.string,
};

export default Board;
