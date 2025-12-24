/* -------------------------------------------------------------------------- */
/*                                    PATHS                                   */
/* -------------------------------------------------------------------------- */
const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

export const paths = {
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`
    },
  },
  // DASHBOARD
  dashboard: {
    // OVERVIEW
    root: `${ROOTS.DASHBOARD}/dashboard`,
    eCommerce: `${ROOTS.DASHBOARD}/eCommerce`,
    analytics: `${ROOTS.DASHBOARD}/analytics`,
    // MANAGMENT
    user: {
      list: `${ROOTS.DASHBOARD}/users`,
      edit: (id: number) => `${ROOTS.DASHBOARD}/users/${id}/edit`,
      create: `${ROOTS.DASHBOARD}/users/add` 
    },
    product: {
      list: `${ROOTS.DASHBOARD}/products`,
      edit: (id: number) => `${ROOTS.DASHBOARD}/products/${id}/edit`,
      create: `${ROOTS.DASHBOARD}/products/add` 
    },
    blog: {
      list: `${ROOTS.DASHBOARD}/blog`,
      edit: (id: number) => `${ROOTS.DASHBOARD}/blog/${id}/edit`,
      create: `${ROOTS.DASHBOARD}/blog/add`
    }
  }
};