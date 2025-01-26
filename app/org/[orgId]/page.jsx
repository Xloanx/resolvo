// import DialogUI from "./tickets/components/dialog";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const Dashboard = async ({params}) => {
    const {orgId} = await params
    return ( 
    <>
    <div> Organization {orgId} Dashboard</div>
    <div className="grid items-center justify-center gap-4">
        <div className="items-center justify-center">
    <p>Report a flawed service delivery @ Kernel Greens Integrated service.</p>
    </div>
    <div className="items-center justify-center">
    {/* <DialogUI /> */}
    <Link className={buttonVariants({ variant: "outline" })} href={`/org/${orgId}/tickets/new`}>Click here</Link>

    </div>
    
    </div>
    


    </>
        
     );
}
 
export default Dashboard;