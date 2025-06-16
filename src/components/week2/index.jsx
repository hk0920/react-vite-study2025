import Tab from "./Tab/Tab";
import Title from "./Title/Title";
import dummyData from "./dummyData/dummyData";

const Week2 = () => {
  return (
    <>
      <Title title="믿고 장보는 공식 브랜드" />
      <Tab tabs={dummyData.sdBrandItemCatalogs} />
    </>
  );
};

export default Week2;
