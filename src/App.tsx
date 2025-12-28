/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import Layout from './layouts/dashboard/layout';
import { ProductListView } from './sections';
//import { ProductAddEditView } from './sections';

// Styles
import './App.css';
import { Route, Routes } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/*                                APP COMPONENT                               */
/* -------------------------------------------------------------------------- */
function App() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductListView />} />
      </Routes>
      
      {/*<ProductAddEditView />*/}
    </Layout>
  )
}

export default App;