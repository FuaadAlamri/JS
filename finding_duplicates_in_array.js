/*
1-duplicates is an array that will store the duplicate elements found in the input arr.
2- In this case, we use the map to keep track of the elements that have already
 been seen in the input array arr.
3-The for loop iterates over each element in the input arr
4-Inside the for loop, the map.has(arr[i]) statement checks if the current element
 (arr[i]) is already present in the map
5-If the current element is already present in the map, it means that this is a duplicate element,
  and it is added to the duplicates array using duplicates.push(arr[i]).
6-If the current element is not present in the map, it is added to the map using map.set(arr[i], true)
*/
function findDuplicates(arr) {
  let duplicates = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      map.set(arr[i], true);
    }
  }
  return duplicates;
}
