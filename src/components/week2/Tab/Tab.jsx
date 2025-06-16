const Tab = ({ tabs }) => {
  return (
    <div className="box__tab">
      {tabs.map((tab, idx) => {
        return (
          <button type="button" className="button__tab" key={`tab-${idx}`}>
            <img src={tab.imgUrl} alt={tab.text} />
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
