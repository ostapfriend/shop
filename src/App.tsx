import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.scss";

import { Product } from "./types/Product";

/* PAGES */
import { Tablets } from './pages/Tablets';
import { Store } from './pages/Store';
import { Phones } from './pages/Phones';
import { Home } from './pages/Home';
import { Favourites } from './pages/Favourites';
import { Accessories } from './pages/Accessories';

/* COMPONENTS*/
import { PageNotFound } from './components/PageNotFound';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';


const useLocalStorage = () => {
  const favouritesDevicesFromLocaleStorage =
    localStorage.getItem("favouritesDevices");

  try {
    return favouritesDevicesFromLocaleStorage
      ? JSON.parse(favouritesDevicesFromLocaleStorage)
      : [];
  } catch {
    return [];
  }
};

function App() {
  const [favouritesDevices, setFavouritesDevices] =
    useState<Product[]>(useLocalStorage);
  const [storeDevices, setStoreDevices] = useState<Product[]>([]);
  const [allPrice, setAllPrice] = useState(0);

  const favouritesDevicesLength = favouritesDevices.length;
  const storeDevicesLength = storeDevices.length;

  useEffect(
    () =>
      localStorage.setItem(
        "favouritesDevices",
        JSON.stringify(favouritesDevices)
      ),
    [favouritesDevices]
  );

  useEffect(() => {
    let allSum = 0;

    storeDevices.forEach((storeDevice) => {
      allSum += storeDevice.price;
    });

    setAllPrice(allSum);
  }, [storeDevices]);

  const addFavouritesDevices = (device: Product) => {
    const isInLocale = favouritesDevices.find(
      (favouritesDevice) => favouritesDevice.id === device.id
    );

    if (!isInLocale) {
      setFavouritesDevices((prevDevices) => [...prevDevices, device]);
    } else {
      const currentDevices = favouritesDevices.filter(
        (favouritesDevice) => favouritesDevice.id !== isInLocale.id
      );

      setFavouritesDevices(currentDevices);
    }
  };

  const addStoreDevices = (device: Product) => {
    const isInArray = storeDevices.find(
      (storeDevice) => storeDevice.id === device.id
    );

    if (!isInArray) {
      setStoreDevices((prevDevices) => [...prevDevices, device]);
    } else {
      const currentDevices = storeDevices.filter(
        (storeDevice) => storeDevice.id !== isInArray.id
      );

      setStoreDevices(currentDevices);
    }
  };

  const addPrice = (device: Product) => {
    setAllPrice((prevPrice) => prevPrice + device.price);
  };

  const deletePrice = (device: Product) => {
    setAllPrice((prevPrice) => prevPrice - device.price);
  };

  return (
    <BrowserRouter>
      <Navbar
        favouritesDevicesLength={favouritesDevicesLength}
        storeLength={storeDevicesLength}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addFavouritesDevices={addFavouritesDevices}
              addStoreDevices={addStoreDevices}
              favouritesDevices={favouritesDevices}
              storeDevices={storeDevices}
            />
          }
        />
        <Route
          path="/phones"
          element={
            <Phones
              addFavouritesDevices={addFavouritesDevices}
              addStoreDevices={addStoreDevices}
              favouritesDevices={favouritesDevices}
              storeDevices={storeDevices}
            />
          }
        />
        <Route
          path="/tablets"
          element={
            <Tablets
              addFavouritesDevices={addFavouritesDevices}
              addStoreDevices={addStoreDevices}
              favouritesDevices={favouritesDevices}
              storeDevices={storeDevices}
            />
          }
        />
        <Route path="/accessories" element={<Accessories />}/>
        <Route
          path="/favourites"
          element={
            <Favourites
              favouritesDevices={favouritesDevices}
              addFavouritesDevices={addFavouritesDevices}
              addStoreDevices={addStoreDevices}
              storeDevices={storeDevices}
            />
          }
        />
        <Route
          path="/store"
          element={
            <Store
              storeDevices={storeDevices}
              addStoreDevices={addStoreDevices}
              addPrice={addPrice}
              deletePrice={deletePrice}
              allPrice={allPrice}
            />
          }
        />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
