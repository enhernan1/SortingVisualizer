const PRIMARY_COLOR = 'lightslategray';
export function animateBubbleSort(array, duration) {
    const animations = getBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
        const animationType = animations[i][0];

        switch(animationType){
            case 0:
                const barOneIdx = animations[i][1];
                const barOneStyle = arrayBars[barOneIdx].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    }, i * duration); 
                break;
            case 1:
                const barOneIdxs = animations[i][1];
                const barOneStyles = arrayBars[barOneIdxs].style;
                const barTwoIdxs = animations[i][2];
                const barTwoStyles = arrayBars[barTwoIdxs].style;

                setTimeout(() => {
                    barOneStyles.backgroundColor = 'lightgreen';
                    barTwoStyles.backgroundColor = 'lightgreen';
                    }, i * duration); 
                break;
            case 2:
                const barOneIdxl = animations[i][1];
                const barOneStylel = arrayBars[barOneIdxl].style;
                const barTwoIdxl = animations[i][2];
                const barTwoStylel = arrayBars[barTwoIdxl].style;

                setTimeout(() => {
                    barOneStylel.backgroundColor = PRIMARY_COLOR;
                    barTwoStylel.backgroundColor = PRIMARY_COLOR;
                    }, i * duration); 
                break;
            
            case -1:
                const barOneIdxk = animations[i][1];
                const barOneStylek = arrayBars[barOneIdxk].style;

                setTimeout(() => {
                    barOneStylek.backgroundColor = PRIMARY_COLOR;
                    }, i * duration); 
                break;
                
            case 3:
                const barOneIdxr = animations[i][1];
                const barOneStyler = arrayBars[barOneIdxr].style;
                setTimeout(() => {
                    const newHeightOne =animations[i][2];
                    barOneStyler.height = `${newHeightOne}px`;
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

function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations) {
    let n = array.length;

    for(let i = 0; i<n; i++) {
        for(let j =0; j < n-i;j++) {
            animations.push([0,j]);

            if(array[j] > array[j +1]) {
                animations.push([1, j, j + 1]);
                animations.push([2, j, j + 1]);

                swap(array, j, j+1);
                animations.push([3, j + 1,array[j+1]]);
                animations.push([3, j, array[j]]);
            }
            animations.push([-1,j]);
        }
    }

    function swap(array, index1, index2) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
}

