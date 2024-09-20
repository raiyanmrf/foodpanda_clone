
import { useState } from "react";





const useHandleDrop = (displayClass) => {

    const [isDropped, setIsDropped] = useState(false);
    const [currentClass, setCurrentClass] = useState('display-none');


    
    
    const handleDropMenu = ()=>{
    
     !isDropped ?      setCurrentClass(displayClass) :  setCurrentClass('display-none');
                            
     setIsDropped(!isDropped);
     
    }



    return [currentClass,handleDropMenu];

}

export default useHandleDrop