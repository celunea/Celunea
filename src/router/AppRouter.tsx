import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import HelloPage from "../pages/HelloPage/HelloPage";
import Main from "../pages/Main/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import { Routes as paths } from "../constants/enums/routes";
import { Layout } from "./Layout";
import locomotiveScroll from "locomotive-scroll";
import Contacts from "../pages/Contacts/Contacts";
import GoodPage from "../pages/GoodPage/GoodPage";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import ModalCart from "../shared/components/ModalCart/ModalCart";

const AppRouter: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: locomotiveScroll | null = null;

    if (scrollRef.current) {
      scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
              <Layout>
                  <div style={{ overflow: "hidden" }}>
                      <Routes>
                          <Route path={paths.HELLO} element={<HelloPage />} />
                          <Route path={paths.MAIN} element={<HelloPage />} />
                          <Route path={paths.ABOUTUS} element={<AboutUs />} />
                          <Route path={paths.CATEGORIES} element={<Main />} />
                          <Route path={paths.CONTACTS} element={<Contacts />} />
                          <Route path={`${paths.GOOD}/:id`} element={<GoodPage />} />
                          <Route path={`/Celunea`} element={<HelloPage />} />
                      </Routes>
                  </div>
              </Layout>
          </BrowserRouter>
      </Provider>
    </>
  );
};

export default AppRouter;
