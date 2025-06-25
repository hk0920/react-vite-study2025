const ItemThumbnail = ({ itemUrl, imageUrl, itemName, tagLabels }) => {
  return (
    <div className="box__thumbnail">
      {tagLabels && <span className="box__label">{tagLabels[0].text}</span>}
      <img src={imageUrl} alt={itemName} className="image" />
    </div>
  );
};

export default ItemThumbnail;
