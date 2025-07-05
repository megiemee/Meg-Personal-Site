import { useState } from "react";



function Button(){
    const [buttonFace, setButtonFace] = useState("˶ˆᗜˆ˵");

    function nextButtonFace(buttonFace: String){
        if (buttonFace == "˶ˆᗜˆ˵") {
            return "˶˃⤙˂˶";
        } else{
            return "˶ˆᗜˆ˵";
        }
    }
    
    
    return (

        <button className = "btn btn-secondary" onClick = {() => {
            setButtonFace(nextButtonFace(buttonFace));
        }
            }>
            
            {buttonFace}
        </button>
    )
       
}

export default Button;