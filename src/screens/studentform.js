import { Box, Grid, InputLabel, TextField } from "@mui/material";
import SMInput from "../components/SMinput";
import { Form, FormControl } from "react-bootstrap";
import SMSelect from "../components/SMSelect";
import { useState } from "react";

function StudentForm() {

    const [qualification, setQualification] = useState();


    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');
    const [contact, setContact] = useState();
    const [cnic, setCnic] = useState();

    let saveQuali = (model) => {
        setQualification(model)
        console.log(model)
        console.log(qualification)
    }

    const options = [
        {
            label: "O-Levels",
            value: "olevels",
            setField: (e) => { saveQuali(e) }
        },
        {
            label: "Matric",
            value: "Matric",
            setField: (e) => { saveQuali(e) }
        },
        {
            label: "Intermediate",
            value: "Intermediate",
            setField: (e) => { saveQuali(e) }
        }
    ]

    return (
        <Box >
            <Grid container >
                <Grid item md={2}></Grid>
                <Grid item md={8} className="m-2 ">
                    <Box className="border border-dark d-flex justify-content-between text-center " component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <Grid container className="d-flex justify-content-between " >

                            <Grid item md={3} className="d-flex justify-content-between flex-column">

                                <div className="m-2 d-flex flex-column text-start">
                                    <label id="studentName">Student Name</label>
                                    <input onChange={(e) => { setStudentName(e.target.value) }} className=""
                                        value={studentName} type="text" placeholder="Student Name" />
                                </div>

                                <div className="m-2 d-flex flex-column text-start">
                                    <label id="email">Email</label>
                                    <input id="email" onChange={(e) => { setEmail(e.target.value) }}
                                        value={email} type="text" placeholder="Email" />
                                </div>






                            </Grid>
                            <Grid item md={3} className="d-flex justify-content-between flex-column">
                                <div className="m-2 d-flex flex-column text-start">
                                    <label id="password">Password</label>
                                    <input onChange={(e) => { setPassword(e.target.value) }} className=""
                                        value={password} type="password" placeholder="Password" />
                                </div>

                                <div className="m-2 d-flex flex-column text-start">
                                    <label id="date">Date of birth</label>
                                    <input onChange={(e) => { setDate(e.target.value) }} className=""
                                        value={date} type="date" />
                                </div>
                            </Grid>
                            <Grid item md={3} className="d-flex justify-content-between flex-column">
                                <div className="m-2 d-flex flex-column text-start">
                                    <label id="contact">Contact</label>
                                    <input onChange={(e) => { setContact(e.target.value) }} className=""
                                        value={contact} type="number" placeholder="Contact" />
                                </div>

                                <div className="m-2 d-flex flex-column text-start">
                                    <label id="cnic">CNIC</label>
                                    <input onChange={(e) => { setCnic(e.target.value) }} className=""
                                        value={cnic} type="number" placeholder="CNIC"/>
                                </div>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid >
                <Grid item md={2}></Grid>
            </Grid >
        </Box >
    )
}

export default StudentForm;