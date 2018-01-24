
var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

var colors = ['red','blue','green','pink','purple'];

function addElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;

}

function destructivelyAddElementToBeginningOfArray(array,element){
  return [element,...array];

}
