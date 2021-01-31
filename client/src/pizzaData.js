export const BASE_PRICE = 200;
export const DELIVERY_PRICE = 180;

export const SIZE = [
  { id: "size_small", price: 0, slug: "size_small", name: "30 sm" },
  { id: "size_large", price: 50, slug: "size_large", name: "35 sm" },
];

export const DOUGH = [
  { id: "dough_thin", price: 0, slug: "thin", name: "thin" },
  { id: "dough_thick", price: 0, slug: "thick", name: "thick" },
];

export const SAUCES = [
  { id: "sauce_tomato", price: 0, slug: "sauce_tomato", name: "tomato sauce" },
  { id: "sauce_white", price: 0, slug: "sauce_white", name: "white sauce" },
  { id: "sauce_hot", price: 0, slug: "sauce_hot", name: "hot sauce" },
  {
    id: "sauce_shroom",
    price: 0,
    slug: "sauce_shroom",
    name: "mushroom sauce",
  },
  { id: "sauce_soy", price: 0, slug: "sauce_soy", name: "soy sauce" },
  { id: "sauce_buldak", price: 0, slug: "sauce_buldak", name: "buldak sauce" },
];

export const getSizeName = (slug) => {
  const obj = SIZE.find((obj) => obj.slug === slug);
  return obj.name;
};

export const getDoughName = (slug) => {
  const obj = DOUGH.find((obj) => obj.slug === slug);
  return obj.name;
};
export const getSauceName = (slug) => {
  const obj = SAUCES.find((obj) => obj.slug === slug);
  return obj.name;
};
