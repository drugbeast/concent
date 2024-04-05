import { LEADERBOARD_ITEMS } from "../../../constants/constants";
import cn from "./Board.module.scss";
import BoardHeader from "./BoardHeader/BoardHeader";
import BoardItem from "./BoardItem/BoardItem";

function Board() {
  return (
    <section className={cn.board}>
      <BoardHeader />
      {LEADERBOARD_ITEMS.map((item) => (
        <BoardItem
          key={item.id}
          rank={item.rank}
          name={item.name}
          avatar={item.avatar}
          invitedBy={item.invitedBy}
          invitedByAvatar={item.invitedByAvatar}
          points={item.points}
        />
      ))}
    </section>
  );
}

export default Board;
