/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Route, Routes } from 'react-router-dom';

// UI Local Components
import Layout from './layouts/dashboard/layout';
import { 
  EcommerceView,
  ProductCreateView,
  ProductEditView, 
  ProductListView, 
  ProductRoutesLayout 
} from './sections';

// Styles
import './App.css';

/* -------------------------------------------------------------------------- */
/*                                APP COMPONENT                               */
/* -------------------------------------------------------------------------- */
function App() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProductRoutesLayout />}>
          <Route path="/dashboard" element={<EcommerceView />} />
          <Route path="/dashboard/product" element={<ProductListView />} />
          <Route path="/dashboard/product/add" element={<ProductCreateView />} />
          <Route path="/dashboard/product/:productId/edit" element={<ProductEditView />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;