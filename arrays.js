
var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

var colors = ['red','blue','green'];

function addElementToBeginningOfArray(array,element) {

 colors.unshift(element);
 return colors;

}

function destructivelyAddElementToBeginningOfArray(array,element){
  return [element,...colors];
}

addElementToBeginningOfArray(colors,'foo');

function addElementToEndOfArray(array, element) {
  colors.push(element)
  return colors;
}

function destructivelyAddElementToEndOfArray(array,element) {
  return [...colors,element];
}
