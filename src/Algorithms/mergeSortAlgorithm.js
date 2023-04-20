const PRIMARY_COLOR = 'lightslategray';
const SECONDARY_COLOR = 'red';

export function animateMergeSort(array, duration) {
    const animations = getMergeSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * duration);     

        }
        else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * duration);
        
        }  
    } 
    return animations.length * duration;
}

function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortAl(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}


function mergeSortAl(array, start, end, helperArray, animatedArray) {
    if (start === end) return;
    const midIndex = Math.floor((start + end) / 2);
    mergeSortAl(helperArray, start, midIndex, array, animatedArray);
    mergeSortAl(helperArray, midIndex + 1, end, array, animatedArray);
    merge(array, start, midIndex, end, helperArray, animatedArray);
}

function merge(array, start, midIndex, end, helperArray, animatedArray) {
    let k = start;
    let i = start;
    let j = midIndex + 1;
    
    while(i <= midIndex && j <= end){
        animatedArray.push([i,j]);
        animatedArray.push([i,j]);

        if(helperArray[i] <= helperArray[j]){
            animatedArray.push([k,helperArray[i]]);
            array[k++] = helperArray[i++];
        }
        else{
            animatedArray.push([k, helperArray[j]]);
            array[k++] = helperArray[j++];
        }
    }

    while(i <= midIndex){
        animatedArray.push([i,i]);
        animatedArray.push([i,i]);

        animatedArray.push([k, helperArray[i]]);
        array[k++] = helperArray[i++];
    }

    while(j <= end){
        animatedArray.push([j,j]);
        animatedArray.push([j,j]);

        animatedArray.push([k, helperArray[j]]);
        array[k++] = helperArray[j++];
    }
}