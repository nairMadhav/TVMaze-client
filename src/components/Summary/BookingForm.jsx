import React from 'react'
import Card from '@mui/material/Card';
import { Button,CardActions} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';

const BookingForm = () => {
    return (
        <div>
            <Card sx={{ minWidth:'300px', maxWidth: '300px', minHeight:'435px',maxHeight:'982px',padding:'8px'}} 
            style={{
                background:"#203341", 
                color:"white",
                borderRadius:"8px",
                border: '1px solid #203341',
                margin:'10px'
                }}>
                <CardActions>
                <FormControl component="fieldset">
                <TextField id="filled-success" label="Name" variant="filled"  style={{
                    background:'white',
                    marginBottom:'8px'
                }}/>
                <FormLabel component="legend" style={{color:'white'}}>Name</FormLabel>
                <FormLabel component="legend" style={{color:'white'}}>Number of seats</FormLabel>
                    <RadioGroup style={{display:'flex',flexDirection:'row', padding:'8px'}}>
                        <FormControlLabel value="female" control={<Radio />} label="1" />
                        <FormControlLabel value="male" control={<Radio />} label="2" />
                        <FormControlLabel value="other" control={<Radio />} label="3" />
                    </RadioGroup>
                    <FormLabel component="legend" style={{color:'white'}}>Timings</FormLabel>
                    <NativeSelect
                        style={{background:'white'}}
                        inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                        }}
                    >
                        <option value={'10:00'}>10:00</option>
                        <option value={'12:30'}>12:30</option>
                        <option value={'4:40'}>4:40</option>
                    </NativeSelect>
                    <Button style={{
                        marginTop:'40px',
                            backgroundColor:'grey',
                            color:'white'
                        }}>
                        Book
                    </Button>
                </FormControl>
                    
                </CardActions>
            </Card>
        </div>
    )
}

export default BookingForm
