/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import { Button, TableCell, TableRow, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { EllipsisVertical } from 'lucide-react';

// Utils
import type { PRODUCT } from "@/types";
import { fDate, fTime } from "@/utils";

/* -------------------------------------------------------------------------- */
/*                         PRODUCT TABLE ROW COMPONENT                        */
/* -------------------------------------------------------------------------- */
type Props = {
  row: PRODUCT;
  onEditRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

function ProductTableRow({
  row,
  onEditRow,
  onDeleteRow 
}: Props) {
/* --------------------------------- CONSTS --------------------------------- */
  const { 
    title, 
    prices: { sale }, 
    images,
    creationAt,
    category,
    stock = 0,
    maxStock = 100
  } = row;

  // Manage stock percentage
  const getStockPercentage = (stock: number, max: number) =>
    Math.min(100, Math.max(0, Math.round((stock / max) * 100)));

  const getStockColor = (percentage: number) => {
    if (percentage <= 30) return 'bg-red-500';
    if (percentage <= 50) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  const getStockLabel = () => {
    if (stock === 0) return 'out of stock';
    if (stock <= 30) return `${stock} low stock`;
    return `${stock} in stock`;
  };

  const percentage = getStockPercentage(stock, maxStock);
  const color = getStockColor(percentage);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <TableRow>
      <TableCell className="max-w-xs p-4">
        <div className="flex items-center gap-3">
          {images[0]
            ? <img className="w-[4rem] h-[4rem] rounded-xl object-cover" src={images[0]} alt={title} />
            : <div className="w-[4rem] h-[4rem] rounded-xl bg-gray-300" />
          }
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold whitespace-nowrap text-ellipsis overflow-hidden 
            cursor-pointer hover:text-blue-500 hover:underline transition-all duration-200">
              <a>{title ? title : 'Title'}</a>
            </h1>
            <h2 className="text-sm font-normal text-[#919EAB] cursor-text">{category ? category.title : 'category'}</h2>
          </div>
        </div>
      </TableCell>
      
      <TableCell className="text-sm font-normal">
        <div className="flex flex-col gap-1 p-4">
          <span className="hover:text-blue-500 transition-all duration-200">
            {creationAt ? fDate(creationAt) : fDate(new Date())}
          </span>
          <span className="text-sm lowercase font-normal text-[#919EAB]">
            {creationAt ? fTime(creationAt) : fTime(new Date())}
          </span>
        </div>
      </TableCell>

      <TableCell className="text-sm p-4">
        <div className="flex flex-col gap-2">
          <div className="h-1 w-[5rem] overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-full rounded-full transition-all duration-300 ease-in-out ${color}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <h2 className="text-sm font-normal text-[#919EAB] cursor-text">
            {getStockLabel()}
          </h2>
        </div>
      </TableCell>

      <TableCell className="text-sm font-normal p-4 hover:text-blue-500 transition-all duration-200">${sale}</TableCell>

      <TableCell align="right">
        <Button className="border-0 shadow-none bg-transparent rounded-full cursor-pointer" variant="outline">
          <EllipsisVertical />
        </Button>
      </TableCell>
    </TableRow>
  )
};

export default ProductTableRow;