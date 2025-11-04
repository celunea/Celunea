import React, {useEffect} from "react";
import styles from "./HelloPage.module.css"
import image from "../../assets/img/helloPageBackgroundImage.jpg"
import {Color} from "../../constants/enums/colors";
import {useHelloPage} from "./useHelloPage";
import GoodCard from "../../shared/components/GoodCard/GoodCard";

const HelloPage: React.FC = () => {
    const {topGoods, getTopGoods} = useHelloPage()

    useEffect(() => {
        getTopGoods()
    }, [])

    return (<>
        <div className={styles.mainWrapper}>
            <div className={styles.helloWrapper}>
                <h1 className={styles.headerText} style={{color: Color.DARK_BLUE}}>Косметика зі світлом місяця та силою українських
                    трав</h1>
            </div>
            <h1 className={styles.topProductsTitle}>Хіти продажів</h1>
            <div className={styles.topProductsList}>
                {topGoods.map((good, index) => (
                    <GoodCard good={good} key={index}/>
                ))}
            </div>
        </div>
    </>)
}

export default HelloPage