export type Sizes = 'S' | 'M' |'XL' | 'L';
export type Product = {
  name: string,
  createAt: Date,
  stock: number,
  size?: Sizes,
};
