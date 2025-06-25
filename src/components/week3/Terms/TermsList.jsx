import clsx from "clsx";
import { useEffect, useState } from "react";

const TermItem = ({ data, idx, isChecked, handleCheckbox }) => {
  const { title, detail } = data || {};
  const [isActiveDetail, setIsActiveDetail] = useState(false);
  const detailActiveStyle = isActiveDetail ? { display: "block" } : {};
  return (
    <>
      <div className="box__term-title">
        <input
          type="checkbox"
          name=""
          id={`checkbox-${idx}`}
          checked={isChecked}
          className="form__input"
          onChange={() => handleCheckbox(idx)}
        />
        <label htmlFor={`checkbox-${idx}`} className="text__label">
          {title}
        </label>
        {detail && (
          <button
            type="button"
            className={clsx(
              "button__detail",
              isActiveDetail && "button__detail--active"
            )}
            onClick={() => setIsActiveDetail(!isActiveDetail)}
          >
            자세히 보기
          </button>
        )}
      </div>
      {detail && (
        <div className="box__term-content" style={detailActiveStyle}>
          {detail}
        </div>
      )}
    </>
  );
};

const TermsList = ({ terms }) => {
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [termCheckArr, setTermCheckArr] = useState(
    terms.map((el) => el.isChecked)
  );
  const [countCheckbox, setCountCheckbox] = useState(
    termCheckArr.filter((el) => el === true).length
  );

  const handleCheckbox = (activeIndex) => {
    let copyArr = [...termCheckArr];
    copyArr[activeIndex] = !copyArr[activeIndex];
    setTermCheckArr(copyArr);

    const count = copyArr.filter((el) => el === true).length;

    setCountCheckbox(count);
  };

  const handleAllCheckbox = () => {
    const nextAllCheck = !isAllCheck;
    setIsAllCheck(nextAllCheck);

    const updatedArr = termCheckArr.map(() => nextAllCheck);
    setTermCheckArr(updatedArr);
    setCountCheckbox(nextAllCheck ? updatedArr.length : 0);
  };

  useEffect(() => {
    setIsAllCheck(countCheckbox === termCheckArr.length);
  }, [countCheckbox, termCheckArr.length]);

  return (
    <ul className="list__terms">
      <li className="list-item">
        <div className="box__term-title">
          <input
            type="checkbox"
            name=""
            id="checkbox-all"
            checked={isAllCheck}
            className="form__input"
            onChange={handleAllCheckbox}
          />
          <label htmlFor="checkbox-all" className="text__label">
            전체 동의
          </label>
        </div>
      </li>
      {terms.map((term, idx) => {
        return (
          <li className="list-item" key={`terms-${idx}`}>
            <TermItem
              data={term}
              idx={idx}
              isChecked={termCheckArr[idx]}
              handleCheckbox={handleCheckbox}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default TermsList;
