import React from "react";
// import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";
import styles2 from "./CSSModule2.module.scss";

// const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고

const CSSModule = () => {
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      <div className={styles2.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
