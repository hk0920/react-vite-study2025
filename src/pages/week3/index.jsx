import { useEffect, useRef, useState } from "react";
import TermsList from "../../components/week3/Terms/TermsList";
import dummyData from "../../components/week3/dummyData/dummyData";
import "./css/index.css";

const Week3 = () => {
  const [windowY, setWindowY] = useState(window.scrollY);
  // const [stateText, setStateText] = useState();
  const [isFixed, setIsFixed] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setWindowY(window.scrollY);
    });

    if (windowY > 100) {
      boxRef.current.style.position = "fixed";
      boxRef.current.style.top = 0;
      boxRef.current.style.left =
        (windowY /
          (document.querySelector("body").clientHeight -
            window.innerHeight +
            100)) *
          100 +
        "%";
    } else {
      boxRef.current.style.position = "";
      boxRef.current.style.top = "";
    }
  }, [windowY]);

  return (
    <>
      {/* <div className="box__scroll-wrap">
        <p className="text__desc">상태 : {stateText}</p>
        <div className="box__scroll"></div>
      </div> */}
      <div className="box__inner">
        <div className="box__scroll" ref={boxRef}></div>
      </div>
      <div className="box__inner">
        <TermsList terms={dummyData.terms} />
      </div>
    </>
  );
};

export default Week3;
