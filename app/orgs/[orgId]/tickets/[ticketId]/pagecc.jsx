"use client"

import React, { useEffect, useState,use } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import SelectUi from "../components/select-ui"
import { MdArchive } from "react-icons/md";
import { MultiSelect } from "../components/multi-select"



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
const TicketPage = ({params}) => {
    const {id} = use(params)

    useEffect(()=>{
        fetch(`/api/v1/tickets/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setTicket(data)
        })
    },[])

    const [ticket, setTicket] = useState({
        title: "",
        description: "",
        status: "",
        createdAt: "",
        ticketer: "",
        updatedAt: "",
        assignedTo: [],
        attachments: [],
        org: {}
    })

    const [selectedAgents, setSelectedAgents] = useState([]);

    return (
        <>
        <h1>Ticket Review for Ticket {id}</h1>
        <h3>Make changes to ticket here. Click save when you're done.</h3>

        <div className="p-4 pb-0 mx-10"> 
                <div className="grid grid-rows-2 grid-flow-col gap-0.5 items-center ">

                <div className="grid grid-cols-4 gap-4">
                    <Label htmlFor="title" className="text-right">
                    Title
                    </Label>
                    <Input id="title" value={ticket.title} className="col-span-3" readOnly />
                </div>

                <div className="grid grid-cols-4 gap-4">
                        <Label htmlFor="description" className="text-right">
                        Description
                        </Label>
                        <Textarea placeholder="Type your message here." 
                                    id="description" value={ticket.description} 
                                    className="col-span-3" rows="5"disabled />

                </div>

                <div className="grid grid-cols-4 gap-4">
                        <Label htmlFor="status" className="text-right">
                        Status
                        </Label>
                        <SelectUi className="col-span-3"/>
                        <MdArchive />
                </div>

                    <div className="grid grid-cols-4 gap-4">
                                <Label htmlFor="assignees" className="text-right">
                                Assignee(s)
                                </Label>
                                <MultiSelect
                                    options={agents}
                                    onValueChange={setSelectedAgents}
                                    defaultValue={selectedAgents}
                                    placeholder="Select Agents"
                                    variant="inverted"
                                    animation={2}
                                    maxCount={3}
                                    className="col-span-3"
                                />
                    </div>



                </div>
            </div>

            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
        </>
        

     );
}
 
export default TicketPage;