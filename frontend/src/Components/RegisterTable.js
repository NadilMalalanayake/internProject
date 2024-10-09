import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  styled
} from "@mui/material";
import  { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child StyledTableCell, &:last-child th": {
    border: 0,
  },
}));



const RegisterTable = ({ students }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Date Of Birth</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Telephone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{student.fullname}</StyledTableCell>
              <StyledTableCell align="right">{student.dateofbirth}</StyledTableCell>
              <StyledTableCell align="right">{student.email}</StyledTableCell>
              <StyledTableCell align="right">{student.telephone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
  );
};

export default RegisterTable;











 // <TableContainer component={Paper}>
    //   <Table
    //     sx={{ minWidth: 650, minHeight: 300 }}
    //     size="small"
    //     aria-label="a dense table"
    //   >
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Name</TableCell>
    //         <TableCell>Date of Birth</TableCell>
    //         <TableCell>Email</TableCell>
    //         <TableCell>Telephone</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {students.map((student, index) => (
    //         <TableRow
    //           key={index}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell>{student.fullname}</TableCell>
    //           <TableCell>{student.dateofbirth}</TableCell>
    //           <TableCell>{student.email}</TableCell>
    //           <TableCell>{student.telephone}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
