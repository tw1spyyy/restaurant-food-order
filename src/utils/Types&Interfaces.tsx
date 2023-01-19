export type MenuType = {
  id: number;
  title: string;
  img: string;
  to: string;
};
export type WhyWeType = {
  id: number;
  title: string;
  text: string;
};

export type ItemType = {
  id: string;
  imageUrl: string;
  title: string;
  text: string;
  price: number;
};

export type CartType = {
  id: string;
  imageUrl: string;
  title: string;
  text: string;
  price: number;
  count: number;
};
