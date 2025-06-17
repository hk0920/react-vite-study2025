import ItemThumbnail from "./ItemThumbnail";

const ItemCard = ({ data }) => {
  const {
    buyCount,
    buyUnitCount,
    discountRate,
    hasOption,
    imageUrl,
    isAdult,
    isBigSmileItem,
    isCartVisible,
    isSoldOut,
    itemName,
    itemNo,
    itemPrice,
    itemUrl,
    rank,
    reviewPoint,
    sellPrice,
    tagLabels,
  } = data || {};

  return (
    <>
      <ItemThumbnail
        itemUrl={itemUrl}
        imageUrl={imageUrl}
        itemName={itemName}
        tagLabels={tagLabels}
      />
    </>
  );
};

export default ItemCard;
