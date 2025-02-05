'use client'
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return ( 
        
        <Button type="submit"  
                className ="block w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                                  from-sky-400 to-blue-800 p-2 text-white rounded disabled:bg-gray-400"
                disabled={pending}>
            {pending? 
                (
                    <>
                        <Loader2 className="animate-spin inline-block mr-2" />
                        Submitting...
                    </>
                )   : 
                <>
                Submit
                </>
               
            }
        </Button>
     );
}
 
export default SubmitButton;