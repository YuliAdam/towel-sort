module.exports = function towelSort (matrix =[]) {

  let towelSort = matrix[0];
  let lengthMatrix = matrix.length;
  for (let i = 1; i < lengthMatrix; i+=1){
    if (i % 2 !== 0){
      towelSort = towelSort.concat(matrix[i].reverse());
    }else { 
      towelSort = towelSort.concat(matrix[i]);
    }
   }
   if (matrix.length === 0) towelSort = [];

  return towelSort;
}
