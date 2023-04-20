import React from 'react';
import './Butt.css';

const Buttons = ({onGenerateNewArray, onMergeSort, onQuickSort, onHeapSort, onBubbleSort, onUpdateRange, val, isRunning}) =>{
       
    return(
        <div>
            <div id="buttonContainer" >

            <button className="create-new-array-botton" disabled = {isRunning ? isRunning: null} onClick={onGenerateNewArray}>Generate New Array</button>

            <input type="range" min="4" max="200" step="1" value={val} disabled = {isRunning ? isRunning: null} onChange={onUpdateRange} className="slider" id="mySlider"></input>

            <button className="mergeSortButton" disabled = {isRunning ? isRunning: null} onClick={onMergeSort} >Merge Sort</button> 

            <button className="quickSortButton" disabled = {isRunning ? isRunning: null} onClick={onQuickSort} >Quick Sort</button>

            <button className="heapSortButton" disabled = {isRunning ? isRunning: null} onClick={onHeapSort}>Heap Sort</button>

            <button className="bubbleSortButton" disabled = {isRunning ? isRunning: null} onClick={onBubbleSort}>Bubble Sort</button>
                
            </div>
        </div>
    );
} 

export default Buttons