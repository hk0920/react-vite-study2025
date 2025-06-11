const Title = ({ text }) => {
  return (
    <div className="box__best-top">
      <div className="box__best-title">
        <h1 className="text__title">{text} </h1>
        <div className="box__tooltip-info">
          <button type="button" className="button__tooptip">
            <span className="for-a11y">안내창</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
