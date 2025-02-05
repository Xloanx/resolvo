import { getTicket } from "@/server-utils/db-interact";
import TicketReviewForm from "./ticket-review-form";

const agents = [
    { value: 'Oliver Hansen', label: 'Oliver Hansen (Marketing)'},
    { value: 'Van Henry', label: 'Van Henry (Finance)' },
    { value: 'April Tucker', label: 'April Tucker (Sales)' },
    { value: 'Ralph Hubbard', label: 'Ralph Hubbard (Operations)' },
    { value: 'Omar Alexander', label: 'Omar Alexander (Human Resources)' },
    { value: 'Carlos Abbott', label: 'Carlos Abbott (Development)' },
    { value: 'Miriam Wagner', label: 'Miriam Wagner (Development)' },
    { value: 'Bradley Wilkerson', label: 'Bradley Wilkerson (Sales)' },
    { value: 'Virginia Andrews', label: 'Virginia Andrews (Development)' },
    { value: 'Kelly Snyder', label: 'Kelly Snyder (Operations)' },
  ];
const TicketReviewPage = async ({params}) => {
    const {orgId, ticketId} = await (params)
    const response = await getTicket(orgId, ticketId);

    //stringify and parse the data, forcing it into a plain object format.
    //to be consumed by client component without returning error
    const ticket = JSON.parse(JSON.stringify(response)); 
    return <TicketReviewForm ticket={ticket}/>
}
 
export default TicketReviewPage;