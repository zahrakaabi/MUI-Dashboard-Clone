/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui";

// UI Local Components
import ProductTableRow from "../product-table-row";

// Utils
import { flattenArray } from "@/utils";
import type { CategoryNode, PRODUCT } from "@/types";
import { CATEGORIES } from "@/_mock";

/* -------------------------------------------------------------------------- */
/*                         PRODUCT LIST VIEW COMPONENT                        */
/* -------------------------------------------------------------------------- */
type ProductWithCategory = PRODUCT & {
  category: Pick<CategoryNode, 'id' | 'title' | 'slug'>;
};

function ProductListView() {
/* --------------------------------- CONSTS --------------------------------- */
  // Flatten categories to get all products with their category info
  const allProducts: ProductWithCategory[] = flattenArray(CATEGORIES, 'children')
    .flatMap(category =>
    (category.products ?? []).map(product => ({
      ...product,
      category: {
        id: category.id,
        title: category.title,
        slug: category.slug
      }
    }))
  );

  const TABLE_HEAD = [
    { label: 'Product', minWidth: 200 },
    { label: 'Create at', minWidth: 200 },
    { label: 'Stock', minWidth: 200 },
    { label: 'Price', width: 200 },
    { label: ''} //action
  ];

/* ------------------------------- HANDLE ROW ------------------------------- */
  const handleEditRow = (productId: string) => {
    console.log('Edit product with id:', productId);
  };
  
  const handleDeleteRow = (productId: string) => {
    console.log('Delete product with id:', productId);
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="mx-auto">
        <Table>
            <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-700">
                    {TABLE_HEAD.map((head) => <TableHead key={head.label} className="text-[#637381] font-semibold">
                        {head.label}
                    </TableHead>)}
                </TableRow>
            </TableHeader>
            <TableBody>
                {allProducts.map((row, index) => <ProductTableRow 
                    key={index} 
                    row={row}
                    onDeleteRow={() => handleDeleteRow(row.id)}
                    onEditRow={() => handleEditRow(row.id)}
                />)}
            </TableBody>
        </Table>
    </div>
  )
};

export default ProductListView;