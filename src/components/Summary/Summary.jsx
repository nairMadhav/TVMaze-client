import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import Navbar from '../LandingPage/Navbar'
import SummaryCard from './SummaryCard'
const Summary = () => {
    let {id} =useParams()

    const [show, setshow] = useState([])
    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(res=>setshow([res.data]))
    },[id])
    return (
        <div>
            <Navbar/>
            {show.map(show=>
            <SummaryCard
            image={show.image.original}
            show={show.name}
            rating={show.rating.average}
            genre={show.genres[0]}
            summary={show.summary}/>
                )}
            
        </div>
    )
}

export default Summary
