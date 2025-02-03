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

const SelectUi = ({value, onChange}) => {
    return (
        <div >
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ticket Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all"><RadixUiBadge color="black">ALL TICKETS</RadixUiBadge></SelectItem>
                    <SelectItem value="Open"><RadixUiBadge color={statusBadge["OPEN"]}>OPEN</RadixUiBadge></SelectItem>
                    <SelectItem value="In_progress"><RadixUiBadge color={statusBadge["IN_PROGRESS"]}>IN PROGRESS</RadixUiBadge></SelectItem>
                    <SelectItem value="Resolved"><RadixUiBadge color={statusBadge["RESOLVED"]}>RESOLVED</RadixUiBadge></SelectItem>
                    <SelectItem value="Closed"><RadixUiBadge color={statusBadge["CLOSED"]}>CLOSED</RadixUiBadge></SelectItem>
                </SelectContent>
            </Select>
        </div>

     );
}
 
export default SelectUi;