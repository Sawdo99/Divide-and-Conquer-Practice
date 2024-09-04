function findRotationCount(arr) {
    let low = 0;
    let high = arr.length - 1;

    // Base case: if the array is not rotated
    if (arr[low] < arr[high]) {
        return 0;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Check if mid element is the smallest
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }
        
        if (arr[mid] < arr[mid - 1]) {
            return mid;
        }

        // Decide which part to search
        if (arr[mid] > arr[low]) {
            // Left part is sorted, so the rotation must be in the right part
            low = mid + 1;
        } else {
            // Right part is sorted, so the rotation must be in the left part
            high = mid - 1;
        }
    }

    // If no rotation is found, which should not happen for a rotated array
    return 0;
}


module.exports = findRotationCount