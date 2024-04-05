import { LEADERBOARD_HEADER_TITLES } from "../../../../constants/constants";
import cn from "./BoardHeader.module.scss";

function BoardHeader() {
  return (
    <div className={cn.header}>
      <div className={cn.inner}>
        {LEADERBOARD_HEADER_TITLES.map((title) => (
          <span key={title.id} className={cn.title}>{title.text}</span>
        ))}
      </div>
    </div>
  );
}

export default BoardHeader;
