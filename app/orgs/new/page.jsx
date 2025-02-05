'use client'
import { useRouter } from "next/navigation";
import SubmitButton from "../[orgId]/tickets/components/submit-button";
import { addOrganization } from "@/actions/organization";
import { useEffect, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import SignUpProgress from "@/components/customs/sign-up-progress";



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
            <SignUpProgress progress={45}/>
                    <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Create Organization</CardTitle>
                    <CardDescription>Create your Organization here. Click submit when you're done.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-xs">* - Required Fields </p>
                <form action={formAction} className="space-y-">

                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right">
                            Name*
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="org_name"
                            placeholder="The Full Name of your Organization"
                        />
                        <div></div>
                        {state?.name && (
                            <p className="text-red-500 col-span-3 text-left">{state.name}</p>
                        )}
                        
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right ">
                            Email*
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="org_email"
                            placeholder="Organization email address for support."
                        />
                        <div></div>
                        {state?.email && (
                            <p className="text-red-500 col-span-3 text-left">{state.email}</p>
                        )}
                        
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right">
                            Phone*
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="org_phone1"
                            placeholder="Your Primary Phone Number"
                        />
                        <div></div>
                        {state?.phone1 && (
                            <p className="text-red-500 col-span-3 text-left">{state.phone1}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right ">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3 "
                            name="org_phone2"
                            placeholder="Alternative Phone Number (Optional)"
                        />
                        <div></div>
                        {state?.phone2 && (
                            <p className="text-red-500 col-span-3 text-left ">{state.phone2}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className="text-right ">
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

                    <div className="grid grid-cols-4 items-center gap-4 mt-2">
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
        </>
    );
}
 
export default NewOrgUI;




