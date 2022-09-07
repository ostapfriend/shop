import classnames from "classnames";
import { Product } from "../../types/Product";
import "./Button.scss";

type Props = {
  product: Product;
  addFavouritesDevices: (device: Product) => void;
  addStoreDevices: (device: Product) => void;
  favouritesDevices: Product[];
  storeDevices: Product[];
};

export const Button: React.FC<Props> = ({
  product,
  addFavouritesDevices,
  addStoreDevices,
  favouritesDevices,
  storeDevices,
}) => {
  const sameIdFavourites = favouritesDevices.find(
    (favouritesDevice) => favouritesDevice.id === product.id
  );
  const sameIdStore = storeDevices.find(
    (storeDevice) => storeDevice.id === product.id
  );

  const iconClass = classnames({
    "icon-container": true,
    "icon-container-selected": sameIdFavourites,
  });

  const buttonClass = classnames({
    button: true,
    "button-selected": sameIdStore,
  });

  return (
    <div className="button__container">
      <button className={buttonClass} onClick={() => addStoreDevices(product)}>
        {!sameIdStore ? "Add to card" : "Added to card"}
      </button>
      <span
        className={iconClass}
        onClick={() => addFavouritesDevices(product)}
      />
    </div>
  );
};
