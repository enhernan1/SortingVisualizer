const PRIMARY_COLOR = 'lightslategray';

export function animateHeapSort(array, duration) {
    const animations = getHeapSortAnimations(array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const animationType = animations[i][0];

        switch(animationType){
            case 0:
                const barOneIdx = animations[i][1];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoIdx = animations[i][2];
                const barTwoStyle = arrayBars[barTwoIdx].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';
                    }, i * duration); 
                break;
            case 1:
                const barOneIdxs = animations[i][1];
                const barOneStyles = arrayBars[barOneIdxs].style;
                const barTwoIdxs = animations[i][2];
                const barTwoStyles = arrayBars[barTwoIdxs].style;

                setTimeout(() => {
                    barOneStyles.backgroundColor = PRIMARY_COLOR;
                    barTwoStyles.backgroundColor = PRIMARY_COLOR;
                    }, i * duration); 
                break;
            
            case 2:
                const barOneIdxt = animations[i][1];
                const barOneStylet = arrayBars[barOneIdxt].style;
                setTimeout(() => {
                    const newHeightOne =animations[i][2];
                    barOneStylet.height = `${newHeightOne}px`;
                    }, i * duration);
                break;
            case 3:
                const barOneIdxr = animations[i][1];
                const barOneStyler = arrayBars[barOneIdxr].style;
                setTimeout(() => {
                    const newHeightOne =animations[i][2];
                    barOneStyler.height = `${newHeightOne}px`;
                    barOneStyler.backgroundColor = "mediumpurple";
                    }, i * duration);
                break;
            default:
                console.log("There was an error");
                break;
        }
    }    

    setTimeout(() => {
        for(let i = 0; i< arrayBars.length; i++){
            const barOneStyle = arrayBars[i].style;
            barOneStyle.backgroundColor = PRIMARY_COLOR;         
        }
    }, animations.length * duration + 100);


    return animations.length * duration + 125;
}



function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    HeapSort(array, animations);
    return animations;
}

function HeapSort(array, animations) {
    array = buildMaxHeap(array, animations);
    let n = array.length;

    for(let i = n - 1; i > 0; i--) {
        swap(array, 0, i);

        animations.push([3, i, array[i]]);
        animations.push([2, 0, array[0]]); 
        
        heapify(array, 0, i, animations);
    }
    
    animations.push([3, 0, array[0]]);
}

function buildMaxHeap(array, animations) {
    let n = array.length;

    for(let i = Math.floor(n/2); i>=0;i--) {
        array = heapify(array,i, n, animations);
    }
    return array;
}

function heapify(array, ind, n, animations) {
    let largest = ind;
    let left = 2 * ind +1;
    let right = 2 * ind + 2;

    animations.push([0,ind,largest]);

    if((left < n) && (array[left] > array[largest])) {
        largest = left;
    }

    if((right < n) && (array[right] > array[largest])) {
        largest = right;
    }

    if(largest !== ind) {
        swap(array, ind, largest);
        animations.push([2, largest, array[largest]]);
        animations.push([2, ind, array[ind]]);
        heapify(array, largest, n, animations);
        animations.push([1,ind,largest]);
    }
    else {
        animations.push([1,ind,largest]);
    }
    return array;
}

function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}