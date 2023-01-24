import { Chef, MenuType, WhyWeType } from "./Types&Interfaces";

export const WhyWeArray: WhyWeType[] = [
  {
    id: 0,
    title: "Безкоштовна доставка",
    text: "Безкоштовна доставка піци по всьому житомиру, доставимо за 60 хвилин або бургер на вибір в подарунок!",
  },
  {
    id: 1,
    title: "Свіжі продукти",
    text: "Ми ніколи не використовуємо напівфабрикати та присилювачі смаків, а також не підвергаємо продукти довгому збереженню.",
  },
  {
    id: 2,
    title: "Досвітчені кухарі",
    text: "Наші кухарі - це навченні професіонали, які щорічно підвищують свою кваліфікацію.",
  },
];

export const MenuArray: MenuType[] = [
  { id: 0, title: "Піца", img: "images/pizza.jpg", to: "/pizzas" },
  { id: 1, title: "Суші", img: "images/sushi.jfif", to: "/sushi" },
  { id: 2, title: "Бургери", img: "images/burgers.jpg", to: "/burgers" },
  { id: 3, title: "Гриль", img: "images/meat.jpg", to: "/meat" },
];

export const ChefsArray: Chef[] = [
  {
    id: 0,
    img: "images/chefs-1.png",
    name: "Alizeh Anderson",
    position: "Senior Chef ",
  },
  {
    id: 1,
    img: "images/chefs-2.png",
    name: "Andre Smith",
    position: "Master Chef",
  },
  {
    id: 2,
    img: "images/chefs-3.png",
    name: "Angelina John",
    position: "Professor",
  },
  {
    id: 3,
    img: "images/chefs-4.png",
    name: "Christina Chi",
    position: "Psychologist",
  },
];
