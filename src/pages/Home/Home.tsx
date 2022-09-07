import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../api/products";
import { Product } from "../../types/Product";
import { actions, selectors } from "../../store/index";


import "./Home.scss";

import iphone14 from "../../images/iphone14.jpg";
import ipad from "../../images/ipad.png";
import coverPhone from "../../images/coverPhone.jpg";
import { Link } from "react-router-dom";
import { Slider } from '../../components/Slider';
import { CardSlider } from '../../components/CardSlider';

type Props = {
  addFavouritesDevices: (device: Product) => void;
  addStoreDevices: (device: Product) => void;
  favouritesDevices: Product[];
  storeDevices: Product[];
};

export const Home: React.FC<Props> = ({
  addFavouritesDevices,
  addStoreDevices,
  favouritesDevices,
  storeDevices,
}) => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.getProducts);

  console.log(products);

  const countPhones = products.filter(
    (product) => product.type === "phone"
  ).length;
  const countTablets = products.filter(
    (product) => product.type === "tablet"
  ).length;
  const countAccessories = products.filter(
    (product) => product.type === "accessory"
  ).length;

  useEffect(() => {
    getProducts().then((res) =>
      dispatch(actions.ProductsActions.setProducts(res))
    );
  }, []);

  return (
    <main className="home">
      <div className="container">
        <Slider />

        <section className="hot-prices">
          <h2 className="title">Hot prices</h2>
          <CardSlider
            products={products}
            addFavouritesDevices={addFavouritesDevices}
            addStoreDevices={addStoreDevices}
            favouritesDevices={favouritesDevices}
            storeDevices={storeDevices}
          />
        </section>

        <section className="category">
          <h2 className="title">Shop by category</h2>

          <div className="category__content">
            <Link className="category__card" to="/phones">
              <img src={iphone14} alt="phone icon" className="category__img" />
              <p className="subtitle">
                Mobile phones
              </p>
              <p className="category__count">{`${countPhones} models`}</p>
            </Link>
            <Link className="category__card" to="/tablets" >
              <img
                src={ipad}
                alt="tablets icon"
                className="category__img category__img-tablets"
              />
              <p className="subtitle">
                Tablets
              </p>
              <p className="category__count">{`${countTablets} models`}</p>
            </Link>
            <Link className="category__card" to="/accessories" >
              <img
                src={coverPhone}
                alt="cover-phone icon"
                className="category__img"
              />
              <p className="subtitle">
                Accessories
              </p>
              <p className="category__count">{`${countAccessories} models`}</p>
            </Link>
          </div>
        </section>

        <section className="new-models">
          <h2 className="title">Brand new models</h2>
          <CardSlider
            products={products}
            addFavouritesDevices={addFavouritesDevices}
            addStoreDevices={addStoreDevices}
            favouritesDevices={favouritesDevices}
            storeDevices={storeDevices}
          />
        </section>
      </div>
    </main>
  );
};
