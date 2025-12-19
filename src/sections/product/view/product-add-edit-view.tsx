/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import * as Yup from 'yup';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';

// UI Lib Components
import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui";

// UI Local Components
import CustomCard from "@/components/custom-card";
import { 
  FormProvider,
  RHFMultiCheckbox,
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
  CATEGORIES 
} from "@/_mock";
import { useBoolean } from '@/hooks';
import type { CategoryNode } from '@/types';
import { generateId, generateSlug } from '@/utils/helpers';

/* -------------------------------------------------------------------------- */
/*                              PRODUCT ADD VIEW                              */
/* -------------------------------------------------------------------------- */
function ProductAddEditView() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [categories, setCategories] = useState<CategoryNode[]>(CATEGORIES);

/* ------------------------------ CUSTOM HOOKS ------------------------------ */
  const loadingSend = useBoolean(false);
  const { enqueueSnackbar } = useSnackbar();

/* ---------------------------- VALIDATION SCHEMA --------------------------- */
  const NewCurrentProductSchema = Yup.object().shape({
    title: Yup.string().required('Product Name is required'),
    description: Yup.string().required('Description is required'),
    images: Yup.array().of(
      Yup.mixed<File>()
        .test("fileType", "Only JPG, PNG allowed", (file) => {
          if (!file) return false;
          return [
            "image/jpeg",
            "image/jpg",
            "image/png"
          ].includes(file.type);
        })
        .test("fileSize", "File must be less than 5MB", (file) => {
          if (!file) return false;
          return file.size <= 5 * 1024 * 1024;
        })
      )
      .min(1, "Images are required")
      .required("Images are required"),
    code: Yup.string().required('Product code is required'),
    quantity: Yup.number().required('Quantity is required'),
    subcategory: Yup.string().required('Category is required'),
    prices: Yup.object({
      regular: Yup.number().required('Regular price is required'),
      sale: Yup.number().required('Sale price is required')
    }),
    colors: Yup.array().min(1, 'Choose at least one color'),
    sizes: Yup.array().min(1, 'Choose at least one size'),
    gender: Yup.string().required('Gender is required'),
    stock: Yup.number(),
    maxStock: Yup.number()
  });

/* -------------------------------- CONSTANTS ------------------------------- */
  const defaultValues = useMemo(
    () => ({ 
      title: "", // currentProduct?.Name || "",
      description: "",
      images: [] as File[],
      code: "",
      subcategory: "",
      quantity: 0,
      prices: {
        regular: 0,
        sale: 0
      },
      colors: [],
      sizes: [],
      gender: "",
      stock: 0,
      maxStock: 0
    }),
    [] //[currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewCurrentProductSchema),
    defaultValues
  });

  const {
    reset,
    //control,
    handleSubmit,
    //formState: { isSubmitting }
  } = methods;

/* ----------------------------- HANDLER FUNCTIONS -------------------------- */
  const handleEditAndSend = handleSubmit(async (formData) => {
    try {
      loadingSend.onTrue();
      await new Promise((resolve) => setTimeout(resolve, 500));

      const productWithIdAndSlug = {
        ...formData,
        id: generateId('product'),
        slug: generateSlug(formData.title),
        gender: formData.gender.toLowerCase(),
        stock: formData.stock || 20,
        maxStock: 100,
        images: formData.images.filter((file): file is File => file !== undefined).map((file) => URL.createObjectURL(file)),
        colors: formData.colors || [],
        sizes: formData.sizes || []
      };

      setCategories((prevCategories) => 
        prevCategories.map((category) => {
          if (!category.children) return category;
          const hasSubcategory = category.children.some((child) => child.title === formData.subcategory);
          if (!hasSubcategory) return category;
          return {
            ...category,
            children: category.children.map((child) => {
              if (child.title !== formData.subcategory) return child;
              return {
                ...child,
                products: child.products && [...child.products, productWithIdAndSlug]
              };
            })
          };
        })
      );

      enqueueSnackbar('Update with success!');
      reset();
      
    } catch (error) {
      console.error(error);
    } finally {
      loadingSend.onFalse();
    };
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
                  name="title"
                  placeholder="Product title"
                />
                <RHFTextArea
                  label="Description"
                  name="description"
                  placeholder="Type product description here..."
                />
                <RHFUpload
                  name="images"
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
                  name="code"
                  placeholder="Product Code"
                />
                <div className="flex gap-4 sm:flex-row sm:items-start flex-col">
                  <RHFTextField
                    type="number"
                    label="Quantity"
                    name="quantity"
                    placeholder="0"
                  />
                  {/* category (select) */}
                  <RHFSelect 
                  name="subcategory"
                  label="Category"
                  placeholder="Select a category"
                  children={CATEGORIES.map((category) => <SelectGroup key={category.id}>
                    <SelectLabel>{category.title}</SelectLabel>
                      {category.children?.map((child) => <SelectItem key={child.id} value={child.title}>
                        {child.title}
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
                    name='colors'
                  />
                  {/* sizes */}
                  <RHFMultiSelect
                    options={CLOTHING_SIZES}
                    placeholder="Sizes"
                    label='Sizes'
                    name='sizes'
                  />
                </div>
                {/* gender */}
                <RHFMultiCheckbox
                  name='gender'
                  label='Gender'
                  options={['Men', 'Woman', 'Kids']}
                />
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
                  name="prices.regular"
                  placeholder="Regular Price"
                />
                <RHFTextField
                  type="number"
                  label="Sale Price"
                  name="prices.sale"
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