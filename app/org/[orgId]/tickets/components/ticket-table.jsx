import { Badge, badgeVariants } from "@/components/ui/badge";
import { Badge as RadixUiBadge } from "@radix-ui/themes";
import SideSheet from "./sideSheet";
import DrawerOverlay from "./drawer";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  const statusBadge = {
    OPEN: "red",
    IN_PROGRESS: "yellow",
    RESOLVED: "green",
    CLOSED: "blue",
  };


const TicketTable = ({tickets}) => {
    return ( 
        <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">S/N</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Ticketer</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                tickets.map((ticket)=>
                    <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{tickets.indexOf(ticket)+1}</TableCell>
                        <TableCell><DrawerOverlay ticket={ticket}/></TableCell>
                        <TableCell><RadixUiBadge color={statusBadge[ticket.status]}>{ticket.status}</RadixUiBadge></TableCell>
                        <TableCell>{ticket.created}</TableCell>
                        <TableCell>{ticket.ticketer}</TableCell>
                    </TableRow>
                )
            }

        </TableBody>
        </Table>
     );
}
 
export default TicketTable;




  
