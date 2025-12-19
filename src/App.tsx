/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import Layout from './layouts/dashboard/layout';
import { ProductListView } from './sections';
//import { ProductAddEditView } from './sections';

// Styles
import './App.css';

/* -------------------------------------------------------------------------- */
/*                                APP COMPONENT                               */
/* -------------------------------------------------------------------------- */
function App() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Layout>
      <ProductListView />
      {/*<ProductAddEditView />*/}
    </Layout>
  )
}

export default App;