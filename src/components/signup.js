import { useState } from 'react';
import './signup.css';



const Signup = () =>  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [remember, setRemember] = useState(true);

    const data = "email =>"+email+" password => "+password+" rePassword =>"+rePassword+" remember =>"+remember;

    function show_data(e){
        console.log(data)
    }

    function reset_data(){
        setEmail('')
        setPassword('')
        setRePassword('')
        setRemember(true)
    }

  return (
    <div className="sign-up-form">
        <div className="form-head">
            <h2>Sign Up</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio.</p>
        </div>
        <form action="">
            <div className="single-field-item">
                <h3>Email</h3>
                <input type="text" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
                 />    
            </div>
            <div className="single-field-item">
                <h3>Password</h3>
                <input type="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
                />    
            </div>
            <div className="single-field-item">
                <h3>Repeat Password</h3>
                <input type="password" 
                value={rePassword} 
                onChange={(event) => setRePassword(event.target.value)}
                />    
            </div>
            <div className="remember-me">
                <input                
                value={remember} 
                onChange={(event) => setRemember(event.target.checked)}
                type="checkbox"></input>
                <p>Remember me</p>
            </div>
            <div className="term">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil natus saepe magni!</p>
            </div>
            <div className="single-field-item buttons">
                <div className='button censel' onClick={() => reset_data()} >Censel</div>  
                <div className='button signup' onClick={() => show_data()} >SignUp</div>  
            </div>
        </form>
    </div>
  )
}

export default Signup