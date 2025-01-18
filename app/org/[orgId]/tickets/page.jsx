import {tickets} from '../../../api/v1/tickets/ticket'
import TicketTable from './components/ticket-table';
import SelectUi from './components/select-ui';
import PaginationUI from './components/pagination';
const TicketHome = () => {
    return (
        <main className='m-16'>
            <div className="py-14">
                <SelectUi />
            </div>


            <div> Ticket Feeds</div>

            <div>
                <TicketTable tickets={tickets}/>
            </div>
            
            <div className="justify-items-stretch">
                <div className="justify-self-end">
                <PaginationUI />
                </div>
            </div>
        </main>
        

     );
}
 
export default TicketHome;