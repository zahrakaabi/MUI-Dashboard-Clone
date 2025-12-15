/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Types
import type { CATEGORY } from "@/types";

/* -------------------------------------------------------------------------- */
/*                        PRODUCTS CATEGORIES MOCK DATA                       */
/* -------------------------------------------------------------------------- */
export const PRODUCTS_CATEGORIES: CATEGORY[] = [ //missing typing
    {
        id: '000_1_category',
        title: 'Clothing',
        slug: 'clothing',
        image: '',
        description: '',
        subcategories: [
            {
                id: '000_subcateg_1',
                title: 'Shirts',
                slug: 'shirts',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_product',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        code: '',
                        quantity: 20,
                        prices: {
                            regular: 20,
                            sale: 60
                        },
                        colors: [],
                        sizes: ['M'],
                        gender: 'woman'
                    }
                ]
            },
            {
                id: '000_subcateg_2',
                title: 'T-Shirts',
                slug: 't-shirts',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_xproduct',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        code: '',
                        quantity: 20,
                        prices: {
                            regular: 20,
                            sale: 60
                        },
                        colors: [],
                        sizes: ['XL'],
                        gender: 'kids'
                    }
                ]
            },
            {
                id: '000_subcateg_3',
                title: 'Jeans',
                slug: 'jeans',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_mproduct',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        quantity: 10,
                        code: '',
                        prices: {
                            regular: 20,
                            sale: 30
                        },
                        colors: [],
                        sizes: ['L'],
                        gender: 'men'
                    }
                ]
            },
            {
                id: '000_subcateg_4',
                title: 'Accessories',
                slug: 'accessories',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_lmproduct',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        code: '',
                        quantity: 20,
                        prices: {
                            regular: 20,
                            sale: 20
                        },
                        colors: [],
                        sizes: [15],//in cm
                        gender: 'woman'
                    }
                ]
            }
        ]
    },
    {
        id: '000_2_category',
        title: 'Tailored',
        slug: 'tailored',
        image: '',
        description: '',
        subcategories: [
            {
                id: '000_subcateg_1ihoih',
                title: 'Suits',
                slug: 'suits',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_product2',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        code: '',
                        quantity: 20,
                        prices: {
                            regular: 20,
                            sale: 60
                        },
                        colors: [],
                        sizes: ['M'],
                        gender: 'woman'
                    }
                ]
            },
            {
                id: '000_subcateg_2jhvu',
                title: 'Blazers',
                slug: 'blazers',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_xproductjgug',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        code: '',
                        quantity: 20,
                        prices: {
                            regular: 20,
                            sale: 60
                        },
                        colors: [],
                        sizes: ['XL'],
                        gender: 'kids'
                    }
                ]
            },
            {
                id: '000_subcateg_3kgig',
                title: 'Trousers',
                slug: 'trousers',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_mproductjugug',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        code: '',
                        quantity: 10,
                        prices: {
                            regular: 20,
                            sale: 30
                        },
                        colors: [],
                        sizes: ['L'],
                        gender: 'men'
                    }
                ]
            },
            {
                id: '000_subcateg_4jhvufu',
                title: 'Waitcoats',
                slug: 'waitscoats',
                image: '',
                description: '',
                products: [
                    {
                        id: '000_1_khhhhjb',
                        title: '',
                        slug: '',
                        images: [],
                        description: '',
                        code: '',
                        quantity: 20,
                        prices: {
                            regular: 20,
                            sale: 20
                        },
                        colors: [],
                        sizes: [15],//in cm
                        gender: 'woman'
                    }
                ]
            }
        ]
    }
];