const ItemInfo = ({ data }) => {
  const {
    buyCount,
    buyUnitCount,
    discountRate,
    hasOption,
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
    <div className="box__itemcard-info">
      <div className="box__element-info">
        <div className="element-info-qty">
          <button className="sprite__smilefresh--before element-info-qty-minus">
            <span className="for-a11y">상품 수 1 감소</span>
          </button>
          <span className="element-info-item-qty">
            <span className="for-a11y">선택된 수량</span>1
          </span>
          <button className="sprite__smilefresh--before element-info-qty-plus">
            <span className="for-a11y">상품 수 1 증가</span>
          </button>
        </div>
        {isCartVisible && (
          <button
            type="button"
            className="sprite__smilefresh--before element-info-cart"
          >
            <span className="for-a11y">장바구니 담기</span>
          </button>
        )}
      </div>
      <a href={itemUrl} className="link__itemcard-info">
        <span className="box__itemcard-title-area">
          <span className="text__title" id="item_title">
            {itemName}
          </span>
        </span>
        <span className="box__itemcard-price-area">
          <span className="box__price-seller">
            <span className="for-a11y">판매가</span>
            <strong className="text__price-seller">{sellPrice}</strong>
            <span className="text__unit">원</span>
          </span>
        </span>
        <span className="box__itemcard-info-score">
          <span className="sprite__smilefresh--before box__score-awards">
            <span className="for-a11y">평점</span>
            <span className="text text__score">5.0</span>
            <span className="for-a11y">후기</span>
            <span className="text text__num">({reviewPoint})</span>
            <span className="for-a11y">건</span>
          </span>
          <span className="box__score-buycnt">
            <span className="text text__buy">구매</span>
            <span className="text text__num">{buyCount}</span>
            <span className="for-a11y">건</span>
          </span>
        </span>
        <span className="box__itemcard-benefit-tag">
          <span className="box__tag box__tag-coupon">
            <span className="sprite__smilefresh--before box__inner">
              15% 쿠폰
            </span>
          </span>
        </span>
      </a>
      <button
        type="button"
        className="sprite__smilefresh--after button__favorite-item"
        aria-pressed="false"
        aria-label="관심상품 등록하기"
      ></button>
    </div>
  );
};
export default ItemInfo;
