"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import SelectUi from "./select-ui"
// import MultipleSelect from "./multiple-select";
// import { Minus, Plus } from "lucide-react"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { MultiSelect } from "./multi-select"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

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

  

const DrawerOverlay = ({ticket}) => {
    const [selectedAgents, setSelectedAgents] = useState([]);
    return ( 
        <Drawer>
        <DrawerTrigger>{ticket.title}</DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle>Review Ticket</DrawerTitle>
            <DrawerDescription>Make changes to ticket here. Click save when you're done.</DrawerDescription>
            </DrawerHeader>
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
            <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>

     );
}
 
export default DrawerOverlay;
