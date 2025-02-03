"use client"
import { useState, use } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { MdDelete, MdAutoDelete } from "react-icons/md";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


const formSchema = z.object({
    ticketer: z.optional(z.string().email()),
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
      }),

  })


const NewTicketUI = ({params}) => {
    const {orgId} = use(params)
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    // Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        ticketer:"",
        title: "",
        description:"",
        uploads:[],
        },
    })
    
    // Define a submit handler.
    async function onSubmit(values) {
        console.log("Submitted values:", values); // Debugging
        setLoading(true);

        const { ticketer, title, description, uploads: attachments } = values;
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("ticketer", ticketer);
            formData.append("orgId", orgId);
            //attachments.forEach((file) => formData.append("attachments", file));

            const response = await fetch(`http://localhost:3000/api/v1/orgs/${orgId}/tickets`, {
                method: "POST",
                body: formData,
            });

            console.log("Response:", response);

            if (response.ok) {
                router.push(`/orgs/${orgId}/tickets`);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false)
        }
    }

    //file upload handler
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setUploadedFiles(files);
        // setValue("files", files); // Update form value
      };

    const handleRemoveFile = () =>{
        console.log('deleted')
    }
 
    //   const updateFiles = (incomingFiles) => {
    //     console.log("incoming files", incomingFiles);
    //     setExtFiles(incomingFiles);
    //   };
    //   const onDelete = (id) => {
    //     setExtFiles(extFiles.filter((x) => x.id !== id));
    //   };
    //   const handleSee = (imageSource) => {
    //     setImageSrc(imageSource);
    //   };
    //   const handleWatch = (videoSource) => {
    //     setVideoSrc(videoSource);
    //   };
    //   const handleStart = (filesToUpload) => {
    //     console.log("advanced demo start upload", filesToUpload);
    //   };
    //   const handleFinish = (uploadedFiles) => {
    //     console.log("advanced demo finish upload", uploadedFiles);
    //   };
    //   const handleAbort = (id) => {
    //     setExtFiles(
    //       extFiles.map((ef) => {
    //         if (ef.id === id) {
    //           return { ...ef, uploadStatus: "aborted" };
    //          } else return { ...ef };
    //        })
    //      );
    //   };
    //   const handleCancel = (id) => {
    //     setExtFiles(
    //       extFiles.map((ef) => {
    //         if (ef.id === id) {
    //           return { ...ef, uploadStatus: undefined };
    //          } else return { ...ef };
    //        })
    //      );
    //   };

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


    return ( 
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center 
                            justify-items-center min-h-screen p-8 pb-10 
                            gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
                    <Card className="w-[550px]">
                <CardHeader>
                    <CardTitle>Create Ticket</CardTitle>
                    <CardDescription>Create your Ticket here. Click submit when you're done.</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <FormField
                        control={form.control}
                        name="ticketer"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Let's reach back to you..." {...field} 
                                        className="col-span-3" 
                                        />
                                    </FormControl>
                                </div>
                            <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid grid-cols-4 items-center gap-4">
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Ticket title here..." {...field} 
                                className="col-span-3"
                                />
                            </FormControl>
                                </div>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                        placeholder="Provide more details about this ticket"
                                        className="resize-none col-span-3"
                                        rows={5}
                                        {...field}
                                        />
                                    </FormControl>
                                </div>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                            control={form.control}
                            name="upload"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Supporting File(s)</FormLabel>
                                    <FormControl>
                                        <Input id="upload" 
                                        name="upload"
                                        type="file" 
                                        multiple 
                                        onChange={handleFileChange}
                                        accept="image/*,application/pdf"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />

                            <div className="border-dashed border rounded-lg p-4 grid grid-cols-4 items-center gap-4">
                            <div className="col-span-2">
                                <div className="grid gap-1.5 text-sm">
                                    <FileIcon className="h-6 w-6" />
                                    <div>example-document.pdf <span>(5.2MB)</span></div>
                                </div>
                            </div>
                            <div className="col-span-2 text-right">
                                <Button variant="ghost" size="sm" onClick={handleRemoveFile}>
                                    <MdDelete className="h-4 w-4" />
                                    <span className="sr-only">Remove</span>
                                </Button>
                            </div>
                            </div>

                    <Button type="submit"  className ="w-full" disabled={loading}>
                        
                        {loading? "Submitting..." : "Submit Ticket"}
                        
                    </Button>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <div className="col-span-2" onClick={() => router.back()}>
                            <Button variant="outline">Back</Button>
                        </div>
                        <div className="col-span-2 text-right">
                            <Button variant="outline" onClick={() => form.reset()} >Reset</Button>
                        </div>
                    </div>
                </form>
            </Form>
                </CardContent>
                {/* <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter> */}
                    </Card>
                </main>   
            </div>
        </>
    );
}
 
export default NewTicketUI;




