
var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

var colors = ['red','blue','green'];

function addElementToBeginningOfArray(array,element) {

 colors.unshift(element);
 return colors;

}

function destructivelyAddElementToBeginningOfArray(array,element){
  return [element,...colors];
}

function addElementToEndOfArray(array, element) {
  colors.push(elements)
  return colors;
}

function destructivelyAddElementToEndOfArray() {
  return [...colors,element];
}
