import { useExternalCss } from "../../App";
import Tab from "./Tab/Tab";
import SubTitle from "./SubTitle/SubTitle";
import dummyData from "./dummyData/dummyData";
import ItemCard from "./ItemCard/ItemCard";

const Week2 = () => {
  useExternalCss([
    "//script.gmarket.co.kr/starro/desktop/css/smilefresh/smilefresh.css",
  ]);

  const brandTabs = dummyData.sdBrandItemCatalogs.map((item) => ({
    sdBrandName: item.sdBrandName,
    brandLogoImage: item.brandLogoImage,
  }));

  console.log(brandTabs);

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
            return <ItemCard data={data.items} key={`itemcard-${idx}`} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Week2;
