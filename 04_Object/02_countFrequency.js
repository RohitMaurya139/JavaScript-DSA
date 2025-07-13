// 🧮 Function to count frequency of each character in a string
function countFrequency(string) {
    // Create an empty object to store character frequencies
    let frequencyMap = {};

    // Loop through each character in the string
    for (let char of string) {
        // If the character already exists in the map, increment its count
        if (frequencyMap[char]) {
            frequencyMap[char]++; //accessing value
        } else {
            // If it's the first time seeing the character, set its count to 1
            frequencyMap[char] = 1; // creating key & adding value
        }
    }

    // Print the final frequency map
    console.log(frequencyMap);
}

// 📦 Example input
countFrequency("rrrrooohiiiiiittttt");
