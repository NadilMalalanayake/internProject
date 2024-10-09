import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Divider,
  Grid2,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListStudent = () => {

  const [students, setStudents] = useState([]);
  const [filterText, setfilterText] = useState("");

  const navigate = useNavigate();

  const getStudents = async () => {
    try {
      const result = await axios.get("https://localhost:7261/api/StudentApi");
      setStudents(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleSearchChange = () => {
    if (!filterText) {
      getStudents();
      return;
    }

    const filteredStudents = students.filter(
      (student) =>
        student.fullname.toLowerCase().includes(filterText.toLowerCase()) ||
        student.telephone.includes(filterText)
    );

    setStudents(filteredStudents);

    /*
    try {
      const result = await axios.get(
        `https://localhost:7261/api/StudentApi/${filterText}`
      );
      setStudents([result.data]); // Ensure data is wrapped in an array
    } catch (error) {
      alert("Student not found");
      setStudents([]);
    }
    */
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this User?"
    );
    if (isConfirmed) {
      try {
        await axios.delete(`https://localhost:7261/api/StudentApi/${id}`);
        getStudents(); // Refresh list after deletion
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);

  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{ bgcolor: "#f0f0f0", borderRadius: 5, paddingBottom: "30px"  , marginTop:"100px"}}
        >
          <Box sx={{ paddingLeft: "25px", paddingY: "10px"}}>
            <Typography>Student List</Typography>
          </Box>
          <Divider
            sx={{ borderBottomWidth: "2px", borderBlockColor: "gray" }}
          />
          <Box
            sx={{
              bgcolor: "white",
              height: "auto",
              margin: "50px",
              borderRadius: 5,
              marginY: "30px",
            }}
          >
            <Grid2
              container
              spacing={2}
              maxWidth="75%"
              alignItems="center"
              sx={{ marginX: "auto" }}
            >
              <Grid2 item size={4} marginTop={5} marginBottom={5}  >
                <TextField
                  id="outlined-search"
                  variant="outlined"
                  onChange={(e) => setfilterText(e.target.value)}
                  placeholder="Enter name or telephone"
                />
              </Grid2>

              <Grid2 item size={5} marginTop={5} marginBottom={5} >
                <Button variant="contained" onClick={handleSearchChange}>
                  Search
                </Button>
              </Grid2>

              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650, minHeight: 300 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Date of Birth</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Telephone</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.length > 0 ? (
                      students.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>{item.fullname}</TableCell>
                          <TableCell>{item.dateofbirth.slice(0,10)}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.telephone}</TableCell>
                          <TableCell>
                            <Button 
                              sx ={{marginRight : "10px"}}
                              variant="contained"
                              color="success"
                              onClick={() => handleUpdate(item.id)}
                            >
                              Update
                            </Button>
                                
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (

                      <TableRow>
                        <TableCell colSpan={5} align="center">
                          No students found
                        </TableCell>
                      </TableRow>

                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <br />

            </Grid2>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ListStudent;