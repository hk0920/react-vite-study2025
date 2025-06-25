import { useExternalCss } from "../../App";
import Tab from "../../components/week2/Tab/Tab";
import SubTitle from "../../components/week2/SubTitle/SubTitle";
import dummyData from "../../components/week2/dummyData/dummyData";
import ItemCard from "../../components/week2/ItemCard/ItemCard";
import "./css/index.css";

const Week2 = () => {
  useExternalCss([
    "//script.gmarket.co.kr/pc/css/application/kr/smilefresh/app.css",
    "//script.gmarket.co.kr/starro/desktop/css/gnb/gnb.css",
    "//script.gmarket.co.kr/starro/desktop/css/smilefresh/smilefresh.css",
  ]);

  const brandTabs = dummyData.sdBrandItemCatalogs.map((item) => ({
    sdBrandName: item.sdBrandName,
    brandLogoImage: item.brandLogoImage,
  }));

  return (
    <>
      <div className="box__sub-category">
        <div className="box__sub-category-inner">
          <SubTitle title={dummyData.title1 + " " + dummyData.title2} />
          <Tab tabs={brandTabs} />
          <a href="" className="sprite__smilefresh--after link__view-all">
            전체보기
          </a>
        </div>
      </div>
      <div className="box__itemcard-slide">
        <ul className="box__items-list">
          {dummyData.sdBrandItemCatalogs.map((data, idx) => {
            return (
              <li className="list-item">
                <ItemCard data={data.items} key={`itemcard-${idx}`} />;
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Week2;
