'use client'
import SelectUi from './components/select-ui';
import TicketTable from './components/ticket-table';
import PaginationUI from './components/pagination';
import { useTickets } from '@/contexts/tickets/useTickets';
import { columns } from './components/ticket-table-columns';


const TicketHome = () => {
    const {tickets, loading} = useTickets();
    return (
        <main className='m-16'>
            <div className="py-14">
                <SelectUi />
            </div>

            <div>
                <TicketTable columns={columns} data={tickets} />
            </div>
                
            {/* <div className="items-end">
                <PaginationUI />
            </div> */}
        </main>
        

     );
}
 
export default TicketHome;