/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import Layout from './layouts/dashboard/layout';
import ProductAddView from './sections/product/view/product-add-view';

// Styles
import './App.css';

/* -------------------------------------------------------------------------- */
/*                                APP COMPONENT                               */
/* -------------------------------------------------------------------------- */
function App() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Layout>
      <ProductAddView />
    </Layout>
  )
}

export default App;