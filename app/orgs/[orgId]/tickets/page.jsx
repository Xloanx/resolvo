import { Suspense } from 'react';
import SelectUi from './components/select-ui';
import PaginationUI from './components/pagination';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import { getTickets } from "@/server-utils/db-interact";
import TicketTable from './components/ticket-table';



const TicketHome = async ({params}) => {
    const {orgId} = await params
    const response = await getTickets(orgId)
    //stringify and parse the data, forcing it into a plain object format.
    //to be consumed by client component without returning error
    const tickets = JSON.parse(JSON.stringify(response.data)); 
    
    
    return (
        <main className='m-16'>


            {
                tickets.length === 0 ? (
                <div className="grid items-center justify-center ">
                    <div className="text-2xl text-red-500">No tickets found</div>
                    <div>
                        <Link className={buttonVariants({ variant: "outline" })}
                                href={`/orgs/${orgId}`}>Return to Dashboard</Link>
                    </div>

                </div>
                ):
                (
                <div>
                    <div className="py-14">
                        <SelectUi />
                    </div>
                    <Suspense fallback= {<p>Loading Tickets Feed...</p>}>
                        <TicketTable tickets={tickets} />
                    </Suspense>
                    
                    <div className="items-end">
                        <PaginationUI />
                    </div>
                </div>
                )
            }
          
        </main>
        

     );
}
 
export default TicketHome;