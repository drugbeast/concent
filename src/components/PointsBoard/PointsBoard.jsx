import cn from "./PointsBoard.module.scss";
import {
  POINTS_BOARD_BUTTONS,
  POINTS_BOARD_TITLE,
} from "../../constants/constants";
import Board from "./Board/Board";
import { useState } from "react";

function PointsBoard() {
  const [boardType, setBoardType] = useState("Leaderboard");
  return (
    <section className={cn.pointsBoard}>
      <div className="container">
        <div className={cn.inner}>
          <p className={cn.title}>{POINTS_BOARD_TITLE}</p>
          <div className={cn.buttonsAndBoard}>
            <div className={cn.buttons}>
              {POINTS_BOARD_BUTTONS.map((button) => (
                <button
                  key={button.id}
                  className={
                    button.text == boardType
                      ? `${cn.button} ${cn.active}`
                      : cn.button
                  }
                  onClick={(e) => setBoardType(e.target.textContent)}
                >
                  {button.text}
                </button>
              ))}
            </div>
            <Board type={boardType} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PointsBoard;
