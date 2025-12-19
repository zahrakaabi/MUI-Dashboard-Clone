export type PRODUCT = {
  id: string;
  title: string;
  slug: string;
  images: string[];
  description: string;
  code : string;
  stock: number;
  maxStock?: number;
  quantity: number;
  creationAt?: Date;
  prices: {
    regular: number;
    sale: number;
  };
  colors: string[];
  sizes: number [] | string[];
  gender: string;
  category?: Pick<CategoryNode, 'id' | 'title' | 'slug'>;
};

export interface CategoryNode {
  id: string;
  title: string;
  slug: string;
  image?: string;
  description?: string;

  children?: CategoryNode[];
  products?: PRODUCT[];
}