import CategoryFilter from "./Filter/CategoryFilter";
import Title from "./Title/Title";
import data from "./dummyData/dummyData";

const Week1 = () => {
  return (
    <div className="box__inner">
      <Title text={"G마켓 베스트"} />
      <CategoryFilter categories={data.categories} />
    </div>
  );
};

export default Week1;
