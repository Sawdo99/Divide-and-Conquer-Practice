function sortedFrequency(arr, target) {
    function findFirstOccurrence(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                // Check if this is the first occurrence
                if (mid === 0 || arr[mid - 1] !== target) {
                    return mid;
                }
                right = mid - 1;
            }
        }
        return -1;
    }

    function findLastOccurrence(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                // Check if this is the last occurrence
                if (mid === arr.length - 1 || arr[mid + 1] !== target) {
                    return mid;
                }
                left = mid + 1;
            }
        }
        return -1;
    }

    const firstIndex = findFirstOccurrence(arr, target);
    if (firstIndex === -1) {
        return -1;
    }

    const lastIndex = findLastOccurrence(arr, target);
    return lastIndex - firstIndex + 1;
}



module.exports = sortedFrequency