import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createTagSchema = z.object({
  name: z.string().min(3, { message: 'Minimum 3 characters.'}),
  slug: z.string(),
  
})

export function CreateTagForm() {
  const {} = useForm({
    resolver: zodResolver(createTagSchema) 
  })

  return(
    <form className="w-full space-y-6">
      <div className="space-y-2">
        <label 
          className="text-sm font-medium block"
          htmlFor="name"
          >
            Tag name
          </label>
        <input 
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full"
          id="name"
          type="text"
          />
      </div>

      <div className="space-y-2">
        <label 
          className="text-sm font-medium block" 
          htmlFor="slug"
          >
          Slug
        </label>
        <input
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full"
          id="slug"
          type="text"
          readOnly
          />
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button>
          <X className="size-3" />
          Cancel
        </Button>
        <Button
          className="bg-teal-400 text-teal-950"
          type="submit"
        >
          <Check className="size-3"/>
          Save
        </Button>
      </div>
    </form>
  )
}