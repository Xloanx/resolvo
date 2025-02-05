'use client'
import { useEffect, useActionState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SubmitButton from "@/components/customs/submit-button";
// import { addOrganization } from "@/actions/organization";


const SignUpPage = () => {

    const router = useRouter();

    const initialState = {
        success: null, 
        errors: {},
      };

    // const [state, formAction] = useActionState(addOrganization, initialState);

    return ( 
        <>
            {/* <div className="grid grid-rows-[20px_1fr_20px] items-center 
                            justify-items-center min-h-screen p-8 pb-10 
                            gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]"> */}
                <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
                    <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>* - Required Fields</CardDescription>
                </CardHeader>
                <CardContent>
                <form action className="space-y-8">

                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right">
                            Fullname*
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="name"
                            placeholder="Prefarably Firstname first"
                        />
                        <div></div>
                        {/* {state?.name && (
                            <p className="text-red-500 col-span-3 text-left">{state.name}</p>
                        )}
                         */}
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right ">
                            Email*
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="email"
                            placeholder="Provide a valid e-mail address"
                        />
                        <div></div>
                        {/* {state?.email && (
                            <p className="text-red-500 col-span-3 text-left">{state.email}</p>
                        )} */}
                        
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right">
                            Phone Number*
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="phone1"
                            placeholder="Your Primary Phone Number"
                        />
                        <div></div>
                        {/* {state?.phone1 && (
                            <p className="text-red-500 col-span-3 text-left">{state.phone1}</p>
                        )} */}
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
            {/* </div> */}
        </>
     );
}
 
export default SignUpPage;











