'use strict';

function Series(numStr){
  // add your solution here!
  this.digits = numStr.split("").map(Number);
};

Series.prototype.slices = function(num){
  var newArr = [];
  var i = 0;
  var arr = this.digits;

  if(num <= arr.length){
    while(i < arr.length-(num-1)){
      newArr.push(arr.slice(i, (i + num)));
      i++;
    }
    return newArr;
  }
  else{
    throw new Error('Slice size is too big.');
  }
}
