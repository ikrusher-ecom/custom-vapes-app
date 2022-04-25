/*
 * @Author: Jinqi Li
 * @Date: 2022-04-20 02:10:57
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-24 17:21:50
 * @FilePath: /custom-vapes-app/components/ResizableContentMobile.jsx
 */
import React, { Fragment, useRef, useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable-touch-v2';

const ResizableContentMobile = props => {
  const [width, setWidth] = useState(props.width)
  const [height, setHeight] = useState(props.height)
  const [top, setTop] = useState(props.top)
  const [left, setLeft] = useState(props.left)
  const [rotateAngle, setRotateAngle] = useState(props.rotateAngle)

  const contentStyle = {
    top,
    left,
    width,
    height,
    position: 'absolute',
    transform: `rotate(${rotateAngle}deg)`
  }

  const handleResize = (style, isShiftKey, type) => {
    console.log("resize" + top + left + width + height + type)
    const { top, left, width, height } = style
    setWidth(Math.round(width))
    setHeight(Math.round(height))
    setTop(Math.round(top))
    setLeft(Math.round(left))
  }

  const handleRotate = rotateAngle => {
    console.log("rotate" + rotateAngle)
    setRotateAngle(rotateAngle)
  }

  const handleDrag = (deltaX, deltaY) => {
    console.log("drag")
    setLeft(left + deltaX)
    setTop(top + deltaY)
  }

  const resizeRef = useRef(null);


  return (
    <Fragment>
      <div style={contentStyle}>{props.children}</div>

      <ResizableRect
        ref={resizeRef}
        top={top}
        rotatable
        left={left}
        aspectRatio
        minWidth={10}
        width={width}
        minHeight={10}
        height={height}
        onTouchStart={handleDrag}
        // onDrag={handleDrag}
        onRotate={handleRotate}
        onResize={handleResize}
        zoomable='n, w, s, e, nw, ne, se, sw'
        rotateAngle={rotateAngle}
        color="#eb5648"
      />
    </Fragment>
  )
}

export default ResizableContentMobile
