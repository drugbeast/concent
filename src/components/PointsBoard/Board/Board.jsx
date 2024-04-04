import cn from "./Board.module.scss";
import BoardHeader from "./BoardHeader/BoardHeader";
import BoardItem from "./BoardItem/BoardItem";

function Board() {
  return (
    <section className={cn.board}>
      <BoardHeader />
      <BoardItem />
    </section>
  );
}

export default Board;
