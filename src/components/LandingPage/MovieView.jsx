import React from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import MovieCard from './MovieCard'
import SectionHeader from './SectionHeader'

const MovieView = ({movies}) => {
    movies.map(movie=>console.log(movie.show.name))
    return (
        <div>
            <SectionHeader title="Top Shows" link="/"/>
            <ScrollMenu>
                {movies.map(movie=>
                    <MovieCard 
                    image={movie.show.image.original}
                    Movie={movie.show.name}
                    rating={movie.show.rating.average}
                    genre={movie.show.genres[0]}
                    link={movie.show.id}/>
                    )}
                
            </ScrollMenu>
            {/*
                Maybe this section could be simplifies into a genre component in the future
            */}
            <SectionHeader title="Comedies" link="/"/>
            <ScrollMenu>
            {movies.filter(movies=>movies.show.genres[0]==='Comedy').map(movie=>
                    <MovieCard 
                    image={movie.show.image.original}
                    Movie={movie.show.name}
                    rating={movie.show.rating.average}
                    genre={movie.show.genres[0]}
                    link={movie.show.id}/>
                    )} 
            </ScrollMenu>

            <SectionHeader title="Dramas" link="#"/>
            <ScrollMenu>
            {movies.filter(movies=>movies.show.genres[0]==='Drama').map(movie=>
                    <MovieCard 
                    image={movie.show.image.original}
                    Movie={movie.show.name}
                    rating={movie.show.rating.average}
                    genre={movie.show.genres[0]}/>
                    )} 
            </ScrollMenu>

            <SectionHeader title="Sports" link="#"/>
            <ScrollMenu>
            {movies.filter(movies=>movies.show.genres[0]==='Sports').map(movie=>
                    <MovieCard 
                    image={movie.show.image.original}
                    Movie={movie.show.name}
                    rating={movie.show.rating.average}
                    genre={movie.show.genres[0]}/>
                    )} 
            </ScrollMenu>

        </div>
    )
}

export default MovieView
