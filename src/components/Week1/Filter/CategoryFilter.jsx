const CategoryItem = ({ item }) => {
  const { imageUrl, text } = item || {};
  return (
    <li className="list-item">
      <a href="#" className="link__category">
        <span className="box__thumbnail">
          <img src={imageUrl} alt="" className="image" />
        </span>
        <span className="text__category">{text}</span>
      </a>
    </li>
  );
};

const CategoryFilter = ({ categories }) => {
  if (!categories) return false;

  return (
    <div className="box__filter-wrap">
      <div className="box__category-filter">
        <div className="box__category-inner">
          <ul className="list__category-filter">
            {categories.map((item, idx) => {
              return <CategoryItem item={item} key={`category-item-${idx}`} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
