
var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

var colors = ['red','blue','green','pink','purple'];

function addElementToBeginningOfArray(array,element){
  return [element,...array];

}

function destructivelyAddElementToBeginningOfArray(array,element){

  array.unshift(element);
  return array;


}

function addElementToEndOfArray(array, element) {
  
   return [...array,element];
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}
