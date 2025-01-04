import PropTypes from "prop-types";
import "./Luna724Icon.css";

/**
 * CDNパスからアイコンを表示するコンポーネント
 * CDNパスには 直URL または public/cdn からの相対パスを指定することが可能
 * directLink は クリック時の href へのダイレクト先を示す
 *
 * @param cdnPath
 * @param scale
 * @param directLink
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
export default function RepositoryCDN({cdnPath = "", scale = 1, directLink = "", className = ""}) {
  return (
    <a target="_blank" href={directLink !== "" ? directLink : undefined}>
      <img
        src={cdnPath} className={`cdn ${className}`}
        alt="cdn icon" style={{transform: `scale(${scale})`}}
      />
    </a>
  );
}

RepositoryCDN.propTypes = {
  cdnPath: PropTypes.string,
  scale: PropTypes.number,
  directLink: PropTypes.string,
  className: PropTypes.string,
};