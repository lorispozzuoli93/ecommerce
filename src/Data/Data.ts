export type Products = {
  UPC: string;
  name: string;
  imageUrl?: string;
  price: {
    current: {
      value: number;
    };
    currency: string;
  };
  availability: {
    stock: number;
  };
  variants: Omit<Products, "variants">[];
};