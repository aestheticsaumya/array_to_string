document.getElementById('displayAnswersButton').addEventListener('click', displayAnswers);

function displayAnswers() {
    // 1. Convert array to string with different delimiters
    const myColor = ["Red", "Green", "White", "Black"];
    const output1 = myColor.join(',');
    const output2 = myColor.toString();
    const output3 = myColor.join('+');

    // 2. Find most frequent item in an array
    const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

    const findMostFrequent = (arr) => {
        const frequencyMap = {};
        let maxCount = 0;
        let mostFrequentItem;

        arr.forEach(item => {
            if (frequencyMap[item]) {
                frequencyMap[item]++;
            } else {
                frequencyMap[item] = 1;
            }

            if (frequencyMap[item] > maxCount) {
                maxCount = frequencyMap[item];
                mostFrequentItem = item;
            }
        });

        return `${mostFrequentItem} ( ${maxCount} times )`;
    }

    const output4 = findMostFrequent(arr1);

    // 3. Truncate a string
    const truncateString = (str, num) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num);
    }

    const output5 = truncateString("Robin Singh", 4);

    // 4. Capitalize each word in a string
    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    const output6 = capitalizeWords('js string exercises');

    // 5. Filter array elements between two values
    const arrBetween = (a, b, arr) => {
        return arr.filter(item => item > a && item < b);
    }

    const output7 = arrBetween(3, 8, [1, 5, 95, 0, 4, 7]); // ➞ [5, 4, 7]
    const output8 = arrBetween(1, 10, [1, 10, 25, 8, 11, 6]); // ➞ [8, 6]
    const output9 = arrBetween(7, 32, [1, 2, 3, 78]); // ➞ []

    // 6. Find index of an element in an array
    const findIndex = (arr, element) => {
        return arr.indexOf(element);
    }

    const output10 = findIndex(["hi", "edabit", "fgh", "abc"], "fgh"); // ➞ 2
    const output11 = findIndex(["Red", "blue", "Blue", "Green"], "blue"); // ➞ 1
    const output12 = findIndex(["a", "g", "y", "d"], "d"); // ➞ 3
    const output13 = findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"); // ➞ 0

    // Display outputs in the HTML
    document.getElementById('output').textContent = `
    "Convert array to string with different delimiters"
    ["Red", "Green", "White", "Black"] ➞ 
                                            1) ${output1}
                                            2) ${output2}
                                            3) ${output3}

    "Find most frequent item in an array"
    [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] ➞ ${output4}

    "Truncate a string"
    console.log(truncateString("Robin Singh",4)) ➞ ${output5}

    "Capitalize each word in a string"
    console.log(capitalizeWords('js string exercises')) ➞ ${output6}

    "Filter array elements between two values"
    arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ ${output7}
    arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ ${output8}
    arrBetween(7, 32, [1, 2, 3, 78]) ➞ ${output9}

    "Find index of an element in an array"
    findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ ${output10}
    findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ ${output11}
    findIndex(["a", "g", "y", "d"], "d") ➞ ${output12}
    findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ ${output13}
    `;
}