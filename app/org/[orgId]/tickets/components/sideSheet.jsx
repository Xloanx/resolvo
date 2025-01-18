'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import SelectUi from "./select-ui"
        

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
  } from "@/components/ui/sheet"


  const SideSheet = ({ticket}) => {


    return ( 
        <Sheet>
            <SheetTrigger>{ticket.title}</SheetTrigger>
            <SheetContent className="w-[600px] sm:w-[740px]" scrollable="true"   >
                <SheetHeader>
                <SheetTitle>Review Ticket</SheetTitle>
                <SheetDescription>
                    Make changes to ticket here. Click save when you're done.
                </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4">
                    <div className="grid items-center gap-2">
                        <Label htmlFor="status" className="text-left">
                        Status
                        </Label>
                        <SelectUi />
                    </div>
                    <div className="grid items-center gap-2">
                            <Label htmlFor="title" className="text-left">
                            Title
                            </Label>
                            <Input id="title" value={ticket.title} className="col-span-3" readOnly/>
                        </div>
                        <div className="grid items-center gap-2">
                            <Label htmlFor="description" className="text-left">
                            Description
                            </Label>
                            <Textarea placeholder="Type your message here." 
                                        id="description" value={ticket.description} 
                                        className="col-span-3" rows="10"disabled />

                        </div>
                    <div className="grid  items-center gap-2 ">
                        <Label htmlFor="assignees" className="text-left">
                        Assignee(s)
                        </Label>
                        {/* <MultipleSelect  /> */}
                    </div>

                </div>
                <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>

     );
  }
   
  export default SideSheet;