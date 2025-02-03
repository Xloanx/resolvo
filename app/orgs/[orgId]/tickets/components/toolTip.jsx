import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
const ToolTip = ({tipTrigger, tipContent}) => {
    return ( 
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>{tipTrigger}</TooltipTrigger>
            <TooltipContent>
            <p>{tipContent}</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>

     );
}
 
export default ToolTip;
