import { useState } from "react";
const TabChip = ({ data }) => {
  const { sdBrandName, brandLogoImage } = data || {};
  const { offImageUrl, onImageUrl } = brandLogoImage;

  const [isActive, setIsActive] = useState(false);

  return (
    <button type="button" className="button__chip">
      <img
        src={isActive ? onImageUrl : offImageUrl}
        alt={sdBrandName}
        className="image__brand-logo"
      />
    </button>
  );
};

const Tab = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="box__chip-group brand-type">
      {tabs.map((tab, idx) => {
        return <TabChip data={tab} key={`brand-chip-${idx}`} />;
      })}
    </div>
  );
};

export default Tab;
