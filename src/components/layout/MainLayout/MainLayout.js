// src/components/layout/MainLayout/MainLayout.js

import React from "react";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import { useSelector } from "react-redux";
import {
  selectHeaderVisible,
  selectFooterVisible,
} from "../../../redux/layout/selectors";
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  const headerVisible = useSelector(selectHeaderVisible);
  const footerVisible = useSelector(selectFooterVisible);

  return (
    <div className="main-layout">
      {headerVisible && <Header />}
      <main>{children}</main>
      {footerVisible && <Footer />}
    </div>
  );
};

export default MainLayout;
