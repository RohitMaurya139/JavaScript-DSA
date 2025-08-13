function reverse_array(arr) {
    let i = 0;
    let j = arr.length - 1;

    // Swap until start index crosses end index
    while (i < j) {
        let temp = arr[i];  // store left element
        arr[i] = arr[j];    // move right element to left
        arr[j] = temp;      // move stored element to right
        
        i++; // move start forward
        j--; // move end backward
    }

    console.log(arr); // output reversed array
}

const num = [5, 9, 1, 8, 7, 2, 3];
reverse_array(num); // Output → [3, 2, 7, 8, 1, 9, 5]
