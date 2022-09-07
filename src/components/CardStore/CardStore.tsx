import React, { useState } from "react";

import "./CardStore.scss";

import iphone10xs from "../../images/iphone10xs.jpg";
import { Product } from "../../types/Product";

type Props = {
  storeDevice: Product;
  addStoreDevices: (device: Product) => void;
  addPrice: (product: Product) => void;
  deletePrice: (product: Product) => void;
};

export const CardStore: React.FC<Props> = ({
  storeDevice,
  addStoreDevices,
  addPrice,
  deletePrice,
}) => {
  const [counterDevice, setCounterDevice] = useState(0);

  return (
    <li className="card-store">
      <div className="card-store-left">
        <span
          className="card-store__delete"
          onClick={() => addStoreDevices(storeDevice)}
        />
        <img src={iphone10xs} alt="phone icon" className="card-store__img" />
        <p className="card-store__title">{storeDevice.name}</p>
      </div>
      <div className="card-store-right">
        <span
          className="card-store__btn"
          onClick={() => {
            deletePrice(storeDevice);
            setCounterDevice((prevCount) => prevCount - 1)
          }}
        />
        <p>{counterDevice}</p>
        <span
          className="card-store__btn card-store__btn-plus"
          onClick={() => {
            addPrice(storeDevice);
            setCounterDevice((prevCount) => prevCount + 1)
          }}
        />
        <p className="card-store__price">{`$${storeDevice.price}`}</p>
      </div>
    </li>
  );
};
