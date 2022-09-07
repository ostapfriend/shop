import iphone10xs from "../../images/iphone10xs.jpg";
import { Product } from "../../types/Product";
import { Button } from '../Button';

import "./CastomCard.scss";

type Props = {
  product: Product;
  addFavouritesDevices: (device: Product) => void;
  addStoreDevices: (device: Product) => void;
  favouritesDevices: Product[];
  storeDevices: Product[];
};

export const CastomCard: React.FC<Props> = ({
  product,
  addFavouritesDevices,
  addStoreDevices,
  favouritesDevices,
  storeDevices,
}) => {
  return (
    <div className="card">
      <img src={iphone10xs} alt={product.name} className="card__img" />
      <div className="card__title-container">
        <h2 className="card__title">{product.name}</h2>
      </div>
      <div className="card__price">
        <h1 className="card__price-current">{`$${product.price}`}</h1>
        <h1 className="card__price-previous">{`$${product.price + 200}`}</h1>
      </div>
      <div className="card__subscribe">
        <div className="card__subscribe-container">
          <h2 className="card__subscribe-title">Screen</h2>
          <h2 className="card__subscribe-settings">{product.screen}</h2>
        </div>
        <div className="card__subscribe-container">
          <h2 className="card__subscribe-title">Capacity</h2>
          <h2 className="card__subscribe-settings">{`${product.capacity}` || "uknown"}</h2>
        </div>
        <div className="card__subscribe-container">
          <h2 className="card__subscribe-title">RAM</h2>
          <h2 className="card__subscribe-settings">{`${product.ram}` || "uknown"}</h2>
        </div>
      </div>

      <Button
        product={product}
        addFavouritesDevices={addFavouritesDevices}
        addStoreDevices={addStoreDevices}
        favouritesDevices={favouritesDevices}
        storeDevices={storeDevices}
      />
    </div>
  );
};

