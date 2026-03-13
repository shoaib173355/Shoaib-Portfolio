import PropTypes from "prop-types";
import "./styles/style.css";

const HoverLinks = ({ text, cursor }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && "disable"}>
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

HoverLinks.propTypes = {
  text: PropTypes.string.isRequired,
  cursor: PropTypes.bool,
};

export default HoverLinks;