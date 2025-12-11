/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// UI Lib Components
import { Label, SelectGroup, SelectItem, SelectLabel } from "@/components/ui";

// UI Local Components
import CustomCard from "@/components/custom-card";
import { 
  FormProvider,
  RHFCheckbox,
  RHFMultiSelect,
  RHFSelect, 
  RHFTextArea, 
  RHFTextField, 
  RHFUpload 
} from "@/components/hook-form";

// Utils
import { 
  CLOTHING_SIZES, 
  PRODUCT_COLORS, 
  PRODUCTS_CATEGORIES 
} from "@/_mock";

/* -------------------------------------------------------------------------- */
/*                              PRODUCT ADD VIEW                              */
/* -------------------------------------------------------------------------- */
function ProductAddEditView() {
/* ---------------------------- VALIDATION SCHEMA --------------------------- */
  const NewCurrentProductSchema = Yup.object().shape({
    Name: Yup.string().required('Name is required'),
    Description: Yup.string().required('Description is required'),
    Attachments: Yup.array().min(1, 'Images sont obligé'),
    Product_Code: Yup.string().required('Product code is required'),
    Quantity: Yup.number().required('Quantity is required'),
    Category: Yup.string().required('Category is required'),
    Regular_Price: Yup.number().required('Regular price is required'),
    Sale_Price: Yup.number().required('Sale price is required'),
    Colors: Yup.array().min(1, 'Choose at least one color'),
    Sizes: Yup.array().min(1, 'Choose at least one size'),
    Men: Yup.boolean(),
    Woman: Yup.boolean(),
    Kids: Yup.boolean()
  });

/* ---------------------------------- HOOKS --------------------------------- */

/* -------------------------------- CONSTANTS ------------------------------- */
  const defaultValues = useMemo(
    () => ({ 
      Name: "", // currentProduct?.Name || "",
      Description: "",
      Attachments: [] as File[],
      Product_Code: "",
      Quantity: 0,
      Category: "",
      Regular_Price: 0,
      Sale_Price: 0,
      Colors: [],
      Sizes: [],
      Men: false,
      Woman: false,
      Kids: false
    }),
    [] //[currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewCurrentProductSchema),
    defaultValues
  });

  const {
    //reset,
    //control,
    handleSubmit,
    //formState: { isSubmitting }
  } = methods;

/* ----------------------------- HANDLER FUNCTIONS -------------------------- */
  const handleEditAndSend = handleSubmit(async (data) => {
    console.log('Form submitted', data);
  });

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="mx-auto max-w-xl ">
      <FormProvider methods={methods} onSubmit={handleEditAndSend}>
        <div className="flex flex-col items-end gap-6">
          {/* ----------------------- PRODUCT INFOS ---------------------------- */}
          <CustomCard
            cardTitle="Details"
            cardDescription="Title, short description, image..."
            content= {
              <>
                <RHFTextField
                  type="text"
                  label="Name"
                  name="Name"
                  placeholder="Product title"
                />
                <RHFTextArea
                  label="Description"
                  name="Description"
                  placeholder="Type product description here..."
                />
                <RHFUpload
                  name="Attachments"
                />
              </>
            }
          />

          {/* --------------------------- PRODUCT PROPERTIES --------------------------- */}
          <CustomCard
            cardTitle="Properties"
            cardDescription="Additional functions and attributes..."
            content= {
              <>
                <RHFTextField
                  type="text"
                  label="Product Code"
                  name="Product_Code"
                  placeholder="Product Code"
                />
                <div className="flex gap-4 sm:flex-row sm:items-start flex-col">
                  <RHFTextField
                    type="number"
                    label="Quantity"
                    name="Quantity"
                    placeholder="0"
                  />
                  {/* category (select) */}
                  <RHFSelect 
                  name="Category"
                  label="Category"
                  placeholder="Select a category"
                  children={PRODUCTS_CATEGORIES.map((category) => <SelectGroup key={category.id}>
                    <SelectLabel>{category.title}</SelectLabel>
                      {category.subcategories.map((subcateg) => <SelectItem key={subcateg.id} value={subcateg.title}>
                        {subcateg.title}
                      </SelectItem>)}
                    </SelectGroup>)}>
                  </RHFSelect>
                </div>
                <div className="flex gap-4 sm:flex-row flex-col sm:items-start">
                  {/* colors */}
                  <RHFMultiSelect
                    options={PRODUCT_COLORS}
                    placeholder="Colors"
                    label='Colors'
                    name='Colors'
                  />
                  {/* sizes */}
                  <RHFMultiSelect
                    options={CLOTHING_SIZES}
                    placeholder="Sizes"
                    label='Sizes'
                    name='Sizes'
                  />
                </div>
                {/* gender */}
                <div className="form-group grid w-full items-center gap-3">
                  <Label>Gender</Label>
                  <div className="flex gap-4">
                    {['Men', 'Woman', 'Kids'].map((gender) => <RHFCheckbox key={gender} name={gender} />)}
                  </div>
                </div>
              </>
            }
          />

          {/* ----------------------------- PRODUCT PRICING ---------------------------- */}
          <CustomCard
            cardTitle="Pricing"
            cardDescription="Price related inputs"
            content= {
              <>
                <RHFTextField
                  type="number"
                  label="Regular Price"
                  name="Regular_Price"
                  placeholder="Regular Price"
                />
                <RHFTextField
                  type="number"
                  label="Sale Price"
                  name="Sale_Price"
                  placeholder="Sale Price"
                />
              </>
            }
          />

          {/* SUBMIT BUTTON */}
          <button type="submit" className="px-6 py-3 bg-gray-800 self-end rounded-lg text-white hover:bg-gray-900 transition font-medium text-sm font-sans">
            Create Product
          </button>
        </div>
      </FormProvider>
    </div>
  )
};

export default ProductAddEditView;