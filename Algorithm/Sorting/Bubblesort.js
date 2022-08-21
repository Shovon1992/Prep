/**
 * 
 * @param {unsorted arry } arr
 * Bubble sort is simple sorting algorithm where we swap two adjasent element in a array
 * 
 >>>>>>>>>>> Algorithm
 * 
 * Start a loop from end of the array and continue till begining with i
 * Start another neasted loop from begining to i-1 with j
 * swap the element if a[j] > a[j+1]
 * 
 *  Example input array [7,3,2,1]
 * Outer loop 1 
  { i: 3, j: 0, Swap: true, b: '7,3,2,1', s: '3,7,2,1' },
  { i: 3, j: 1, Swap: true, b: '3,7,2,1', s: '3,2,7,1' },
  { i: 3, j: 2, Swap: true, b: '3,2,7,1', s: '3,2,1,7' },
 * Outer loop 2 
  { i: 2, j: 0, Swap: true, b: '3,2,1,7', s: '2,3,1,7' },
  { i: 2, j: 1, Swap: true, b: '2,3,1,7', s: '2,1,3,7' },
 * Outer loop 3 
  { i: 1, j: 0, Swap: true, b: '2,1,3,7', s: '1,2,3,7' }
 *
 *
 >>>>>>>>>>>>>>>> Complexcity
 * As we have to use nested loop that's why time complexcity will be O(n*n) in every cases
 * As we haven't use any extra arry to sort that's why Space compexcity is O(1)

 */

const BubbleSort = (arr) =>{

    let swapped =1;
    let counter =0;
    let log = []
      for(let i=arr.length-1;i>0 ;i--){
        swapped = 0;
        for(let j=0; j<=i-1; j++){
      log.push({i: i, j : j, "Swap" : arr[j] > arr[j+1]})
      log[counter]["b"] = arr.toString()
          if(arr[j] > arr[j+1]){
            let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] =temp;
          swapped = 1;
          
        }
        log[counter]["s"] = arr.toString()
        counter++
        
      }
    }
    console.log(`Sorted Array [ ${arr} ] Total counter ${counter}`)
  }

  export default BubbleSort