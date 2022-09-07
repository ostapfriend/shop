import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CastomCard } from '../../components/CastomCard';
import { Path } from '../../components/Path';

import { selectors } from "../../store/index";
import { Product } from "../../types/Product";

import "./Tablets.scss";

type Props = {
  addFavouritesDevices: (device: Product) => void;
  addStoreDevices: (device: Product) => void;
  favouritesDevices: Product[];
  storeDevices: Product[];
};

export const Tablets: React.FC<Props> = ({
  addFavouritesDevices,
  addStoreDevices,
  favouritesDevices,
  storeDevices,
}) => {
  const [sortBy, setSortBy] = useState("Open select menu");
  const [sortedTablets, setSortedTablets] = useState<Product[]>([]);

  const products = useSelector(selectors.getProducts);
  const tablets = products.filter((product) => product.type === "tablet");

  useEffect(() => {
    sortTablets();
  }, [sortBy]);

  const sortTablets = () => {
    if (sortBy === "alphabet") {
      const sorted = tablets.sort((phoneA, phoneB) => phoneA.name.localeCompare(phoneB.name));
      setSortedTablets(sorted);
    } else if (sortBy === "price") {
      const sorted = tablets.sort((phoneA, phoneB) => phoneA.price - phoneB.price);
      setSortedTablets(sorted);
    } else if (sortBy === "reverse"){
      const sorted = tablets.sort((phoneA, phoneB) => phoneA.name.localeCompare(phoneB.name));
      setSortedTablets(sorted.reverse());
    } else {
      setSortedTablets(tablets);
    }
  }

  const countTablets = products.filter(
    (product) => product.type === "tablet"
  ).length;

  const handleSortBy = (event: {target: {value: string}}) => {
    const {value} = event.target;

    setSortBy(value);
  }

  return (
    <main className="tablets">
      <div className="container tablets__container">
        <div className="tablets__container-main">
          <Path location="Tablets" />
          <h2 className="title tablets__title">Tablets</h2>
          <p className="tablets__items">{`${countTablets} items`}</p>
          <div className="tablets__selectors">
            <p className="tablets__selectors-title">Sort by</p>
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
        <ul className="tablets__list">
          {sortedTablets.map((sortedTablet) => {
            return (
              <CastomCard
                product={sortedTablet}
                key={sortedTablet.id}
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
