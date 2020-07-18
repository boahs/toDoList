const myName = "Sha";
const toDoList = [];

function showToDo(arr) {
  if (arr.length === 0) {
    return "You need to add something to do.";
  } else {
    return `${myName}'s toDoList: ${arr}`;
  }
}

function removeToDo(arr, i) {
  arr.splice(i, 1);
  return toDoList;
}
