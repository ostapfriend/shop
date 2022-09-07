import React from 'react';
import { Link } from 'react-router-dom';

import "./Store.scss";

import arrowleft from "../../images/arrowleft.svg";
import { Product } from '../../types/Product';
import { CardStore } from '../../components/CardStore';

type Props = {
  storeDevices: Product[],
  addStoreDevices: (device: Product) => void,
  addPrice: (product: Product) => void,
  deletePrice: (product: Product) => void,
  allPrice: number,
}

export const Store: React.FC<Props> = ({storeDevices, addStoreDevices, addPrice, deletePrice, allPrice}) => {
  const countItems = storeDevices.length;

  return (
    <main className="store">
      <div className="container store__container">
        <div className="store__container-main">
          <div className="store__back-container">
            <img src={arrowleft} alt="arrow left icon" />
            <Link to="/" className="store__location">Back</Link>
          </div>
          <h2 className="store__title">Cart</h2>

          <div className="store__content">
            <ul className="store__list">
              {storeDevices.map((storeDevice ) => (
                <CardStore
                  key={storeDevice.id}
                  storeDevice={storeDevice}
                  addStoreDevices={addStoreDevices}
                  addPrice={addPrice}
                  deletePrice={deletePrice}
                />
              ))}
            </ul>

            <div className="store__allPrice">
              <h2 className="store__allPrice-title">{`$${allPrice}`}</h2>
              <p className="store__allPrice-items">{`Total for ${countItems} items`}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
