import React, { useEffect, useRef, useState } from 'react';
import Button from './components/Button'
import './Styles.css';

function Canvas() {
    const [isDrawing, setIsDrawing] = useState(false)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = 1000
        canvas.height = 1000
        canvas.style.width = `500px`
        canvas.style.height = `500px`

        const context = canvas.getContext("2d")
        context.scale(2, 2)
        context.fillStyle = "black"
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.lineCap = "round"
        context.strokeStyle = "white"
        context.lineWidth = 5
        contextRef.current = context
    }, [])

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return
        const { offsetX, offsetY } = nativeEvent
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        setIsDrawing(false)
        context.fillStyle = "black"
        context.fillRect(0, 0, canvas.width, canvas.height)
    }

    return (
        <div className="Vertical">
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
            <Button onClick = {clearCanvas}>Clear Canvas</Button>
        </div>
    )
}

export default Canvas