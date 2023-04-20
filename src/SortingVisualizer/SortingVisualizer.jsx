import React from "react";
import './SortingVisualizer.css'
import ArrayBar from "../Reducers/array/ArrayBar";
import Buttons from "../Reducers/buttons/buttons";
import { animateMergeSort } from "../Algorithms/mergeSortAlgorithm";
import { animateQuickSort } from "../Algorithms/quicksortAlgorithm";
import { animateHeapSort } from "../Algorithms/heapSortAlgorithm";
import { animateBubbleSort } from "../Algorithms/bubbleSortAlgorithm";

const ANIMATION_SPEED_MULTIPLYER = 2.42;
const PRIMARY_COLOR = 'lightslategray';

class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [],
            val: 100,
            initialState: false,
            duration: ANIMATION_SPEED_MULTIPLYER,
            time: 0
        };

        this.resetArray = this.resetArray.bind(this);
        this.updateRange = this.updateRange.bind(this);
        this.doSort = this.doSort.bind(this);
        this.setRunning = this.setRunning.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.heapSort = this.heapSort.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
    }

    componentDidMount() {
        this.resetArray();
    }

    updateRange(event) {
        let newValue = 204 - event.target.value;
        newValue = ((newValue - 4 )* 0.02) +.5
        this.setState({
            val: event.target.value,
            duration: newValue
        }, 
        () => { this.resetArray()
        })
    }

    resetArray() {
        const array= [];
        for (let i = 0; i < this.state.val ;i++){
            array.push( randomInt(5, 200))
        }
        this.setState({
            array
        });
    }

    bubbleSort() {
        let dur = 6;
        let mu = ((204 - this.state.val) - 4) * .70 * this.state.duration;
        dur += mu;

        return animateBubbleSort(this.state.array, dur);
    }

    heapSort() {
        let dur = 6;
        let mu = ((204 - this.state.val) - 4) * .18 * this.state.duration;
        dur += mu;

        return animateHeapSort(this.state.array, dur);
    }


    quickSort() {
        let dur = 6 + ((204 - this.state.val) - 4) * .18 * this.state.duration;

        return animateQuickSort(this.state.array, dur);
    }

    mergeSort() {
        let dur = 6 + ((204 - this.state.val) - 4) * .18 * this.state.duration;

        return animateMergeSort(this.state.array, dur);
    }
    
    doSort(sortingMethod) {
        this.setRunning();

        const sortingFunctions = {
            mergeSortButton: () => {return this.mergeSort();},
            quickSortButton: () => {return this.quickSort();},
            heapSortButton: () => {return this.heapSort();},
            bubbleSortButton: () => {return this.bubbleSort();}
        };
    
        setTimeout(() => {
            const timeTaken = sortingFunctions[sortingMethod]();
            console.log(timeTaken, "time returned");
            setTimeout(() => {
                this.setRunning()
                console.log(this.state.array);
            }, timeTaken + 150);
        }, 0);  
    }

    setRunning() {
        this.setState((prevState) => ({
            initialState: !prevState.initialState
        }));
    }
    
    render() {
        const {array, val, initialState} = this.state;
        
        const numWidth = Math.floor(window.innerWidth / (array.length * 3));
        const widths = `${numWidth}px`;

        return (
            <div id="bodyContainer">
                
                <Buttons
                    onGenerateNewArray={() =>(this.resetArray())}
                    onMergeSort={() =>(this.doSort("mergeSortButton"))}
                    onQuickSort={() =>(this.doSort("quickSortButton"))}
                    onHeapSort={() =>(this.doSort("heapSortButton"))}
                    onBubbleSort={() =>(this.doSort("bubbleSortButton"))}
                    onUpdateRange={(arrSize) =>(this.updateRange(arrSize))}
                    val = {val}
                    isRunning = {initialState}
                />

                <div className="array-Con">
                    <div className="arrays-container">
                        {array.map((value, index) => (
                            <ArrayBar key={index} height={value} width={widths} color={PRIMARY_COLOR}/>
                        ))}
                    </div>
                </div>
                
            </div>
         );
     }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer