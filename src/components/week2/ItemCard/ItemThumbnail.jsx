const ItemThumbnail = ({ itemUrl, imageUrl, itemName, tagLabels }) => {
  return (
    <div className="box__thumbnail">
      {tagLabels && <span className="box__label">{tagLabels[0].text}</span>}
      <a href={itemUrl} className="link__itemcard">
        <img src={imageUrl} alt={itemName} className="image" />
      </a>
    </div>
  );
};

export default ItemThumbnail;
