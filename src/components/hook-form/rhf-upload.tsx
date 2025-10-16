/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages

// UI Lib Components
import { Card, Label } from "../ui";

// Assets
import { UploadIllustration } from "@/assets/illustrations";

/* -------------------------------------------------------------------------- */
/*                            RHF UPLOAD COMPONENT                            */
/* -------------------------------------------------------------------------- */
function RHFUpload() {
/* ----------------------------- PLACEHOLDER UI ----------------------------- */
  const renderPlaceholder = (
    <div className="flex flex-col gap-3 items-center justify-center">
      <UploadIllustration />
      <div className="text-center space-y-1">
        <h2 className="text-lg font-semibold">Drop or Select file</h2>
        <p className="text-sm text-muted-foreground">
          Drop files here or click{" "}
          <span className="mx-1 text-primary underline cursor-pointer">
            browse
          </span>
          through your machine
        </p>
      </div>
    </div>
  );

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="group-form grid w-full gap-3">
      <Label htmlFor="upload">Images</Label>
      <Card className="p-5 outline-none rounded cursor-pointer overflow-hidden relative bg-gray-100 border border-dashed border-gray-300 transition-all duration-200 hover:opacity-70">
        {renderPlaceholder}
      </Card>
    </div>
  )
}

export default RHFUpload;