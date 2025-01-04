import PropTypes from "prop-types";
import "./Luna724Icon.css";

/**
 * luna724 の Github ユーザーアイコンを表示するコンポーネント
 * 
 * @returns {Element}
 * @constructor
 */
export default function Luna724Icon({scale = 2, className = ""}) {
  const githubUserIcon = "https://avatars.githubusercontent.com/u/111692896?v=4";
  return (
    <div>
      <a href="https://github.com/luna724" target="_blank">
        <img
          src={githubUserIcon} className={`luna724-icon ${className}`}
          alt="luna724 icon"
          style={{transform: `scale(${scale})`}}
        />
      </a>
    </div>
);
}

Luna724Icon.propTypes = {
  scale: PropTypes.number,
  className: PropTypes.string,
};