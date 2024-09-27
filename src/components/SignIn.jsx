
import { useEffect, useRef, useState } from "react";
import { backwardIcon, cancelIcon, dropIcon, envelopeIcon } from "../../public/svg";
import useIsActive from "../../hooks/useIsActive";
import WelcomeLogIn from "./WelcomeLogIn";
import useToogleComponent from "../../hooks/useToggleComponent";




const SignIn = ({handleIsSignActive}) => {


 

  const [isWelcomeLogin,handleisWelcomeLogin] = useIsActive();
  const [isEmailInput,handleIsEmailInput] = useIsActive();
  const [isVerifyEmail,handleIsVerifyEmail] = useIsActive();


  const [count, setcount] = useState(60)

//   useEffect(()=>{
//     const id = setInterval(()=>{
//       setcount(c=>c-1);
//     },1000) 


//  return ()=>{
//   clearInterval(id);
//  }
//   },[])



  return (
<section className="signin">

  <div className="signin-container">

  {(isEmailInput || isVerifyEmail) &&   <div className="signin-backward" onClick={()=>{

    isVerifyEmail ? handleIsVerifyEmail() : handleIsEmailInput();

  }}>
      <img src={backwardIcon}  alt="<"  />
    </div> }

    <div className="signin-cancel" onClick={handleIsSignActive}>
        <img src={cancelIcon} alt="X" />
    </div>

   { !isEmailInput && <WelcomeLogIn handleIsEmailInput={handleIsEmailInput}/>}
    
    { isEmailInput &&   <>
    
    <div className="signin-welcome">
      
        <img src={envelopeIcon} alt="" />
        <h2>Whats's your email?</h2>
        <p>We'll check if you have an account</p>
    </div>

    <form className="signin-buttons" onSubmit={(e)=>{
     e.preventDefault();
     handleIsEmailInput();
    }}>

    <input name='email' placeholder='Email' type="text"  />
    <label className='email-placeholder '>Email</label>
    <button type="submit" className='btn btn-pink btn-moderate btn-lg'>Continue</button>

    </form> </> }
      
   { isVerifyEmail &&
    <>
   
    <div className="signin-welcome">
        
        <img src={envelopeIcon} alt="" />
        <h2>Verify your email address to get started</h2>
        <p style={{fontSize:'11px'}}>This helps us mitigate fraud and keep your personal data safe</p>
    </div>


  <div className="signin-buttons">
  <button  className='btn btn-pink btn-moderate btn-lg'>Send Verification Email</button>

  {/* <button 
    className='btn  btn-moderate btn-lg'>Resend in {count}s</button>
  
  
  <button  className='btn btn-pink btn-moderate btn-lg'>
    <div className="dot-container">
    
    <div className="dot"> </div>
    <div className="dot"> </div>
    <div className="dot"> </div>
    
    </div>
    
    </button> */}
    
    </div>
   
   </>    }

    


  </div>
</section>
  )
}

export default SignIn