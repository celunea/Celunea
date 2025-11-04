import React from "react";
import { GoodInterface } from "../../../constants/interfaces/goodInterface";
import styles from "./GoodCard.module.css";
import { NavLink } from "react-router-dom";
import { Routes } from "../../../constants/enums/routes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import CounterAddToCart from "../CounterAddToCart/CounterAddToCart";
import {addGoodToCard} from "../../../redux/reducers/cartReducer";

interface Props {
  good: GoodInterface;
}

const GoodCard: React.FC<Props> = ({ good }) => {
    const cart = useSelector((state: RootState) => state.cart.goods);
    const dispatch = useDispatch()

    // знаходимо товар у кошику за id
    const foundedGood = cart.find((g) => g.id === good.id);

    const amount = foundedGood?.amount ?? 0;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();  // 🛑 блокує навігацію
        dispatch(addGoodToCard({ id: good.id, amount: amount + 1 }));
    };
  return (
    <>
      <NavLink className={styles.mainWrapper} to={`${Routes.GOOD}/${good.id}`}>
        <div className={styles.wrapper}>
          <img src={good.imgUrl} className={styles.goodImage} />
          <p className={styles.goodName}>{good.title}</p>
          <div className={styles.bottomWrapper}>
            <p className={styles.priceText}>{good.price} грн.</p>
              {amount === 0 ? (
                  <button className={styles.buyButton} onClick={handleAddToCart}>
                      Купити
                  </button>
              ) : (
                  <CounterAddToCart id={good.id} />
              )}
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default GoodCard;
