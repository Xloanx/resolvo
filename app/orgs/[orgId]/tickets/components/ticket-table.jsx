'use client'


import { Badge as RadixUiBadge } from "@radix-ui/themes";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { humanReadableDate } from "@/lib/utils";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";


  const statusBadge = {
    Open: "red",
    In_progress: "yellow",
    Resolved: "green",
    Closed: "blue",
  };



const TicketTable = ({tickets}) => {
    // const { tickets } = useTickets();

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
            <TableHeader className='bg-gray-200'>
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
                        <TableRow key={ticket._id}>
                            <TableCell className="font-medium">{tickets.indexOf(ticket)+1}</TableCell>
                            {/* <TableCell><DrawerOverlay ticket={ticket}/></TableCell> */}
                            <TableCell><Link href={`/orgs/${ticket.orgId}/tickets/${ticket._id}`} target="_blank" rel="noopener noreferrer">{ticket.title}</Link></TableCell>
                            <TableCell><RadixUiBadge color={statusBadge[ticket.status]}>{ticket.status}</RadixUiBadge></TableCell>
                            <TableCell>{humanReadableDate(ticket.createdAt)}</TableCell>
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




  
