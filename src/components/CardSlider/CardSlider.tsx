import React from "react";
import Slider from "react-slick";
import { Product } from "../../types/Product";
import { CastomCard } from '../CastomCard';

import "./CardSlider.scss";

type Props = {
  products: Product[];
  addFavouritesDevices: (device: Product) => void;
  addStoreDevices: (device: Product) => void;
  favouritesDevices: Product[];
  storeDevices: Product[];
};

export const CardSlider: React.FC<Props> = ({
  products,
  addFavouritesDevices,
  addStoreDevices,
  favouritesDevices,
  storeDevices,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings} className="cards-slider">
      {products.map((product) => {
        return (
          <CastomCard
            product={product}
            key={product.id}
            addFavouritesDevices={addFavouritesDevices}
            addStoreDevices={addStoreDevices}
            favouritesDevices={favouritesDevices}
            storeDevices={storeDevices}
          />
        );
      })}
    </Slider>
  );
};
