import React from 'react';
import styled from 'styled-components'

import react1 from './images/react/1.png'
import react2 from './images/react/2.png'
import react3 from './images/react/3.png'
import react4 from './images/react/4.png'
import react5 from './images/react/5.png'
import react6 from './images/react/6.png'
import parrot1 from './images/parrot/1.png'
import parrot2 from './images/parrot/2.png'
import parrot3 from './images/parrot/3.png'
import parrot4 from './images/parrot/4.png'
import parrot5 from './images/parrot/5.png'
import parrot6 from './images/parrot/6.png'
import parrot7 from './images/parrot/7.png'
import parrot8 from './images/parrot/8.png'
import parrot9 from './images/parrot/9.png'
import parrot10 from './images/parrot/10.png'
import gopher1 from './images/gopher/1.png'
import gopher2 from './images/gopher/2.png'
import gopher3 from './images/gopher/3.png'
import gopher4 from './images/gopher/4.png'
import gopher5 from './images/gopher/5.png'
import gopher6 from './images/gopher/6.png'
import gopher7 from './images/gopher/7.png'
import gopher8 from './images/gopher/8.png'
import gopher9 from './images/gopher/9.png'
import image1 from './images/square/1.png'
import image2 from './images/square/2.png'
import image3 from './images/square/3.png'
import image4 from './images/square/4.png'
import ang1 from './images/angular/1.png'
import ang2 from './images/angular/2.png'
import ang3 from './images/angular/3.png'
import ang4 from './images/angular/4.png'
import ang5 from './images/angular/5.png'
import ang6 from './images/angular/6.png'
import ang7 from './images/angular/7.png'
import ang8 from './images/angular/8.png'
import ang9 from './images/angular/9.png'
import ang10 from './images/angular/10.png'
import ang11 from './images/angular/11.png'
import ang12 from './images/angular/12.png'
import man1 from './images/man/1.png'
import man2 from './images/man/2.png'
import man3 from './images/man/3.png'
import man4 from './images/man/4.png'


import SlitAnimation from '../../src'

const App = () => {

  const Container = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `

  const AppTitle = styled.h1`
    text-align: center;
    color: gray;
    font-size: 4rem;
  `

  const AnimationContainer = styled.div`
    width: 800px;
    min-height: 500px;
    overflow: hidden;
    box-shadow: 0 0 1px 1px gray;
    margin: 12px 12px 64px 12px;
    border-radius: 4px;
    &:hover {
      box-shadow: 0 0 10px 2px #aae5f3;
    }
  `


  const manAnimation = <SlitAnimation {...{
    slitWidth: 2,
    imageWidth: 800,
    imageHeight: 700,
    images: [
      man1,
      man2,
      man3,
      man4
    ],
    duration: 100,
    coverColor: '#aaa'
  }} />



  const reactAnimation = <SlitAnimation {...{
    imageWidth: 800,
    imageHeight: 800,
    images: [
      react1,
      react2,
      react3,
      react4,
      react5,
      react6
    ],
    coverColor: '#222'
  }} />


  const parrotAnimation = <SlitAnimation {...{
    imageWidth: 800,
    imageHeight: 800,
    images: [
      parrot1,
      parrot2,
      parrot3,
      parrot4,
      parrot5,
      parrot6,
      parrot7,
      parrot8,
      parrot9,
      parrot10,
    ],
    duration: 40,
    coverColor: '#444'
  }} />


  const gopherAnimation = <SlitAnimation {...{
    imageWidth: 800,
    imageHeight: 800,
    images: [
      gopher1,
      gopher2,
      gopher3,
      gopher4,
      gopher5,
      gopher6,
      gopher7,
      gopher8,
      gopher9,
    ],
    duration: 80,
    coverColor: '#333'
  }} />



  const angularAnimation = <SlitAnimation {...{
    imageWidth: 800,
    imageHeight: 800,
    images: [
      ang1,
      ang2,
      ang3,
      ang4,
      ang5,
      ang6,
      ang7,
      ang8,
      ang9,
      ang10,
      ang11,
      ang12,
    ],
    duration: 100,
    coverColor: '#222'
  }} />



  const sampleAnimation = <SlitAnimation {...{
    imageWidth: 800,
    imageHeight: 800,
    images: [
      image1,
      image2,
      image3,
      image4,
    ],
    startAt: 0,
    endAt: 200,
    duration: 100,
    coverColor: '#000'
  }} />

  const ribbont =
    <a href="https://github.com/Takumon/react-slit-animation">
      <img
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          border: 0
        }}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
        alt="Fork me on GitHub" />
    </a>;



  return (
    <Container>
      {ribbont}
      <AppTitle>React Slit Animation</AppTitle>
      <AnimationContainer>{reactAnimation}</AnimationContainer>
      <AnimationContainer>{parrotAnimation}</AnimationContainer>
      <AnimationContainer>{gopherAnimation}</AnimationContainer>
      <AnimationContainer>{sampleAnimation}</AnimationContainer>
      <AnimationContainer>{angularAnimation}</AnimationContainer>
      <AnimationContainer>{manAnimation}</AnimationContainer>
    </Container>
  )
}
export default App;
