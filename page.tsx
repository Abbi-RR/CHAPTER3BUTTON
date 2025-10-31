"use client"


import { ButtonSuccess, ButtonWarning, ButtonDanger, ButtonOutlineSuccess, ButtonOutlineDanger, ButtonOutlineInfo } from "@/components/button";


const TestButton = () => {
   return(
       <div className="m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
           <ButtonOutlineSuccess type="button" className="ml-2" onClick={() => alert("Outline Success button clicked!")}>
                ButtonOutlineSuccess
           </ButtonOutlineSuccess>
           <ButtonOutlineDanger type="button" className="ml-2" onClick={() => alert("Outline Danger button clicked!")}>
                ButtonOutlineDanger
           </ButtonOutlineDanger>
           <ButtonOutlineInfo type="button" className="ml-2" onClick={() => alert("Outline Info button clicked!")}>
                ButtonOutlineInfo
           </ButtonOutlineInfo>
       </div>
   )
}


export default TestButton;