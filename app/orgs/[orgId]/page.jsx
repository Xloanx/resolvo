

import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const Dashboard = async ({params}) => {
    const {orgId} = await params;
    const res = await fetch(`http://localhost:3000/api/v1/orgs/${orgId}`)
    const data = await res.json()
    console.log(data);


    return ( 
    <>
    <div> {data.organization.name} Dashboard</div>
    <div className="grid items-center justify-center gap-4">
        <div >
            <p>Report a flawed service delivery @ {data.organization.name}.</p>
        </div>
        <div >
            {/* <DialogUI /> */}
            <Link className={buttonVariants({ variant: "outline" })} href={`/orgs/${orgId}/tickets/new`}>Click here</Link>
        </div>
    </div>
    </>
        
     );
}
 
export default Dashboard;