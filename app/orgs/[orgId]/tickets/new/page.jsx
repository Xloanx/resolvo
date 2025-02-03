'use client'
import { redirect } from "next/navigation"
import SubmitButton from "../components/submit-button";
import { addTicket } from '@/actions/tickets';
import { use, useEffect, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { MdDelete, MdAutoDelete } from "react-icons/md";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"




const NewTicketUI = ({params}) => {
    const {orgId} = use (params)

    const initialState = {
        success: null, 
        errors: {},
      };
    
      //make orgId available for addTicket server action
    const addTicketWithId = addTicket.bind(null, orgId); 

    const [state, formAction] = useActionState(addTicketWithId, initialState);
    function FileIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        )
      }
      
    function XIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
        </svg>
    )
    }


    // Trigger toast notification when state changes
    useEffect(() => {
        if (state?.success) {
                    toast.success('Ticket submitted Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });
        } else if (state?.success === false) {
                    toast.error('Ticket submission failed!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });
        }
    }, [state]);

    
    return ( 
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center 
                            justify-items-center min-h-screen p-8 pb-10 
                            gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
                    <Card className="w-[550px]">
                <CardHeader>
                    <CardTitle>Create Ticket</CardTitle>
                    <CardDescription>Create your Ticket here. Click submit when you're done.</CardDescription>
                </CardHeader>
                <CardContent>
                <form action={formAction} className="space-y-8">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className=" text-right">
                            Email
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="ticketer"
                            placeholder="Let's reach back to you..."
                        />
                        
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className=" text-right">
                            Title
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="title"
                            placeholder="Ticket title here..."
                        />
                        <div></div>
                        {state?.title && (
                            <p className="text-red-500 col-span-3 text-left">{state.title}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className="text-right">
                            Description
                        </label>
                        <textarea
                            className="block w-full p-2 text-black border 
                                        rounded col-span-3 "
                            name="description"
                            placeholder="Provide more details about this ticket"
                            row="5"
                        />
                        <div></div>
                        {state?.description && (
                        <p className="text-red-500 col-span-3 text-left">{state.description}</p>
                        )}
                    </div>

                    <input type="hidden" name="orgId" value={orgId} />

                    <div className="grid grid-cols-4 items-center gap-4">
                    <label className="col-span-4">
                            Support Documents
                        </label>
                        <input
                            type="file"
                            name="docs"
                            multiple 
                            accept="image/*,application/pdf"
                            className="block w-full p-2 text-black border rounded col-span-4"
                            
                        />
                        
                    </div>

                    <div className="col-span-4"> Added Documents</div>
                    {/* <div className="border-dashed border rounded-lg p-4 grid grid-cols-4 items-center gap-4">
                        
                        <div className="col-span-2">
                            <div className="flex gap-1.5 text-sm">
                                <FileIcon className="h-6 w-6" />
                                <div>example-document.pdf <span>(5.2MB)</span></div>
                            </div>
                        </div>
                        <div className="col-span-2 text-right">
                            <Button variant="ghost" size="sm" >
                                <MdDelete className="h-4 w-4" />
                                <span className="sr-only">Remove</span>
                            </Button>
                        </div>
                    </div> */}

                    <SubmitButton />

                    <div className="grid grid-cols-4 items-center gap-4">
                        <div className="col-span-2" >
                            <Button variant="outline">Back</Button>
                        </div>
                        <div className="col-span-2 text-right">
                            <Button variant="outline"  >Reset</Button>
                        </div>
                    </div>
                </form>

                
                </CardContent>
                    </Card>
                </main>   
            </div>
            <ToastContainer />
        </>
    );
}
 
export default NewTicketUI;




