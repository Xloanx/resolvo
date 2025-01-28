"use client"
import { useState } from "react"
import { Dropzone, FileMosaic } from "@files-ui/react";
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const fileSchema = z.object({
    name: z.string().min(1, "File name is required"), // Validate file name
    type: z.string().regex(/^image\/(jpeg|png|gif)$/, "Invalid file type"), // Validate file type
    size: z.number().max(5 * 1024 * 1024, "File size must be less than 5MB"), // Validate file size (e.g., 5MB)
  })

const formSchema = z.object({
    email: z.optional(z.string().email()),
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
      }),
    uploads: z.optional(z.array(fileSchema)),
    // files: z.array(
    //         z.instanceof(File).refine((file) => file.size <= 5 * 1024 * 1024, {
    //             message: "File size must be less than 5MB",
    //         })
    //         )
    //         .max(5, "Maximum 5 files allowed"),
  })


const DialogUI = () => {
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    //const [uploadedFiles, setUploadedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const router = useRouter()

    // Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email:"",
        title: "",
        description:"",
        uploads:[],
        },
    })

    // Define a submit handler.
    async function onSubmit(values) {
        // Do something with the form values.
        setLoading(true)
        const {email, title, description, uploads} = values
        try {
            const response = await fetch("http://localhost:3000/api/v1/tickets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(email, title, description),
            });

            if (response.ok) {
                router.push("/org/[orgId]/tickets")
            }
        } catch (error) {
            
        } finally {
            
        }
        
        // console.log(ticket)
    }

    //file upload handler
    // const handleFileChange = (event) => {
    //     const files = Array.from(event.target.files);
    //     setUploadedFiles(files);
    //     // setValue("files", files); // Update form value
    //   };
    const updateFiles = (incomingFiles) => {
        setFiles(incomingFiles);
      };

    return ( 
        <Dialog>
            <DialogTrigger>
                    <Button>Create Ticket</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Ticket</DialogTitle>
                    <DialogDescription>
                    Create your Ticket here. Click submit when you're done.
                    </DialogDescription>
                </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Let's reach back to you..." {...field} 
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ticket title here..." {...field} 
                                        // onChange={(e) => setTitle(e.target.value)}
                                        // value={title}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                        placeholder="Provide more details about this ticket"
                                        className="resize-none"
                                        rows={5}
                                        {...field}
                                        // onChange={(e) => setDescription(e.target.value)}
                                        // value={description}
                                        />
                                    </FormControl>
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
                                                {/* <Input id="upload" 
                                                name="upload"
                                                type="file" 
                                                multiple 
                                                onChange={handleFileChange}
                                                accept="image/*,application/pdf"/> */}
                                                <Dropzone
                                                    onChange={updateFiles}
                                                    minHeight="195px"
                                                    value={extFiles}
                                                    accept="image/*, video/*, application/pdf"
                                                    maxFiles={3}
                                                    maxFileSize={2 * 1024*1024}
                                                    label="Drag'n drop files here or click to browse"
                                                    uploadConfig={{
                                                        // autoUpload: true
                                                        url: BASE_URL + "/file/28048465460",
                                                        cleanOnUpload: true,
                                                    }}
                                                    onUploadStart={handleStart}
                                                    onUploadFinish={handleFinish}
                                                    //fakeUpload
                                                    actionButtons={{
                                                        position: "after",
                                                        abortButton: {},
                                                        deleteButton: {},
                                                        uploadButton: {},
                                                    }}
                                                    >
                                                        {extFiles.map((file) => (
                                                        <FileMosaic
                                                            {...file}
                                                            key={file.id}
                                                            onDelete={onDelete}
                                                            onSee={handleSee}
                                                            onWatch={handleWatch}
                                                            onAbort={handleAbort}
                                                            onCancel={handleCancel}
                                                            resultOnTooltip
                                                            preview
                                                            info
                                                        />
                                                        ))}
                                                    </Dropzone>
                                                    <FullScreen
                                                        open={imageSrc !== undefined}
                                                        onClose={() => setImageSrc(undefined)}
                                                        >
                                                        <ImagePreview src={imageSrc} />
                                                        </FullScreen>
                                                        <FullScreen
                                                        open={videoSrc !== undefined}
                                                        onClose={() => setVideoSrc(undefined)}
                                                        >
                                                        <VideoPreview src={videoSrc} autoPlay controls />
                                                    </FullScreen>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                            <Button type="submit"  className ="w-full" disabled={loading}>
                                
                                {loading? "Submitting..." : "Submit Ticket"}
                                
                            </Button>
                        </form>
                    </Form>

            </DialogContent>
        </Dialog>
     );
}
 
export default DialogUI;




