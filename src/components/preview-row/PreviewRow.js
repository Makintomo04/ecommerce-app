import React from "react";
import "./preview_row.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import PreviewItem from "./preview_item/PreviewItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import MediaQuery from "react-responsive";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const PreviewRow = ({ title, items, isPreview, noTitle }) => {
  return (
    <div className="preview_row">
      {noTitle ? null : (
        <h1 className="preview_row__title">{title.toUpperCase()}</h1>
      )}
      <MediaQuery query="(max-device-width: 890px)">
        <Swiper
          slidesPerView="auto"
          // width={600}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // width={20}
          // setWrapperSize="true"
          // tag="div"
          loop
          navigation
          // width={200}
          // autoHeight="true"
          centeredSlides="true"
          // spaceBetween={150}
          loopFillGroupWithBlank="false"
          speed={500}
          // watchOverflow
          // parallax="true"
          // loopedSlides={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items
            .filter((item) => item.preview === true)
            .map((item) => (
              <SwiperSlide>
                <PreviewItem
                  SwiperSlide={SwiperSlide}
                  key={item.id}
                  item={item}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 890px)">
        <div className="preview_items">
          {items
            .filter((item) => item.preview === true)
            .map((item) => (
              <PreviewItem key={item.id} item={item} />
            ))}
        </div>
      </MediaQuery>
    </div>
  );
};

export default PreviewRow;
