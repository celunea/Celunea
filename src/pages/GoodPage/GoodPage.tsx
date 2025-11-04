import { useParams } from "react-router-dom";
import styles from "./GoodPage.module.css";
import React, { useEffect, useState } from "react";
import { GoodInterface } from "../../constants/interfaces/goodInterface";
import { getGoodById } from "../../shared/services/goodsService";
import CounterAddToCart from "../../shared/components/CounterAddToCart/CounterAddToCart";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {addGoodToCard} from "../../redux/reducers/cartReducer";

const GoodPage: React.FC = () => {
  const [good, setGood] = useState<GoodInterface>();
  const { id } = useParams();
    const dispatch = useDispatch();

    const cart = useSelector((state: RootState) => state.cart.goods);
    const foundedGood = cart.find((g) => g.id === Number(id));
    const amount = foundedGood?.amount ?? 0;
  useEffect(() => {
    const foundedGood = getGoodById(Number(id));
    setGood(foundedGood);
  }, [id]);
    const handleAddToCart = () => {
        if (good) {
            dispatch(addGoodToCard({ id: good.id, amount: amount + 1 }));
        }
    };
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.header}>{good?.title}</h1>
          <div className={styles.wrappers}>
            <div className={styles.leftWrapper}>
              <img src={good?.imgUrl} className={styles.image} />
            </div>
            <div className={styles.rightWrapper}>
              <h3 className={styles.price}>{good?.price} грн.</h3>
                {amount === 0 ? (
                    <button className={styles.buyButton} onClick={handleAddToCart}>
                        Купити
                    </button>
                ) : (
                    <CounterAddToCart id={Number(id)} />
                )}
              <hr />
              <div className={styles.details}>
                <h1 className={styles.headerOfDescription}>Характеристики</h1>
                {good?.details.map((e) => (
                  <>
                    <div className={styles.detail}>
                      <h5 className={styles.titleOfDetail}>{e.title}</h5>
                      <p className={styles.valueOfDetail}>{e.value}</p>
                    </div>
                  </>
                ))}
              </div>
              <hr />
              <div className={styles.description}>
                <h1 className={styles.headerOfDescription}>Опис</h1>
                <p className={styles.valueOfDetail}>{good?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodPage;
