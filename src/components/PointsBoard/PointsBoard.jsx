import cn from "./PointsBoard.module.scss";
import {
  POINTS_BOARD_BUTTONS,
  POINTS_BOARD_TITLE,
} from "../../constants/constants";
import Board from "./Board/Board";

function PointsBoard() {
  return (
    <section className={cn.pointsBoard}>
      <div className="container">
        <div className={cn.inner}>
          <p className={cn.title}>{POINTS_BOARD_TITLE}</p>
          <div className={cn.buttonsAndBoard}>
            <div className={cn.buttons}>
              {POINTS_BOARD_BUTTONS.map((button) => (
                <button key={button.id} className={cn.button}>
                  {button.text}
                </button>
              ))}
            </div>
            <Board />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PointsBoard;
