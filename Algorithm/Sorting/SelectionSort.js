const SeelectionSort = (arr) =>{
    let counter =0;
    let log = []

    for(let i=0;i<arr.length;i++){
        let min = i;

        

        for(let j=i+1;j<arr.length;j++){
            log.push({i: i,min: min,b: arr.toString()})
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
        console.log(arr.toString())
        
    }

    console.log(arr,counter,log)
}

export default SeelectionSort;