import { GoodInterface } from "../../constants/interfaces/goodInterface";
import good1 from "../../assets/img/goods/1.png";
import good2 from "../../assets/img/goods/2.png";
import good3 from "../../assets/img/goods/3.png";
import good4 from "../../assets/img/goods/4.png";
import good5 from "../../assets/img/goods/5.png";
import good6 from "../../assets/img/goods/6.png";
import good7 from "../../assets/img/goods/7.png";
import good8 from "../../assets/img/goods/8.png";
import good9 from "../../assets/img/goods/9.png";
import good10 from "../../assets/img/goods/10.png";
import good11 from "../../assets/img/goods/11.png";

const goodsList: GoodInterface[] = [
  {
    id: 1,
    title: "Денний крем MORNING DEW",
    description:
      "Крем з алое вера, календули та ромашки, що зволожує, заспокоює і захищає шкіру протягом дня.",
    details: [
      { title: "Назва", value: "Денний крем MORNING DEW" },
      { title: "Об'єм", value: "100 мл." },
      { title: "Вік", value: "18+" },
      { title: "Тип шкіри", value: "Комбінований" },
    ],
    price: 510,
    imgUrl: good1,
    category: 1,
  },
  {
    id: 2,
    title: "Сироватка для обличчя Starry Serum",
    description:
      "Сироватка для обличчя з гіалуроновою кислотою, пептидами та вітаміном С, що забезпечує пружність, сяйво і глибоке зволоження.",
    details: [
      { title: "Назва", value: "Сироватка для обличчя Starry Serum" },
      { title: "Об'єм", value: "100 мл." },
      { title: "Вік", value: "18+" },
      { title: "Тип шкіри", value: "Комбінований" },
    ],
    price: 540,
    imgUrl: good2,
    category: 1,
  },
  {
    id: 3,
    title: "Скраб для тіла Moon Dust Scrub",
    description:
      "Скраб для тіла з вівсяними пластівцями, календули й олією жожоба, що делікатно очищує без подразнень.",
    details: [
      { title: "Назва", value: "Скраб для тіла Moon Dust Scrub" },
      { title: "Об'єм", value: "250 мл." },
      { title: "Вік", value: "18+" },
      { title: "Тип шкіри", value: "Комбінований" },
    ],
    price: 420,
    imgUrl: good3,
    category: 2,
  },
  {
    id: 4,
    title: "Маска для обличчя Herbal Cloud Mask",
    description:
      "Маска для обличчя з білою та блакитною глиною й екстрактом зеленого чаю, що очищає пори, знімає втому та вирівнює тон.",
    details: [
      { title: "Назва", value: "Маска для обличчя Herbal Cloud Mask" },
      { title: "Об'єм", value: "120 мл." },
      { title: "Вік", value: "18+" },
      { title: "Тип шкіри", value: "Комбінований" },
    ],
    price: 450,
    imgUrl: good4,
    category: 1,
  },
  {
    id: 5,
    title: "Крем для очей Silver Drop",
    description:
      "Крем для очей з екстрактом волошки, кофеїном і пептидами, що зменшує темні кола, набряки та зморшки.",
    details: [
      { title: "Назва", value: "Крем для очей Silver Drop" },
      { title: "Об'єм", value: "40 мл." },
      { title: "Вік", value: "18+" },
    ],
    price: 490,
    imgUrl: good5,
    category: 1,
  },
  {
    id: 6,
    title: "Крем для рук Moonlight Hand Cream",
    description:
      "Крем для рук з медом, ромашкою та маслом ши, що відновлює, живить і захищає шкіру від холоду.",
    details: [
      { title: "Назва", value: "Крем для рук Moonlight Hand Cream" },
      { title: "Об'єм", value: "80 мл." },
      { title: "Вік", value: "18+" },
    ],
    price: 240,
    imgUrl: good7,
    category: 2,
  },
  {
    id: 7,
    title: "Нічний крем Moon Glow",
    description:
      "Нічний крем з маслом ши, авокадо та екстрактом лаванди, що живить, відновлює і бореться з ознаками втоми.",
    details: [
      { title: "Назва", value: "Нічний крем Moon Glow" },
      { title: "Об'єм", value: "100 мл." },
      { title: "Вік", value: "18+" },
      { title: "Тип шкіри", value: "Комбінований" },
    ],
    price: 520,
    imgUrl: good6,
    category: 1,
  },
  {
    id: 8,
    title: "Бальзам для губ Herbal Kiss",
    description:
      "Бальзам для губ з бджолиним воском, медом і кокосовою олією, що живить і запобігає сухості.",
    details: [
      { title: "Назва", value: "Бальзам для губ Herbal Kiss" },
      { title: "Об'єм", value: "50 мл." },
      { title: "Вік", value: "18+" },
    ],
    price: 190,
    imgUrl: good8,
    category: 1,
  },
  {
    id: 9,
    title: "Міцелярна вода Celunea Micellar",
    description:
      "Міцелярна вода з алое вера та зеленим чаєм, що м’яко очищає, заспокоює і зволожує шкіру.",
    details: [
      { title: "Назва", value: "Міцелярна вода Celunea Micellar" },
      { title: "Об'єм", value: "250 мл." },
      { title: "Вік", value: "18+" },
      { title: "Тип шкіри", value: "Комбінований" },
    ],
    price: 320,
    imgUrl: good9,
    category: 1,
  },
  {
    id: 10,
    title: "Тонік для обличчя Moon Essence",
    description:
      "Тонік для обличчя з ромашкою, шавлією та гідролатом лаванди, що тонізує, освіжає і відновлює баланс шкіри.",
    details: [
      { title: "Назва", value: "Тонік для обличчя Moon Essence" },
      { title: "Об'єм", value: "250 мл." },
      { title: "Вік", value: "18+" },
      { title: "Тип шкіри", value: "Комбінований" },
    ],
    price: 350,
    imgUrl: good10,
    category: 1,
  },
  {
    id: 11,
    title: "Міст для обличчя Lunar Mist",
    description:
      "Міст для обличчя з трояндовою водою та екстрактами шавлії й м’яти, що освіжає, тонізує та миттєво зволожує шкіру.",
    details: [
      { title: "Назва", value: "Міст для обличчя Lunar Mist" },
      { title: "Об'єм", value: "180 мл." },
      { title: "Вік", value: "18+" },
    ],
    price: 360,
    imgUrl: good11,
    category: 1,
  },
];

export const getAllGoods = (): GoodInterface[] => {
  return goodsList;
};

export const getTopGoods = (): GoodInterface[] => {
  return [goodsList[0], goodsList[5], goodsList[10]];
};

export const getGoodById = (id: number) => {
  for (const good of goodsList) {
    if (good.id === id) {
      return good;
    }
  }
};
