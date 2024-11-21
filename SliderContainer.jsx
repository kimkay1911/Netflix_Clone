import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start, end) => {
        return movies.slice(start, end)
    }
  return (
    <SliderWrapper>
        <MovieSlider movies={getMoviesBetween(0, 10)} title={'Only on Netflix'}/>
        <MovieSlider movies={getMoviesBetween(10, 20)} title={'Trending Now'}/>
        <MovieSlider movies={getMoviesBetween(20, 30)} title={'Trending in UK'}/>
        <MovieSlider movies={getMoviesBetween(30, 40)} title={'Blockbusters'}/>
        <MovieSlider movies={getMoviesBetween(40, 50)} title={'New Releases'}/>
        <MovieSlider movies={getMoviesBetween(50, 60)} title={'Oscar Winners'}/>
        <MovieSlider movies={getMoviesBetween(60, 70)} title={'Top Rated'}/>
        <MovieSlider movies={getMoviesBetween(70, 80)} title={'Documentaries'}/>
    </SliderWrapper>
  )
}
const SliderWrapper = styled.div`

`
export default SliderContainer