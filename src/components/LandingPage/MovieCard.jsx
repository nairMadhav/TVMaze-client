import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
// import '../../stylesheets/LandingPage/ProductCard.css'

const MovieCard = ({image,Movie,rating,genre,link}) => {
    return (
        <div>
            <Link to={"/summary/"+link}>
            <Card sx={{ minWidth:'200px', maxWidth: '230px', maxHeight:'382px'}} 
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
                    alt={Movie}
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
                            <Typography style={{fontSize:'23px', justifySelf:'flex', fontWeight:800}}>
                            {Movie}
                            </Typography>
                            </span>
                        </div>
                        {/* <Typography  fontSize="12px" fontWeight="800" component="div">
                                {name.slice(0,20)}
                        </Typography> */}
                        <Typography fontSize="12px">
                            {genre}
                        </Typography>
                    </div>
                </CardActions>
            </Card>
            </Link>
        </div>
    )
}

export default MovieCard