// Selection Sort Algorithm => Select minimum and Swap it
;
function selectionSort(_a) {
    var arr = _a.arr, N = _a.N;
    var minIdx;
    for (var i = 0; i < N - 1; i++) {
        var minIdx_1 = i;
        for (var j = i + 1; j < N - 1; j++) {
            if (arr[j] < arr[i]) {
                minIdx_1 = j;
            }
            var temp = arr[minIdx_1];
            arr[minIdx_1] = arr[i];
            arr[i] = temp;
        }
    }
    console.log("Sorted array is :", arr);
}
selectionSort({ arr: [2, 5, 2, 1], N: 6 });
// Time Complexity => O(n^2)
