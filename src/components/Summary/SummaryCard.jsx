import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';
import { useState } from 'react';
import BookingForm from './BookingForm';
// import '../../stylesheets/LandingPage/ProductCard.css'

const SummaryCard = ({image,show,rating,genre,summary}) => {
    const [shown,setShown]=useState(false)
    
    const showForm=()=>{
        return(
            <BookingForm/>
        )
    }
    return (
        <div style={{
            display:'flex'
        }}>
            <Card sx={{ minWidth:'50%', maxWidth: '630px', maxHeight:'982px'}} 
            style={{
                background:"#203341", 
                color:"white",
                borderRadius:"8px",
                border: '1px solid #203341',
                margin:'10px'
                }}>
                <CardActionArea style={{position:'relative'}}>
                    <CardMedia
                    component="img"
                    height="201px"
                    image={image}
                    alt={show}
                    />
                    {/*render rating if rating more than 0 else leave it empty 
                        this acts as an overlay on the image
                    */}
                    {rating>0?
                            <Typography style={{
                                fontSize:'22px', 
                                background:'green', 
                                borderRadius:'6px',
                                padding:'5px',
                                position:'absolute',
                                top:'2px',
                                right:'2px',
                                fontWeight:'800'}}>
                                {rating}
                            </Typography>
                            :
                            <Typography>
                             
                            </Typography>
                            }

                </CardActionArea>
                <CardActions>
                    <div className='Content'>
                        <div className="prices">
                            <span>
                            <Typography style={{fontSize:'33px', justifySelf:'flex', fontWeight:800}}>
                            {show}
                            </Typography>
                            </span>
                        </div>
                        <Typography fontSize="22px">
                            {genre}
                        </Typography>
                        <Typography>
                        <Rating name="customized-10" defaultValue={parseInt(rating)} max={10} />
                        </Typography>
                        <div className="Container" dangerouslySetInnerHTML={{__html: summary}}></div>
                        <Button style={{
                            backgroundColor:'grey',
                            color:'white'
                        }} onClick={()=>{
                            setShown(!shown)
                            console.log(shown)
                        }}>
                            Book now
                        </Button>
                    </div>
                </CardActions>
            </Card>
            
            {shown&&showForm()}
            
            

        </div>
    )
}

export default SummaryCard