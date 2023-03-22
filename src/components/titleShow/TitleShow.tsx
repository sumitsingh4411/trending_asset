import Icons from "../../common/icons/Icons";
import "./TitleShow.css";

interface ITitleShowProps {
  title: string;
  value?: string;
  change?: string;
  list?: Array<any>;
  width?: number;
  type?: string;
}
function TitleShow({
  title,
  value,
  change,
  width,
  type,
  list,
}: ITitleShowProps) {
  return (
    <div className="title_show">
      <div
        className="title_show__value"
        style={{
          width: width,
        }}
      >
        {value ? (
          value
        ) : (
          <div className="title_show__value__list">
            {list?.map((item: any, index) => (
              <div
                className="title_show__value__list__item"
                key={index}
                style={{
                  backgroundColor: item?.background,
                }}
              >
                <Icons title={item?.icon} width={16} height={16} />
              </div>
            ))}
          </div>
        )}
        {change && (
          <span
            className={`title_show__value__change title_show__value__change--${type}`}
          >
            {change}
          </span>
        )}
      </div>
      <div className="title_show__title">{title}</div>
    </div>
  );
}

export default TitleShow;
