import clsx from "clsx";
import CategoryFilter from "./Filter/CategoryFilter";
import ItemCard from "./ItemCard/ItemCard";
import Title from "./Title/Title";
import data from "./dummyData/dummyData";
import { useEffect, useState } from "react";

const Week1 = () => {
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
    <div className="box__inner">
      <Title text={"G마켓 베스트"} />
      <CategoryFilter categories={data.categories} />

      <div className="box__best-list">
        <ul className="list__best">
          {data.items.map((item, idx) => {
            return (
              <li
                className={clsx(
                  "list-item",
                  item.rank === 1 && "list-item-rank1"
                )}
                key={`itemcard-${item.goodsCode}`}
              >
                <ItemCard data={item} isPC={isPC} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Week1;
