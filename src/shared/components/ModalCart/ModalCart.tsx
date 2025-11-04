import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import type { RootState } from "../../../redux/store";
import styles from "./ModalCart.module.css";
import { GoodInterface } from "../../../constants/interfaces/goodInterface";
import { getGoodById } from "../../services/goodsService";
import {showModal} from "../../../redux/reducers/modalReducer";


const ModalCart: React.FC = () => {
    const visible = useSelector((state: RootState) => state.modal.isOpen);
    const dispatch = useDispatch();
    const [goods, setGoods] = useState<(GoodInterface & { amount: number })[]>([]);
    const goodsIds = useSelector((state: RootState) => state.cart.goods);

    useEffect(() => {
        const filledGoods = goodsIds
            .map((cartItem) => {
                const good = getGoodById(cartItem.id);
                if (!good) return null; // якщо товар не знайдено — пропускаємо
                return { ...good, amount: cartItem.amount };
            })
            .filter((g): g is GoodInterface & { amount: number } => g !== null);
        setGoods(filledGoods);
    }, [goodsIds]);

    const total = goods.reduce((sum, g) => sum + g.price * g.amount, 0);

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Кошик</h2>

                <div className={styles.list}>
                    {goods.length === 0 ? (
                        <p>Кошик порожній</p>
                    ) : (
                        goods.map((g) => (
                            <div key={g.id} className={styles.item}>
                                <span>{g.title}</span>
                                <span>
                  {g.amount} × {g.price}₴ = {g.amount * g.price}₴
                </span>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.footer}>
                    <p className={styles.total}>Загальна сума: {total}₴</p>
                    <button className={styles.closeBtn} onClick={() => dispatch(showModal(false))}>
                        Закрити
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalCart;
