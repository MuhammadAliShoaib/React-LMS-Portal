import { Box, Grid } from "@mui/material";
import SMInput from "../components/SMinput";
import { useState } from "react";
import SMButton from "../components/SMButton";
import {userSignUp} from "../config/firebasemethods";

function SignUp() {
    const [model,setModel] = useState({});
 

    let enter = (obj)=>{    
        userSignUp(obj)
        .then(()=>{
            console.log("Signed Up successfully")
        }).catch(()=>{
            console.log("Error faced")
        })
    }

    return (
        
            <Box className="vh-100 d-flex align-items-center">
                <Grid container >
                    <Grid item md={4}></Grid>
                    <Grid item md={4} >
                        <Box className="border border-dark d-flex flex-column p-4 align-items-center">
                            <h1>Sign Up</h1>
                            <SMInput className="w-50" label="Enter email" type="email" onChange={(e) => { setModel({ ...model, email : e.target.value}) }} />
                            <SMInput className="w-50" label="Enter password" type="password" onChange={(e) => { setModel({ ...model, password : e.target.value}) }} />
                            <SMButton label="Sign Up" className="mt-3" onClick={()=>{enter(model)}} />
                        </Box>
                    </Grid>
                    <Grid item md={4}></Grid>

                </Grid>
            </Box>
    
    )
}

export default SignUp; 