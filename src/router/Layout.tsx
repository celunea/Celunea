import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../shared/components/NavBar/NavBar";
import Footer from "../shared/components/Footer/Footer";
import ModalCart from "../shared/components/ModalCart/ModalCart";
import {RootState} from "../redux/store";
import {useSelector} from "react-redux";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const visible = useSelector((state: RootState) => state.modal.isOpen)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavBar />
        {visible && <ModalCart />}
      <div style={{ marginTop: 100 }}>
          {children}
      </div>
      <Footer />
    </>
  );
};
