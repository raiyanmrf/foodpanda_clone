import { Fragment } from "react"



const Cuisines = ({items}) => {


  return (
   <span className='title-cuisine'>

        {
            items.map((item,index)=>
            {
                return <Fragment   key={index}>
                
                
                 {  index !== items.length-1 ?
                   
                    <>  {item} ~   </> :  <> {item} </>                         
                  }
                
                </Fragment>
            })
        }

    </span>
  )
}

export default Cuisines