import React from 'react'
import SortingVisualizer from './components/SortingVisualizer'

export default function App() {
  return (
    <div>
     <h1 style={{
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '2.5rem',
        color: '#333',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Sorting Visualizer
      </h1>
      <SortingVisualizer/>
    </div>
  )
}
