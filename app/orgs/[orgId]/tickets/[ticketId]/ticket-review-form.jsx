'use client'
import Link from "next/link";
import Form from 'next/form'
import SubmitButton from "../components/submit-button"
import { editTicket } from '@/actions/tickets';
import { useEffect, useState, useActionState } from "react";
import { Label } from "@/components/ui/label"
import SelectUi from "../components/select-ui"
import { MultiSelect } from "../components/multi-select"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { buttonVariants } from "@/components/ui/button"
import { MdArchive } from "react-icons/md";
import ToolTip from "../components/toolTip";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    } from "@/components/ui/card"



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
const TicketReviewForm = ({ticket}) => {
    // destructure the contents of the ticket props
    const { 
        _id, title , description , status , 
        ticketer , assignedTo , attachments , orgId  
    } = ticket?.data || {};
    

    const [ticketStatus, setTicketStatus] = useState(status || ""); ;
    const [selectedAgents, setSelectedAgents] = useState(
        // assignedTo?.map(agent => ({ value: agent, label: agent })) || []
        assignedTo || []
    );



    const initialState = {
        success: null, 
        errors: {},
      };
    
    const editTicketWithId = editTicket.bind(null, _id, orgId); 

    const [state, formAction] = useActionState(editTicketWithId, initialState);

    function FileIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        )
      }
      
    function XIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
        </svg>
    )
    }

    // useEffect(() => {
    //     if (status) setTicketStatus(status);
    //     if (assignedTo) {
    //         setSelectedAgents(assignedTo.map(agent => ({
    //             value: agent, 
    //             label: agent
    //         })));
    //     }
    // }, [status, assignedTo]);

    // Trigger toast notification when state changes
        useEffect(() => {
            if (state?.success) {
                        toast.success('Ticket edited successfully!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                            });
            } else if (state?.success === false) {
                        toast.error('Ticket edit failed!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                            });
            }
        }, [state]);


        
    

    return (
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center 
                            justify-items-center min-h-screen p-8 pb-10 
                            gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
                    {/* <Card className="w-[600px] sm:w-[740px]"> */}
                    <Card >
                        <CardHeader>
                            <CardTitle>Ticket Review</CardTitle>
                            <CardDescription>Make changes to ticket here. Click submit when you're done.</CardDescription>
                        </CardHeader>

                        <CardContent>
                        <form action={formAction} className="space-y-8">
                            <div className="grid grid-cols-2 gap-4 ">
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label className=" text-right">
                                            Ticket Id
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full p-2 text-black border rounded col-span-3"
                                            name="ticketid"
                                            placeholder="Let's reach back to you..."
                                            defaultValue={_id}
                                            readOnly
                                            disabled
                                        />
                                        
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label className=" text-right">
                                            Ticketer Email
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full p-2 text-black border rounded col-span-3"
                                            name="ticketer"
                                            placeholder="Let's reach back to you..."
                                            defaultValue={ticketer}
                                            readOnly
                                            disabled
                                        />
                                        
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label className=" text-right">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full p-2 text-black border rounded col-span-3"
                                            name="title"
                                            placeholder="Ticket title here..."
                                            defaultValue={title}
                                            readOnly
                                            disabled
                                        />
                                        <div></div>
                                        {state?.title && (
                                            <p className="text-red-500 col-span-3 text-left">{state.title}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <label className="text-right">
                                            Description
                                        </label>
                                        <textarea
                                            className="block w-full p-2 text-black border 
                                                        rounded col-span-3 "
                                            name="description"
                                            placeholder="Provide more details about this ticket"
                                            rows={5}
                                            defaultValue={description}
                                            readOnly
                                            disabled
                                        />
                                        <div></div>
                                        {state?.description && (
                                        <p className="text-red-500 col-span-3 text-left">{state.description}</p>
                                        )}
                                    </div>
                                    {attachments?.length > 0 ?
                                        ( <div className="col-span-4"> Added Documents</div> ):
                                        (<div className="col-span-4"> No Supporting Documents</div>)
                                    }
                                    
                                    {/* {attachments?.map((attachment) => (
                                        <div className="border-dashed border rounded-lg p-4 grid grid-cols-4 items-center gap-2">
                                        <div className="col-span-2">
                                            <div className="flex gap-1.5 text-sm">
                                                <FileIcon className="h-6 w-6" />
                                                <div>{attachment.name} <span>({attachment.size})</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    ))} */}
                                    
                                </div>
                                <div className="flex flex-col gap-4">
                                    {/* <div className="grid grid-cols-2 items-center gap-2"> */}
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="status" className="text-right">
                                        Status
                                        </Label>
                                        <SelectUi 
                                            
                                            value={ticketStatus} 
                                            onChange={setTicketStatus} 
                                            className="col-span-3"/>
                                        
                                    </div>
                                    <input type="hidden" name="ticketStatus" value={ticketStatus} />
                                        {/* <div>
                                            <ToolTip tipTrigger={<MdArchive />} tipContent="Archive Ticket" />
                                            
                                        </div> */}
                                    {/* </div> */}
                                    <div className="grid grid-cols-4 items-center gap-2">
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
                                    <input type="hidden" name="selectedAgents" value={selectedAgents} />

                                </div>
                            </div>
                            
                            <SubmitButton />
                        </form>
                        <div className="mt-4 ">
                        <Link className={buttonVariants({ variant: "outline" })}
                                href={`/orgs/${orgId}/tickets/`}>Back to Tickets</Link>
                        </div>

                        </CardContent>
                    </Card>
                </main>   
            </div>
            <ToastContainer />
        </>
    );
}
 
export default TicketReviewForm;