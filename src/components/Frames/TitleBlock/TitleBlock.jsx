import cn from "./TitleBlock.module.scss";
import PropTypes from "prop-types";

function TitleBlock(props) {
  const { title, text, type } = props;
  return (
    <div className={type == 'recent-joins' ? `${cn.titleBlock} ${cn.recentJoins}` : cn.titleBlock}>
      <p className={cn.title}>{title}</p>
      <p className={cn.text}>{text}</p>
    </div>
  );
}

TitleBlock.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string
};

export default TitleBlock;
