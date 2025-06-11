const ItemCard = ({ data, isPC }) => {
  const {
    goodsCode,
    goodsName,
    sellPrice,
    linkUrl,
    discountPrice,
    price,
    itemPriceType,
    imageUrl,
    discountRate,
    expressShippingText,
    consultingPeriod,
    isPriceExpose,
    isStartPrice,
    isFreeShipping,
    isSuperDeal,
    sellCustNo,
    isExpressShipping,
    isBigSmileItem,
    miniShopInfo,
    reviewCount,
    avgStarPoint,
    rank,
    isAdultItem,
    lmos,
  } = data || {};

  return (
    <a href={linkUrl} className="link">
      <div className="box__thumbnail">
        <img src={imageUrl} alt={`${rank}위`} className="image" />
        <span className="box__label-rank">{rank}</span>
        {isBigSmileItem && (
          <span className="box__promotion-emblem">
            <img
              src="//pics.gmarket.co.kr/mobile/single/kr/promotion/bigs/tag/tag.png"
              alt="Big Smile Day"
              className="image"
            />
          </span>
        )}
      </div>
      <div className="box__item-info">
        {!isPC && (
          <div className="box__item-price">
            <div className="box__price">
              <div className="box__price-seller">
                <span className="for-a11y">판매가</span>
                <span className="text text__value">
                  {sellPrice.toLocaleString()}
                </span>
                <span className="text text__unit">원</span>
              </div>
              {isFreeShipping && (
                <div className="box__information-tags">
                  <span className="icon__tag icon__delivery-free">
                    <img
                      src="//pics.gmarket.co.kr/pc/single/kr/snowwhite/common/icon_deliveyfree_2x.png"
                      alt="무료배송"
                      className="image"
                    />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        <p className="box__item-title">{goodsName}</p>
        {isPC ? (
          <>
            <div className="box__item-price">
              <div className="box__price">
                <div className="box__price-seller">
                  <span className="for-a11y">판매가</span>
                  <span className="text text__value">
                    {sellPrice.toLocaleString()}
                  </span>
                  <span className="text text__unit">원</span>
                </div>
                {isFreeShipping && (
                  <div className="box__information-tags">
                    <span className="icon__tag icon__delivery-free">
                      <img
                        src="//pics.gmarket.co.kr/pc/single/kr/snowwhite/common/icon_deliveyfree_2x.png"
                        alt="무료배송"
                        className="image"
                      />
                    </span>
                  </div>
                )}
              </div>
            </div>
            {isSuperDeal && (
              <div className="box__lmo-tags">
                <span className="text__tags">
                  <img
                    src="//script.gmarket.co.kr/starro/desktop/images/single/best/logo_superdeal@3x.png"
                    alt="슈퍼딜"
                    className="image"
                  />
                </span>
              </div>
            )}
          </>
        ) : (
          <>
            {reviewCount && avgStarPoint && (
              <div className="gds-item-card__score">
                <i className="gds-icon gds-icon-star-small"></i>
                <span className="for-a11y">평점</span>
                <span className="gds-item-card__score-number">
                  {avgStarPoint}
                </span>
                <span className="for-a11y">후기</span>
                <span className="gds-item-card__score-count">
                  ({reviewCount})
                </span>
                <span className="for-a11y">건</span>
              </div>
            )}
            {lmos && (
              <div className="gds-item-card__nudging-group">
                {lmos.map((lmo, idx) => {
                  return (
                    <span className="gds-nudging-label" key={`lmo-${idx}`}>
                      <i className="gds-icon gds-icon-credit-card-small-green500"></i>
                      {lmo}
                    </span>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </a>
  );
};

export default ItemCard;
