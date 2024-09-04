function findRotatedIndex(arr, num) {
 let low = 0;
 let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

       
        if (mid < high && arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }
        if (mid > low && arr[mid] < arr[mid - 1]) {
            return mid;
        }

      
        if (arr[mid] >= arr[low]) {
            if (num >= arr[low] && num < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (num > arr[mid] && num <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
}

return binarySearch(arr, num, 0, arr.length - 1);


function binarySearch(arr, num, low, high) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex