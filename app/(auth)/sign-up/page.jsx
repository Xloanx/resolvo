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
import SignUpProgress from "@/components/customs/sign-up-progress";
import { addAdmin } from "@/actions/users";
import Link from "next/link";


const SignUpPage = () => {

    const router = useRouter();

    const initialState = {
        success: null, 
        errors: {},
      };

    const [state, formAction] = useActionState(addAdmin, initialState);

    return ( 
        <>
            <SignUpProgress progress={10}/>

            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>* - Required Fields</CardDescription>
                </CardHeader>
                <CardContent>
                <form action={formAction} className="space-y-4">

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
                            name="email"
                            placeholder="Provide a valid e-mail address"
                        />
                        <div></div>
                        {state?.email && (
                            <p className="text-red-500 col-span-3 text-left">{state.email}</p>
                        )}
                        
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right ">
                            Password*
                        </label>
                        <input
                            type="password"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="password"
                            placeholder="minimum 8 characters"
                        />
                        <div></div>
                        {state?.password && (
                            <p className="text-red-500 col-span-3 text-left">{state.password}</p>
                        )}
                        
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4 text-sm">
                        <label className=" text-right">
                            Phone Number*
                        </label>
                        <input
                            type="text"
                            className="block w-full p-2 text-black border rounded col-span-3"
                            name="phone"
                            placeholder="Your Primary Phone Number"
                        />
                        <div></div>
                        {state?.phone && (
                            <p className="text-red-500 col-span-3 text-left">{state.phone}</p>
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

                <div className="grid items-center justify-center gap-2">
                    <Link href="/sign-in" className="text-xs text-center"> Already have an account? </Link>
                </div>
                
                </CardContent>
                    </Card>
                {/* </main>    */}
      
        </>
     );
}
 
export default SignUpPage;











