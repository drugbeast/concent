import cn from "./BoardHeader.module.scss";
import "./BoardHeader.scss"
import PropTypes from "prop-types";

function BoardHeader(props) {
  const { titles, type } = props;
  return (
    <div className={cn.header}>
      <div className={`${cn.inner} ${type.split(" ").join("").toLowerCase()}`}>
        {titles.map((title) => (
          <span key={title.id} className={cn.title}>
            {title.text}
          </span>
        ))}
      </div>
    </div>
  );
}

BoardHeader.propTypes = {
  titles: PropTypes.array,
  type: PropTypes.string,
};

export default BoardHeader;
