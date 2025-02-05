import { Suspense } from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import { OrgStatusSwitch } from './[orgId]/tickets/components/org-status-switch';
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getOrganizations } from "@/server-utils/db-interact";
import PaginationUI from './[orgId]/tickets/components/pagination';
import TableActions from './[orgId]/tickets/components/table-actions';

  




const ResolvoAdminPage = async () => {
    const response = await getOrganizations ();
    const organizations = JSON.parse(JSON.stringify(response)); 
    return ( 
        <main className='m-16'>


            {
                    organizations.data.length === 0 ? (
                    <div className="grid items-center justify-center ">
                        <div className="text-2xl text-red-500">No organizations found</div>
                        <div>
                            <Link className={buttonVariants({ variant: "outline" })}
                                    href={`/orgs/${orgId}`}>Return to Dashboard</Link>
                        </div>

                    </div>
                ):
                (
                    <div>
                        <Suspense fallback= {<p>Loading Organizations Feed...</p>}>
                            <div> Organizations Feeds</div>
                            <div className="flex items-center py-4">
                                    <Input
                                    placeholder="Filter organizations..."
                                    className="max-w-sm"
                                    />
                            </div>
                            <div className="rounded-md border">
                                <Table>
                                <TableHeader className='bg-gray-200'>
                                    <TableRow>
                                    <TableHead className="w-[100px]">S/N</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Contact</TableHead>
                                    <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        organizations.data.map((organization)=>
                                            <TableRow key={organization._id}>
                                                <TableCell className="font-medium">{organizations.data.indexOf(organization)+1}</TableCell>
                                                <TableCell>{organization.name}</TableCell>
                                                <TableCell><OrgStatusSwitch 
                                                    orgId={organization._id} status= {organization.status}/></TableCell>
                                                <TableCell>{organization.contact}</TableCell>
                                                <TableCell><TableActions organization={organization}/></TableCell>
                                            </TableRow>
                                        )
                                    }

                                </TableBody>
                                </Table>
                            </div>
                        </Suspense>
                        
                        <div className="items-end">
                            <PaginationUI />
                        </div>
                    </div>
                )
            }
          
        </main>
        

     );
}
 
export default ResolvoAdminPage;