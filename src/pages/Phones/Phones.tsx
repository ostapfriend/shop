import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CastomCard } from '../../components/CastomCard';
import { Path } from '../../components/Path';

import { selectors } from "../../store/index";
import { Product } from "../../types/Product";

import "./Phones.scss";

type Props = {
  addFavouritesDevices: (device: Product) => void;
  addStoreDevices: (device: Product) => void;
  favouritesDevices: Product[];
  storeDevices: Product[];
};

export const Phones: React.FC<Props> = ({
  addFavouritesDevices,
  addStoreDevices,
  favouritesDevices,
  storeDevices,
}) => {
  const [sortBy, setSortBy] = useState("Open select menu");
  const [sortedPhones, setSortedPhones] = useState<Product[]>([]);

  const products = useSelector(selectors.getProducts);
  const phones = products.filter((product) => product.type === "phone");

  useEffect(() => {
    sortPhones();
  }, [sortBy]);

  const sortPhones = () => {
    if (sortBy === "alphabet") {
      const sorted = phones.sort((phoneA, phoneB) => phoneA.name.localeCompare(phoneB.name));
      setSortedPhones(sorted);
    } else if (sortBy === "price") {
      const sorted = phones.sort((phoneA, phoneB) => phoneA.price - phoneB.price);
      setSortedPhones(sorted);
    } else if (sortBy === "reverse"){
      const sorted = phones.sort((phoneA, phoneB) => phoneA.name.localeCompare(phoneB.name));
      setSortedPhones(sorted.reverse());
    } else {
      setSortedPhones(phones);
    }
  }

  const countPhone = products.filter(
    (product) => product.type === "phone"
  ).length;

  const handleSortBy = (event: {target: {value: string}}) => {
    const {value} = event.target;

    setSortBy(value);
  }

  return (
    <main className="phones">
      <div className="container phones__container">
        <div className="phones__container-main">
          <Path location="Phones" />
          <h2 className="title phones__title">Mobile phones</h2>
          <p className="phones__items">{`${countPhone} items`}</p>
          <div className="phones__selectors">
            <p className="phones__selectors-title">Sort by</p>
            <select
              value={sortBy}
              className="form-select form-select-custom"
              aria-label="Default select example"
              onChange={handleSortBy}
            >
              <option selected>Open select menu</option>
              <option value="alphabet">Alphabet</option>
              <option value="reverse">Reverse</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
        <ul className="phones__list">
          {sortedPhones.map((sortedPhone) => {
            return (
              <CastomCard
                product={sortedPhone}
                key={sortedPhone.id}
                addFavouritesDevices={addFavouritesDevices}
                addStoreDevices={addStoreDevices}
                favouritesDevices={favouritesDevices}
                storeDevices={storeDevices}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

