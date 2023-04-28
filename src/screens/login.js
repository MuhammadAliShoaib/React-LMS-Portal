import { Box, Grid } from "@mui/material";
import SMInput from "../components/SMinput";
import { useState } from "react";
import SMButton from "../components/SMButton";
import {userLogIn, userSignOut} from "../config/firebasemethods";

function Login() {

   
    const [model,setModel] = useState({});
 

    let enter = (obj)=>{
        userLogIn(obj).then((res)=>{
            console.log("Logged In successfully")
        }).catch((err)=>{
            console.log("Error faced")
        })
    }

    return (
        
            <Box className="vh-100 d-flex align-items-center">
                <Grid container >
                    <Grid item md={4}></Grid>
                    <Grid item md={4} >
                        <Box className="border border-dark d-flex flex-column p-4 align-items-center">
                            <h1>Login</h1>
                            <SMInput className="w-50" label="Enter email" type="email" onChange={(e) => { setModel({ ...model, email : e.target.value}) }} />
                            <SMInput className="w-50" label="Enter password" type="password" onChange={(e) => { setModel({ ...model, password : e.target.value}) }} />
                            <SMButton label="Login" className="mt-3" onClick={()=>{enter(model)}} />
                            <SMButton label="SignOut" className="mt-3" onClick={()=>{userSignOut()}} />
                        </Box>
                    </Grid>
                    <Grid item md={4}></Grid>

                </Grid>
            </Box>
    
    )
}

export default Login; 