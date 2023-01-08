//Dadas duas matrizes inteiras classificadas nums1 e nums2, mescle nums2 em nums1 como uma matriz classificada.

function mergeSortedArray(numArr1, numArr2){
    for(let i = 0; i < numArr1.length; i++){
        if(numArr1[i] > 0){
            numArr2.unshift(numArr1[i])
        }
    };
    numArr2.sort()
    return numArr2
};



console.log(mergeSortedArray([1,2,3,0,0,0], [2,5,6,]))

module.exports = mergeSortedArray;