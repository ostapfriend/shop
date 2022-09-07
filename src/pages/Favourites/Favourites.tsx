import React from "react";
import { CastomCard } from '../../components/CastomCard';

import { Path } from '../../components/Path';
import { Product } from "../../types/Product";

import "./Favourites.scss";


type Props = {
  favouritesDevices: Product[];
  addFavouritesDevices: (device: Product) => void;
  addStoreDevices: (device: Product) => void;
  storeDevices: Product[];
};

export const Favourites: React.FC<Props> = ({
  addFavouritesDevices,
  addStoreDevices,
  favouritesDevices,
  storeDevices,
}) => {
  return (
    <main className="favourites">
      <div className="container favourites__container">
        <div className="favourites__container-main">
          <Path location="Favourites" />
          <div className="favourites__main-content">
            <h2 className="title">Favourites</h2>
            <p className="favourites__items">{`${favouritesDevices.length} items`}</p>
          </div>
          <div className="favourites__container">
            {favouritesDevices.length > 0 ? (
              favouritesDevices.map((favouritesDevice) => (
                <CastomCard
                  key={favouritesDevice.id}
                  product={favouritesDevice}
                  addFavouritesDevices={addFavouritesDevices}
                  addStoreDevices={addStoreDevices}
                  favouritesDevices={favouritesDevices}
                  storeDevices={storeDevices}
                />
              ))
            ) : (
              <div className="favourites__withoutCards">
                <h1>Don't have cards</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
