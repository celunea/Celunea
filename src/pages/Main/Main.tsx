import React, {useEffect} from "react";
import styles from "./Main.module.css"
import {useMainPage} from "./useMainPage";
import GoodCard from "../../shared/components/GoodCard/GoodCard";
import {GoodInterface} from "../../constants/interfaces/goodInterface";

const Main: React.FC = () => {
    const {goods, getGoods} = useMainPage()
    useEffect(() => {
        getGoods()
    }, []);
    return (<>
        <div className={styles.mainWrapper}>
            <div className={styles.categoryWrapper}>
                <h1 className={styles.categoryTitle}>Для обличчя</h1>
                <div className={styles.goodsWrapper}>
                    {goods.map((item: GoodInterface) => {
                        if (item.category === 1) {
                           return <GoodCard good={item} />
                        }
                        return null
                    })}
                </div>
            </div>
            <div className={styles.categoryWrapper}>
                <h1 className={styles.categoryTitle}>Для тіла</h1>
                <div className={styles.goodsWrapper}>
                    {goods.map((item: GoodInterface) => {
                        if (item.category === 2) {
                            return <GoodCard good={item} />
                        }
                        return null
                    })}
                </div>
            </div>
        </div>
    </>)
}

export default Main