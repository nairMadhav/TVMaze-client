import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import MovieView from './MovieView'
import { Route, Switch } from 'react-router-dom'
const LandingPage = () => {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>setmovies(res.data))
    },[])
    // },[movies])
    
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <MovieView movies={movies}/>
                </Route>
            </Switch>
            
            
        </div>
    )
}

export default LandingPage
