import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CanvasComponent from "./Canvas/Canvas.jsx";

export  function App() {
  return (
      <div className="App">
        <CanvasComponent />
      </div>
  );
}

export  function FlexGrid() {
    const Box = ({ children }, img) => (
        <div style={{
            background: "",
            color: "white",
            padding: "20px",
            textAlign: "center",
            borderRadius: "5px",
            // width: img.width,
            // height: img.height
        }}>
            {children}
        </div>
    );

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            maxWidth: "400px",
            margin: "20px auto",
            justifyContent: "center",


        }}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
        </div>
    );
}