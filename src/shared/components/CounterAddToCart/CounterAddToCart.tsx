import React from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../../redux/store";
import styles from "./CounterAddToCart.module.css"
import {addGoodToCard} from "../../../redux/reducers/cartReducer";

interface Props {
    id: number;
}

const CounterAddToCart:React.FC<Props> = ({id}) => {
    const dispatch = useDispatch();
    const foundedGood = useSelector((state:RootState) => {
        for (const good of state.cart.goods) {
            if (id === good.id){
                return good;
            }
        }
    })

    return(
        <>
            <div className={styles.wrapper}>
                <button className={styles.plusMinusBlock} onClick={(e) => {
                    e.preventDefault();  // 🛑 блокує навігацію
                    if (foundedGood?.amount ?? 0 > 0){
                        dispatch(addGoodToCard({id, amount: Number((foundedGood?.amount ?? 0) - 1)}))}
                    }
                }>
                    <p className={styles.plusMinusText}>-</p>
                </button>
                <div className={styles.countWrapper}>
                    <input
                        className={styles.countInput}
                        type="number"
                        min={0}
                        value={foundedGood?.amount?.toString() ?? ''}
                        onChange={(e) => {
                            const value = e.target.value;
                            // if (value === '') return; // дозволяємо очистити поле
                            const num = Number(value);
                            if (!isNaN(num) && num >= 0) {
                                dispatch(addGoodToCard({ id, amount: num }));
                            }
                        }}
                    />

                </div>
                <button className={styles.plusMinusBlock} onClick={(e) => {
                    e.preventDefault();
                    dispatch(addGoodToCard({id, amount: Number((foundedGood?.amount ?? 0) + 1)}))}
                }>
                    <p className={styles.plusMinusText}>+</p>
                </button>
            </div>
        </>
    )
}

export default CounterAddToCart;