function aggregateElements(arr) {
    const sum = aggregation(arr, (a, b) => a + b, 0);
    console.log(sum);

    const inverseSum = aggregation(arr, (a, b) => a + 1 / b, 0);
    console.log(inverseSum);

    const concatenation = aggregation(arr, (a, b) => a + b.toString(), "");
    console.log(concatenation);
}

function aggregation(arr, operation, initialValue) {
    let result = initialValue;
    arr.forEach(el => {
        result = operation(result, el);
    });
    return result;
}

aggregateElements([2, 4, 8, 16]);
