export type PRODUCT = {
    id: string;
    title: string;
    slug: string;
    images: string[];
    description: string;
    code : string;

    quantity: number;

    prices: {
        regular: number;
        sale: number;
    };

    colors: string[];
    sizes: number [] | string[];
    
    gender: string
};

export type SUBCATEGORY = {
    id: string;
    title: string;
    slug: string;
    image: string;
    description: string;
    products: PRODUCT[]
};

export type CATEGORY = {
    id: string;
    title: string;
    slug: string;
    image: string;
    description: string;
    subcategories: SUBCATEGORY[]
}