import React, { Component } from 'react';
import styled from 'styled-components'  


class SlitAnimation extends Component {


  render() {
    const {
      images, // required
      imageWidth = 500,
      imageHeight = 500,
      coverWidth = imageWidth,
      coverHeight = imageHeight,
      coverColor = '#000',
      coverSlitWidth = 1,
      startAt = 0,
      endAt = coverWidth,
      duration = 50,
    } = this.props

    if (!images || images.length === 0) {
      throw 'You need to set imagesr.'
    }
    const frameCount = images.length


    const imageDoms = range(frameCount).map(frameIndex => {
      const freamePolygonPoints = craeteFramePolygonPoints(
        coverSlitWidth,
        imageWidth,
        imageHeight,
        frameCount,
        frameIndex
      )


      const FrameImage = styled.img`
        position: absolute;
        width: ${imageWidth}px;
        height: ${imageHeight}px;
        display: block;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        -webkit-clip-path: polygon(${freamePolygonPoints});
        clip-path: polygon(${freamePolygonPoints});
      `

      return <FrameImage key={frameIndex} src={images[frameIndex]} />
    })


    const coverPolygonPoints = craeteCoverPolygonPoints(
      coverSlitWidth,
      coverWidth,
      coverHeight,
      frameCount,
    )
  
    const Container = styled.div`
      position: relative;
      width: ${coverWidth}px;
      height: ${coverHeight}px;
      overflow: hidden;

      &:after {
        top: 0;
        left: ${startAt}px;
        position: absolute;
        content: '';
        display: block;
        width: ${coverWidth}px;
        height: ${coverHeight}px;
        background: ${coverColor};
        -webkit-clip-path: polygon(${coverPolygonPoints});
        clip-path: polygon(${coverPolygonPoints});
      }

      &:hover:after {
        left: ${endAt}px;
        transition: left ${duration}s linear;
      }
    `
  
    return <Container>{imageDoms}</Container>
  }
}


function craeteFramePolygonPoints(
  coverSlitWidth,
  coverWidth,
  coverHeight,
  frameCount,
  frameIndex
) {
  const unitWidth = coverSlitWidth * frameCount
  const unitCount = Math.floor(coverWidth / unitWidth)

  return range(unitCount)
    .map(i => 
      range(frameCount, 1)
        .filter(i => i % frameCount === frameIndex  % frameCount)
        .map(countInUnit => {
          const offset = i * unitWidth
          const offsetInUnit = (countInUnit - 1) * coverSlitWidth
          const xStart =  offset + offsetInUnit
          const xEnd = xStart + coverSlitWidth
          const yStart = 0
          const yEnd = coverHeight

          return `${xStart}px ${yStart}px,` + 
            `${xStart}px ${yEnd}px,` +
            `${xEnd}px ${yEnd}px,` +
            `${xEnd}px ${yStart}px`
        })
        .join(`,`)
    )
    .join(`,`)
}


function craeteCoverPolygonPoints(
  coverSlitWidth,
  coverWidth,
  coverHeight,
  frameCount
) {
  const unitWidth = coverSlitWidth * frameCount
  const unitCount = Math.floor(coverWidth / unitWidth)
  // if frameCount is 6, like this.
  // |----- |------ |----- |
  return range(unitCount).map(i => 
    range(frameCount, 1)
      .filter(countInUnit => countInUnit === 1)
      .map(countInUnit => {
        const offset = i * unitWidth
        const offsetInUnit = 0
        const xStart =  offset + offsetInUnit
        const xEnd = xStart + coverSlitWidth * (frameCount - 1)
        const yStart = 0
        const yEnd = coverHeight

        return `${xStart}px ${yStart}px,` + 
          `${xStart}px ${yEnd}px,` +
          `${xEnd}px ${yEnd}px,` +
          `${xEnd}px ${yStart}px`
      })
      .join(`,`)
  )
  .join(`,`)
}



function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}


export default SlitAnimation;
