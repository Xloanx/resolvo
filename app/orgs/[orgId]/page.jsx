
import { fetchOrganization } from "@/actions/organization";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const Dashboard = async ({params}) => {
    const {orgId} =  params;
    console.log(orgId)
    const res = await fetchOrganization(orgId)
    console.log(res);


    return ( 
    <>
    {/* <div> {data.organization.name} Dashboard</div>
    <div className="grid items-center justify-center gap-4">
        <div >
            <p>Report a flawed service delivery @ {data.organization.name}.</p>
        </div>
        <div >
           
            <Link className={buttonVariants({ variant: "outline" })} href={`/orgs/${orgId}/tickets/new`}>Click here</Link>
        </div>
    </div> */}
    </>
        
     );
}
 
export default Dashboard;