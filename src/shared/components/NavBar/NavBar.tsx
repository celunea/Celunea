import React from "react";
import styles from "./NavBar.module.css";
import { Color } from "../../../constants/enums/colors";
import { Routes } from "../../../constants/enums/routes";
import { NavLink } from "react-router-dom";
import image from "../../../assets/img/logog-without-background.png";
import {useDispatch} from "react-redux";
import {showModal} from "../../../redux/reducers/modalReducer";

const NavBar: React.FC = () => {
    const dispatch = useDispatch();
  return (
    <>
      <div
        className={styles.mainWrapper}
        style={{ background: Color.DARK_BLUE }}
      >
        <div className={styles.contentWrapper}>
          <NavLink
            to={Routes.HELLO}
            style={{ color: Color.LIGHT_BLUE }}
            className={styles.navLink}
          >
            <img src={image} alt="" className={styles.image} />
          </NavLink>
          <div className={styles.navigationContainer}>
            <NavLink
              to={Routes.MAIN}
              style={{ color: Color.LIGHT_BLUE }}
              className={styles.navLink}
            >
              Головна
            </NavLink>
            <NavLink
              to={Routes.CATEGORIES}
              style={{ color: Color.LIGHT_BLUE }}
              className={styles.navLink}
            >
              Категорії
            </NavLink>
            <NavLink
              to={Routes.ABOUTUS}
              style={{ color: Color.LIGHT_BLUE }}
              className={styles.navLink}
            >
              Про нас
            </NavLink>
            <NavLink
              to={Routes.CONTACTS}
              style={{ color: Color.LIGHT_BLUE }}
              className={styles.navLink}
            >
              Контакти
            </NavLink>
              <button
                  onClick={() => dispatch(showModal(true))}
                  style={{ color: Color.LIGHT_BLUE, outline: "none", border: 0}}
                  className={styles.navLink}
              >
                  Кошик
              </button>
          </div>
          {/*<a href={Routes.HELLO}>123</a>*/}
        </div>
      </div>
    </>
  );
};

export default NavBar;
