import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const Dashboard = () => {
    return (
        <>
            <h1>Admin Dashboard</h1>
            <Link className={buttonVariants({ variant: "outline" })} href={`/orgs/new`}>Create Organization</Link>
        </>
     );
}
 
export default Dashboard;