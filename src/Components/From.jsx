import { useState } from "react";

const From =()=>{
    const [input,setInput]=useState([
        {
            fname:'',lname:'',email:'',address:'',password:'',dob:'',city:'',gender:''
        }
    ])
    const [error,setError]=useState({});
    const handleClick =(e)=>{
        setInput({
            ...input,[e.target.name]:e.target.value
        })
    }
    const handleSubmit = ()=>{
        const err={};
        if(!input.fname){
            err.fname="Frist Name is required";
        }
        if(!input.lname){
            err.lname="Last Name is required";
        }
        if(!input.email){
            err.email="email is required";
        }
        if(!input.address){
            err.address="address is required";
        }
        if(!input.password){
            err.password="password is required";
        }
        if(!input.dob){
            err.dob="dob is required";
        }
        if(!input.city){
            err.city="city is required";
        }
        if(!input.gender){
            err.gender="gender is required";
        }
        setError(err);
    }
    return(
        <div className="Main">
            <center className="from">
            
            <table>
            <h1>From Validation</h1>
                <tr>
                    <td>Frist Name:-
                    <input type="text" name='fname' value={input.fname} onChange={handleClick}/></td>
                </tr>
                <span>{error.fname}</span>
                <tr>
                    <td>Last Name:-
                    <input type="text" name='lname' value={input.lname} onChange={handleClick}/></td>
                </tr><span>{error.lname}</span>
                <tr>
                    <td>Email:-
                    <input type="text" name='email' value={input.email} onChange={handleClick}/></td>
                </tr><span>{error.email}</span>
                <tr>
                    <td>Address:-
                    <textarea rows={3} cols={25} name="address" value={input.address}  onChange={handleClick}></textarea></td>
                </tr><span>{error.address}</span>
                <tr>
                    <td>password:-
                    <input type="password" name='password' value={input.password} onChange={handleClick}/></td>
                </tr><span>{error.password}</span>
                <tr>
                    <td>Dob:-
                    <input type="date" name='dob' value={input.dob} onChange={handleClick}/></td>
                </tr><span>{error.dob}</span>
                <tr>
                    <td>Country:-
                    <select name="city" value={input.city} onChange={handleClick}>
                        <option>--select Country--</option>
                        <option>Surat</option>
                        <option>Vapi</option>
                        <option>Bharuch</option>
                        </select></td>
                </tr><span>{error.city}</span>
                <tr>
                    <td>Gender:-
                    <input type="radio" name='gender' value={input.gender} onChange={handleClick}/>Male
                    <input type="radio" name='gender' value={input.gender} onChange={handleClick}/>FeMale</td>
                </tr><span>{error.gender}</span>
                <tr>
                    <td style={{textAlign:"center"}}>
                    <button onClick={()=>handleSubmit()}>Submit</button></td>
                </tr>
            </table>
        </center>
        </div>
    )
}
export default From;