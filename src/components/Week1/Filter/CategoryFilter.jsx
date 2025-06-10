import { useEffect, useState } from "react";
import clsx from "clsx";

const CategoryItem = ({ item, isPC }) => {
  const { imageUrl, text } = item || {};
  return (
    <li className="list-item">
      <a href="#" className="link__category">
        <span className="box__thumbnail">
          <img src={imageUrl} alt="" className="image" />
        </span>
        <span className={clsx(isPC ? "text__category" : "text__title")}>
          {text}
        </span>
      </a>
    </li>
  );
};

const CategoryFilter = ({ categories }) => {
  if (!categories) return false;

  const [windowX, setWindowX] = useState(window.innerWidth);
  const [isPC, setIsPC] = useState(false);

  const setDevices = (deviceWidth) => {
    if (deviceWidth >= 1120) {
      setIsPC(true);
    } else {
      setIsPC(false);
    }
  };

  useEffect(() => {
    setDevices(windowX);

    window.addEventListener("resize", (e) => {
      setDevices(e.target.innerWidth);
    });
  }, [isPC]);

  return (
    <div className={clsx(isPC ? "box__filter-wrap" : "box__sub-category")}>
      {isPC ? (
        <div className="box__category-filter box__1depth-filter">
          <div className="box__category-inner">
            <ul className="list__category-filter">
              {categories.map((item, idx) => {
                return (
                  <CategoryItem item={item} key={`category-item-${idx}`} />
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div
          className={clsx("box__category-filter", isPC && "box__1depth-filter")}
        >
          <ul
            className={clsx(
              "list__category-filter",
              !isPC && "list__1depth-filter"
            )}
          >
            {categories.map((item, idx) => {
              return <CategoryItem item={item} key={`category-item-${idx}`} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
