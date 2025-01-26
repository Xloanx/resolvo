'use client'

import { useTickets } from "@/contexts/tickets/useTickets";
import { Badge as RadixUiBadge } from "@radix-ui/themes";
import DrawerOverlay from "./drawer";
import { Input } from "@/components/ui/input";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";


  const statusBadge = {
    OPEN: "red",
    IN_PROGRESS: "yellow",
    RESOLVED: "green",
    CLOSED: "blue",
  };



const TicketTable = () => {
    const { tickets } = useTickets();

    return (
        <div>
            <div> Ticket Feeds</div>
            <div className="flex items-center py-4">
                    <Input
                    placeholder="Filter tickets..."
                    // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    // onChange={(event) =>
                        // table.getColumn("email")?.setFilterValue(event.target.value)
                    // }
                    className="max-w-sm"
                    />
            </div>



        
        <div className="rounded-md border">
            <Table>
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
        </div>
        </div>
     );
}
 
export default TicketTable;




  
