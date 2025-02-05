import React, {useState} from "react";
import { Progress } from "@/components/ui/progress"


const SignUpProgress = ({progress}) => {
    // const [progress, setProgress] = useState(0)
    return ( 
        <Progress value={progress} className="w-[20%]" />
     );
}
 
export default SignUpProgress;