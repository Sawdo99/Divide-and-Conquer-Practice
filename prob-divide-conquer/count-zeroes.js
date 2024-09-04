function countZeroes(arr) {
 //starts by looking at the first index and the last index.
    let left = 0;
    let right = arr.length - 1;

   //binary search looking for the first occurence of 0.
    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0){
            if (mid === 0 || arr[mid - 1] === 1){
                return arr.length - mid;
            } else {
                right = mid - 1;
            }
        } else {
            left = mid + 1;
        }
     }
     //if no zeros are found return zero.
     return 0; 
}



module.exports = countZeroes