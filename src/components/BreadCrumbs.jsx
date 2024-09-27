import React from 'react'
import { backwardIcon, forwardIcon } from '../../public/svg';

const BreadCrumbs = ({linkArray}) => {


  return (
    <div className='breadcrumbs'>

        {
            linkArray.map((item,index)=>
            {
                return <div key={index} className='breadcrumbs-links'>
                
                
                 {index !== linkArray.length-1 ?
                      <>
                      <p className='breadcrumbs-link'>{item}</p>

                      <img width={`20px`} src={forwardIcon}/>
                      </>:
                   
                      <p>{item}</p>

                                 
                                 
                  }
                
                </div>
            })
        }

    </div>
  )
}

export default BreadCrumbs