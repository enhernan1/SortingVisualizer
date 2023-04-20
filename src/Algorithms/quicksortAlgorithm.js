
const PRIMARY_COLOR = 'lightslategray';
export function animateQuickSort(array, duration) {
        const animations = getQuickSortAnimations(array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animations.length; i++) {
            const animationType = animations[i][0];
            const barOneIdx = animations[i][1];
            
            const barOneStyle = arrayBars[barOneIdx].style;

            switch(animationType){
                case -2:
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'steelblue';
                    }, i * duration);
                    break;
                case -1:
                    setTimeout(() => {
                        barOneStyle.backgroundColor = PRIMARY_COLOR;
                        }, i * duration); 
                    break;
                case 0:
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'red';
                        }, i * duration); 
                    break;
                case 1:
                    setTimeout(() => {
                        barOneStyle.backgroundColor = PRIMARY_COLOR;
                        }, i * duration); 
                    break;
                case 2:
                    const barTwoIdx = animations[i][2];
                    const barTwoStyle = arrayBars[barTwoIdx].style;

                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'lightgreen';
                        barTwoStyle.backgroundColor = 'ligthgreen';
                        }, i * duration); 
                    break;
                case 3:      
                    const barTwoIdxs = animations[i][2];
                    const barTwoStylet = arrayBars[barTwoIdxs].style;              
                    setTimeout(() => {
                        barOneStyle.backgroundColor = PRIMARY_COLOR;
                        barTwoStylet.backgroundColor = 'steelblue';
                        }, i * duration); 
                    break;

                case 5:
                    setTimeout(() => {
                        const newHeightOne =animations[i][2];
                        barOneStyle.height = `${newHeightOne}px`;
                        barOneStyle.backgroundColor = "mediumpurple";
                        }, i * duration);
                    break;
                case 6:
                    setTimeout(() => {
                        barOneStyle.backgroundColor = "mediumpurple";
                        }, i * duration);
                    break;
                default:
                    setTimeout(() => {
                        const newHeightOne =animations[i][2];
                        barOneStyle.height = `${newHeightOne}px`;
                        }, i * duration);
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


function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortAl(array, 0, array.length-1, animations);
    return animations;
}

function quickSortAl(array, low, high, animations) {
    if(low >= high){ 
        low = high > -1 ? high: 0;
        animations.push([6, low]);
        return;
    }
    
    let index = partition(array, low, high, animations); 
    quickSortAl(array, low, index - 1, animations);
    quickSortAl(array, index + 1, high, animations);
}

function partition(array, low, high, animations){
    let pivot = array[high];
    let left = low;

    //Turns the pivot position steel blue
    animations.push([-2, high]);
    

    for(let i = low; i < high; i++){
        //Turns the current index red
        animations.push([0, i]);

        if(array[i] < pivot){
            //Turns both the pivot position and current index green
            animations.push([2, i, high]);
            //turns off i and then  turns high back to steel blue
            animations.push([3, i, high]);

            swapElements(array, i, left)
            animations.push([4, left,array[left]]);
            animations.push([4, i,array[i]]);
            left++;   
        }
        else{

            animations.push([1, i])
        }
    }
    
    animations.push([-1, high]);

    swapElements(array, left, high);
    animations.push([5, left,array[left]]);
    animations.push([4, high,array[high]]);

    return left;
}

function swapElements(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }