
import { useState } from "react";





const useToogleComponent = (number) => {

 const arr= [
             true
            ]


    for (let i = 1; i < number; i++) {
   
        arr.push(false);
       
    }


    return <Toggle arr={arr}/>




}

export default useToogleComponent;








export const Toggle = ({arr}) => {

const [change,setChange] = useState(arr)
const [current,setCurrent] = useState(0)

const handleChange= ()=> {

    const newArr = [...arr];

    newArr.map((state,index)=>{

       index === i ? true:false;
    })

    setChange(newArr);

}


return [change,handleChange];

}
