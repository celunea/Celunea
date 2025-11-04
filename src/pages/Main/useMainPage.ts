import {useState} from "react";
import {getAllGoods} from "../../shared/services/goodsService";
import {GoodInterface} from "../../constants/interfaces/goodInterface";

export const useMainPage = () => {
    const [goods, setGoods] = useState<GoodInterface[]>([]);

    const getGoods = () => {
        setGoods(getAllGoods())
    }
    return({goods, getGoods})
}