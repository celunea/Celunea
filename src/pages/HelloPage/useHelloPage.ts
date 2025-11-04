import { useState} from "react";
import {GoodInterface} from "../../constants/interfaces/goodInterface";
import { getTopGoods as findTopGoods} from "../../shared/services/goodsService";

export const useHelloPage = () => {
    const [topGoods, setTopGoods] = useState<GoodInterface[]>([])

    const getTopGoods = () => {
        setTopGoods(findTopGoods())
    }

    return({
        topGoods, getTopGoods
    })
}