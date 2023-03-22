import { ASSET_LIST } from "../../common/constant";
import Icons from "../../common/icons/Icons";
import TitleShow from "../titleShow/TitleShow";
import "./AssetList.css";

function AssetList() {
  return (
    <div className="asset_list">
      {ASSET_LIST?.map((item, index) => (
        <div className="asset_list__item">
          <div
            className="asset_list__item__top"
            style={{
              background: item?.top_background,
            }}
          >
            <div
              className="asset_list__item__top__item"
              style={{
                backgroundColor: item?.icon_background,
              }}
            >
              <Icons title={item.icon} />
            </div>
          </div>
          <div className="asset_list__item__bottom">
            <div className="asset_list__item__bottom__item">
              <h3 className="asset_list__item__bottom__item__title">
                {item?.title}
              </h3>
              <TitleShow {...item?.price} />
              <TitleShow {...item?.market_cap} />
              <TitleShow {...item?.popularity_pairs} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssetList;
