'use client'
import { useRouter } from "next/navigation";
import SubmitButton from "../[orgId]/tickets/components/submit-button";
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
import { addOrganization } from "@/actions/organization";




const NewOrgUI = () => {
   

    const router = useRouter();

    const initialState = {
        success: null, 
        errors: {},
      };
    
 

    const [state, formAction] = useActionState(addOrganization, initialState);



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
                    <CardTitle>Create Organization</CardTitle>
                    <CardDescription>Create your Organization here. Click submit when you're done.</CardDescription>
                </CardHeader>
                <CardContent>
                <form action={formAction} className="space-y-8">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className=" text-right">
                            Name of Organization
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="org_name"
                            placeholder="The Full Name of your Organization"
                        />
                        <div></div>
                        {state?.org_name && (
                            <p className="text-red-500 col-span-3 text-left">{state.org_name}</p>
                        )}
                        
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className=" text-right">
                            Organization Support Email
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="org_email"
                            placeholder="An email address for support."
                        />
                        <div></div>
                        {state?.org_email && (
                            <p className="text-red-500 col-span-3 text-left">{state.org_email}</p>
                        )}
                        
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className=" text-right">
                            Primary Phone Number
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="org_phone1"
                            placeholder="Your Primary Phone Number"
                        />
                        <div></div>
                        {state?.org_phone1 && (
                            <p className="text-red-500 col-span-3 text-left">{state.org_phone1}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className=" text-right">
                            Secondary Phone Number
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="org_phone2"
                            placeholder="Alternative Phone Number"
                        />
                        <div></div>
                        {state?.org_phone2 && (
                            <p className="text-red-500 col-span-3 text-left">{state.org_phone2}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label className="text-right">
                            Address
                        </label>
                        <textarea
                            className="block w-full p-2 text-black border 
                                        rounded col-span-3 "
                            name="org_address"
                            placeholder="Provide your organization address"
                            row="5"
                        />
                        <div></div>
                        {state?.address && (
                        <p className="text-red-500 col-span-3 text-left">{state.address}</p>
                        )}
                    </div>

                    

                   


                    <SubmitButton />

                    <div className="grid grid-cols-4 items-center gap-4">
                        <div className="col-span-2" >
                            <Button variant="outline" onClick={() => router.back()} >Back</Button>
                        </div>
                        <div className="col-span-2 text-right">
                            <Button variant="outline" onClick={() => router.refresh()} >Reset</Button>
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
 
export default NewOrgUI;




