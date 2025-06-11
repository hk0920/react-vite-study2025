import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import clsx from "clsx";

const getSwiperPramas = {
  wrapperTag: "ul",
  wrapperClass: "list__category-filter",
  slidesPerView: "auto",
  navigation: {
    prevEl: ".box__category-filter .swiper-button-prev",
    nextEl: ".box__category-filter .swiper-button-next",
  },
};

const CategoryItem = ({ item, isActive }) => {
  const { imageUrl, text } = item || {};
  return (
    <a
      href="#"
      className={clsx("link__category", isActive && "link__category--active")}
    >
      <span className="box__thumbnail">
        <img src={imageUrl} alt="" className="image" />
      </span>
      <span className="text__category">{text}</span>
    </a>
  );
};

const CategoryFilter = ({ categories }) => {
  if (!categories) return false;

  return (
    <div className="box__filter-wrap">
      <div className="box__category-filter">
        <div className="box__category-inner">
          <Swiper modules={[Navigation]} {...getSwiperPramas}>
            <ul className="list__category-filter">
              {categories.map((item, idx) => {
                return (
                  <SwiperSlide className="list-item">
                    <CategoryItem
                      item={item}
                      key={`category-item-${idx}`}
                      isActive={idx === 0}
                    />
                  </SwiperSlide>
                );
              })}
            </ul>
          </Swiper>
          <button type="button" className="swiper-button-prev">
            <span className="for-a11y">이전</span>
          </button>
          <button type="button" className="swiper-button-next">
            <span className="for-a11y">다음</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
