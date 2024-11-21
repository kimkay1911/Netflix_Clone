import React from 'react'
import Card from './Card'

const MovieSlider = ({movies, title}) => {
  return (
    <div className='slider'>
        {
            movies.map((movie, index) => {
                return <Card movieData={movie} key={movie.id} index={index} />
            })
        }
    </div>
  )
}

export default MovieSlider