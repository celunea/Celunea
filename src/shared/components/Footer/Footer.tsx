import React from "react";
import styles from "./Footer.module.css"
import {Color} from "../../../constants/enums/colors";
import {Routes} from "../../../constants/enums/routes";
import {NavLink} from "react-router-dom";
import image from "../../../assets/img/logog-without-background.png"

const Footer: React.FC = () => {
    return (
        <>
            <div className={styles.mainWrapper} style={{background: Color.DARK_BLUE}}>
                <div className={styles.contentWrapper}>
                    <NavLink to={Routes.MAIN} style={{color: Color.LIGHT_BLUE}} className={styles.navLink}>
                        <img src={image} alt="" className={styles.image}/>
                    </NavLink>
                    <div className={styles.pointsWrapper} style={{flexDirection: "row", alignItems: "center"}}>
                        <NavLink to={Routes.MAIN} style={{color: Color.LIGHT_BLUE}} className={styles.point}>Головна</NavLink>
                        <NavLink to={Routes.CATEGORIES} style={{color: Color.LIGHT_BLUE}} className={styles.point}>Категорії</NavLink>
                        <NavLink to={Routes.ABOUTUS} style={{color: Color.LIGHT_BLUE}} className={styles.point}>Про нас</NavLink>
                        <NavLink to={Routes.CONTACTS} style={{color: Color.LIGHT_BLUE}} className={styles.point}>Контакти</NavLink>
                    </div>
                    <div className={styles.pointsWrapper}>
                        <p className={styles.point} style={{color: Color.LIGHT_BLUE}}>+38 (098) 919-34-58</p>
                        <p className={styles.point} style={{color: Color.LIGHT_BLUE}}>+38 (050) 123-45-67</p>
                        <p className={styles.point} style={{color: Color.LIGHT_BLUE}}>help@celunea.ua</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer