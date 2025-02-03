import { Suspense } from 'react';
import SelectUi from './components/select-ui';
import TicketTable from './components/ticket-table';
import PaginationUI from './components/pagination';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import { getTickets } from "@/app/orgs/server-utils/db-interact";


const TicketHome = async ({params}) => {
    const {orgId} = await params
    const res = await fetch(`http://localhost:3000/api/v1/orgs/${orgId}/tickets`)
    const tickets = await res.json()
    // try {
    //     const res = await fetch(`http://localhost:3000/api/v1/orgs/${orgId}/tickets`)
    //     if (!res.ok) {
    //         throw new Error(`Failed to fetch tickets: ${res.statusText}`);
    //     }
    //     const tickets = await res.json()
    //     console.log(tickets.data)
    // } catch (error) {
    //     console.error("Error: ", error)
    // }
    // const tickets = await getTickets(orgId)
    // console.log(tickets)


    
    return (
        <main className='m-16'>


            {
                tickets.data.length === 0 ? (
                    // tickets.length === 0 ? (
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
                            <TicketTable  tickets={tickets.data}/>
                            {/* <TicketTable  tickets={tickets}/> */}
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