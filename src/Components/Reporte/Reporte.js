import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import Exel from '@mui/icons-material/Description';

import { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: ' #CFFFF3',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ReporteGeneral() {
   
    const [persona, setPersona] = useState([])
    useEffect(() => {
      let heroku = "https://form-usac.herokuapp.com"
      //let local = "http://localhost:3200"
      let funcion = "/api/SeeForms"
      axios
        .get(heroku+funcion)
        .then((res) => {
          setPersona(res.data)
        })
        .then()
        .catch((error) => {
          console.log(error.response.data); 
        });    
    }, [])

      

      
  return (
  <>

    {/* <Stack direction="row" spacing={2} sx={{padding: "0px 0px 30px 0px"}} ></Stack>
      <Button variant="contained" color="success" startIcon={<Exel />}>ReporteGeneral.xls</Button>
      <Button variant="contained" color="error" startIcon={<PictureAsPdfIcon />} >ReporteGeneral.pdf</Button> */}
    

  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre completo</StyledTableCell>
            <StyledTableCell align="right">Carnet</StyledTableCell>
            <StyledTableCell align="right">Direccion</StyledTableCell>
            <StyledTableCell align="right">Genero</StyledTableCell>
            <StyledTableCell align="right">Fecha de nacimiento</StyledTableCell>
            <StyledTableCell align="right">Carrera</StyledTableCell>
            <StyledTableCell align="right">Telefono</StyledTableCell>
            <StyledTableCell align="right">Genero de poesia</StyledTableCell>
            <StyledTableCell align="right">Fecha de inscripcion</StyledTableCell>
            <StyledTableCell align="right">Edad</StyledTableCell>
            <StyledTableCell align="right">Fecha de declamacion</StyledTableCell>
          </TableRow>
        </TableHead>
         <TableBody>

          {persona.map((row, index) => (
            <StyledTableRow key={index}>

              <StyledTableCell component="th" scope="row"> {row.nombre}</StyledTableCell>
              <StyledTableCell align="right">{row.carnet}</StyledTableCell>
              <StyledTableCell align="right">{row.direccion}</StyledTableCell>
              <StyledTableCell align="right">{row.genero}</StyledTableCell>
              <StyledTableCell align="right">{row.fechaNacimiento}</StyledTableCell>
              <StyledTableCell align="right">{row.carrera}</StyledTableCell>
              <StyledTableCell align="right">{row.telefono}</StyledTableCell>
              <StyledTableCell align="right">{row.generoLiterario}</StyledTableCell>
              <StyledTableCell align="right">{row.fechaInscripcion}</StyledTableCell>
              <StyledTableCell align="right">{row.edad}</StyledTableCell>
              <StyledTableCell align="right">{row.fechaDeclamacion}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
  </>
    
  );
}

