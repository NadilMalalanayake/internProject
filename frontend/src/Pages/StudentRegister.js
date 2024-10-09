import { CssBaseline, Container, Box, Typography, Divider, TextField, RadioGroup, Radio, FormControlLabel, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RegisterTable from "../Components/RegisterTable";
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentRegister = () => {
const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: '',
        address: '',
        dateofbirth: '',
        gender: '',
        email: '',
        telephone: ''
    });

    const [students, setStudents] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudents([...students, formData]);  

        setFormData({
            fullname: '',
            address: '',
            dateofbirth: '',
            gender: '',
            email: '',
            telephone: ''
        });
    };

    const handleSubmitAll = async (e) => {
        e.preventDefault();

        const requests = students.map((item) => {
            const body = {
                FullName: item.fullname,
                Address: item.address,
                DateOfBirth: item.dateofbirth,
                Email: item.email,
                Gender: item.gender,
                Telephone: item.telephone
            };
            return axios.post("https://localhost:7261/api/StudentApi", body);
        });


        try {
            await Promise.all(requests);
            alert("All Data Submited !!!");
            navigate("/list")

        } catch (error) {
            console.error("Error submitting students:", error);
        }

        setFormData({
            fullname: '',
            address: '',
            dateofbirth: '',
            gender: '',
            email: '',
            telephone: ''
        });

    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#f0f0f0', borderRadius: 5, paddingBottom: '10px', marginBottom:"50px", marginTop:"100px"}}>

                    <Box sx={{ paddingLeft:"25px", paddingY: "5px" }}>
                        <Typography>Student Registration</Typography>
                    </Box>

                    <Divider sx={{ borderBottomWidth: '2px', borderBlockColor: 'gray', marginTop : "8px" }} />
                    <Box sx={{ bgcolor: 'white', height: 'auto', margin: '50px', borderRadius: 5, marginY: '30px' }}>
                        <form onSubmit={handleSubmit}>
                            <br/>
                            <Grid container spacing={2} maxWidth="75%" alignItems="center" sx={{ marginX: 'auto' }}>
                                <Grid item size={2}>
                                    <Box>Full Name</Box>
                                </Grid>
                                <Grid item size={10}>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            id="outlined-name"
                                            variant="outlined"
                                            name="fullname"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item size={2}>
                                    <Box>Address</Box>
                                </Grid>
                                <Grid item size={10}>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            id="outlined-address"
                                            variant="outlined"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item size={2}>
                                    <Box>Date of Birth</Box>
                                </Grid>
                                <Grid item size={4}>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            id="outlined-dateofbirth"
                                            variant="outlined"
                                            type="date"
                                            name="dateofbirth"
                                            value={formData.dateofbirth}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item size={2}>
                                    <Box textAlign={'right'}>Gender</Box>
                                </Grid>
                                <Grid item size={4}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item size={2}>
                                    <Box>E-mail</Box>
                                </Grid>
                                <Grid item size={10}>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            id="outlined-email"
                                            variant="outlined"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item size={2}>
                                    <Box>Telephone</Box>
                                </Grid>
                                <Grid item size={4}>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            id="outlined-telephone"
                                            variant="outlined"
                                            type="tel"
                                            name="telephone"
                                            value={formData.telephone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item size={12}>
                                    <Box display="flex" justifyContent="flex-end">
                                        <Button type="submit" variant="contained">Add</Button>
                                    </Box>
                                </Grid>

                                <RegisterTable students={students} />
                                <br/>

                                <Grid item size={12}>
                                    <Box display="flex" justifyContent="flex-end">
                                        <Button variant="contained" onClick={handleSubmitAll}>Submit</Button>
                                    </Box>
                                </Grid>
                                <br />
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default StudentRegister;
