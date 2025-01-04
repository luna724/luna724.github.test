/**
 * どのページでも共通して表示されるコンポーネント
 * 一番下に表示される
 */
import "./Footer.scss";
import {useEffect, useState} from "react";
import RepositoryCDN from "./assets/RepositoryCDN.jsx";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 1;
      if (isAtBottom && !isVisible) {
        setIsVisible(true);
      } else if (!isAtBottom && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    const footerElement = document.querySelector('.always-lower');
    const contentElement = document.querySelector('.footer-content');
    const handleAnimationEnd = () => {
      if (isVisible) {
        contentElement.style.display = 'block';
      } else {
        contentElement.style.display = 'none';
      }
    };

    footerElement.addEventListener('animationend', handleAnimationEnd);
    return () => footerElement.removeEventListener('animationend', handleAnimationEnd);
  }, [isVisible]);

  return (
    <>
      <div className={"always-lower-2"}></div>
      <div className={`always-lower ${isVisible ? 'visible' : 'hidden'}`}>
        <footer className={"footer-content"}>

          {/* 左下、Github, discord, その他(/bio) へのリンクボタンを配置 */}
          <div className={"footer-links"}>
            <a href={"https://github.com/luna724"} target={"_blank"}>
              <i className="fab fa-github" /> Github
            </a>
          </div>

          {/* 右下、Powered by Vite.js を表示 */}
          <div className={"powered-by-vite"}>
            <a href={"https://vite.dev"} target={"_blank"} className={"vite-link"}>
              Powered by{' '}
              <span>
                <RepositoryCDN
                  cdnPath="https://vitejs.dev/logo.svg"
                  directLink="https://vite.dev"
                  className="vite-logo"
                />
                Vite.js
              </span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}