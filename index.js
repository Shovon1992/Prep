console.log("This is for the Test js files in locally ")
import BubbleSort from "./Algorithm/Sorting/Bubblesort.js"
import SeelectionSort from "./Algorithm/Sorting/SelectionSort.js"
const testArray = [
    [7,3,2,1],
    // [12,3,12,12,1,-166,1,2,-546,19,3,-7,1,779,-11],
    // [12,3,12,12,1,66,1,2,546,19,3,7,1,779,11]
    
] 

for(let i=0 ; i<testArray.length; i++){
    console.log(`\n------------------------------------------------Test ${i+1}------------------------------------------------\n`)
    // BubbleSort(testArray[i])
    SeelectionSort(testArray[i])
    console.log(`\n`)

}
