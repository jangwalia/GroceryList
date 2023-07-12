import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddGrocery({handleSubmit, grocery, setGrocery}) {


  const handleChange = (e) => {
    setGrocery({id: Math.random(), title: e.target.value});
  }

  const addGrocery = (e) => {
    e.preventDefault();
    if(grocery.title) {
      handleSubmit(grocery);
      setGrocery({id: null, title: ''});

    }

  }

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField value={grocery.title} onChange={handleChange} id="outlined-basic" label="Enter Item" variant="outlined" />

    <TextField id="standard-basic" label="Search" variant="standard" />
    <Button onClick ={addGrocery} variant="contained">Add</Button>
  </Box>
  )
}

export default AddGrocery
