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