export interface GoodInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    details: DetailInterface[]
    imgUrl: string;
    category: number;
}

interface DetailInterface {
    title: string;
    value: string
}