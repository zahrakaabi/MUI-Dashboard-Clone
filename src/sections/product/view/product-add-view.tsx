/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import { 
  Card,  
  CardHeader, 
  CardDescription,
  CardTitle,
  CardContent,
  Separator,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui";
import { RHFTextArea, RHFTextField, RHFUpload } from "@/components/hook-form";

/* -------------------------------------------------------------------------- */
/*                              PRODUCT ADD VIEW                              */
/* -------------------------------------------------------------------------- */
function ProductAddView() {
  return (
    <form className="max-w-xl mx-auto">
      {/* ----------------------- PRODUCT INFOS ---------------------------- */}
      <Collapsible>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle>Details</CardTitle>
              <CardDescription>Title, short description, image...</CardDescription>
            </div>
            <CollapsibleTrigger asChild>
              <button 
              className="flex items-center justify-center w-8 h-8 rounded-full border-none bg-transparent hover:bg-gray-100 cursor-pointer transition-transform" type="button">
                <svg width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  className="lucide lucide-chevron-down transition-transform duration-200 data-[state=open]:rotate-45"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </CollapsibleTrigger>
          </CardHeader>

          <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <Separator className="mb-6" />
            <CardContent className="grid gap-6">
              <RHFTextField
                type="text"
                name="Name"
                placeholder="Product title"
              />
              <RHFTextArea
                name="Description"
                placeholder="Type product description here..."
              />
              <RHFUpload />
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </form>
  )
}

export default ProductAddView;