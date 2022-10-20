import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './dataTable.scss'

const DataTable = () => {


  function createData(yapilan, tarih, dis, notlar) {
    return { yapilan, tarih, dis, notlar };
  }
  
  const rows = [
    createData('Dolgu', '01.02.2022', 'Alt-10', 'Bilgi Notu'),
    createData('Dolgu', '01.02.2022', 'Alt-10', 'Bilgi Notu'),
    createData('Dolgu', '01.02.2022', 'Alt-10', 'Bilgi Notu'),
    createData('Dolgu', '01.02.2022', 'Alt-10', 'Bilgi Notu'),
    createData('Dolgu', '01.02.2022', 'Alt-10', 'Bilgi Notu'),
    createData('Dolgu', '01.02.2022', 'Alt-10', 'Bilgi Notu'),
    createData('Dolgu', '01.02.2022', 'Alt-10', 'Bilgi Notu'),

  ];

  return (
    <div className="container-table" >
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell className='headcell'>Yapılan İşlem</TableCell>
            <TableCell className='headcell' >Tarih</TableCell>
            <TableCell className='headcell'>Diş</TableCell>
            <TableCell className='headcell' >Notlar</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.yapilan}
     
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color:'#5616f5',fontSize:'16px'}}>
                {row.yapilan}
              </TableCell>
              <TableCell  sx={{color:'#5616f5',fontSize:'16px'}}>{row.tarih}</TableCell>
              <TableCell sx={{color:'#5616f5',fontSize:'16px'}} >{row.dis}</TableCell>
              <TableCell  sx={{color:'#5616f5',fontSize:'16px'}}>{row.notlar}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
    </div>
  )
}

export default DataTable
