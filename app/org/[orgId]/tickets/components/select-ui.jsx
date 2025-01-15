import { Badge as RadixUiBadge } from "@radix-ui/themes";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  const statusBadge = {
    "OPEN": "red",
    "IN_PROGRESS": "yellow",
    "RESOLVED": "green",
    "CLOSED": "blue",
  };

const SelectUi = () => {
    return (
        <div className="py-14">
            <Select>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ticket Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all"><RadixUiBadge color="black">ALL TICKETS</RadixUiBadge></SelectItem>
                    <SelectItem value="open"><RadixUiBadge color={statusBadge["OPEN"]}>OPEN</RadixUiBadge></SelectItem>
                    <SelectItem value="in_progress"><RadixUiBadge color={statusBadge["IN_PROGRESS"]}>IN PROGRESS</RadixUiBadge></SelectItem>
                    <SelectItem value="resolved"><RadixUiBadge color={statusBadge["RESOLVED"]}>RESOLVED</RadixUiBadge></SelectItem>
                    <SelectItem value="closed"><RadixUiBadge color={statusBadge["CLOSED"]}>CLOSED</RadixUiBadge></SelectItem>
                </SelectContent>
            </Select>
        </div>

     );
}
 
export default SelectUi;