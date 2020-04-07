function addNewItem(list, itemText) {
  var listItem = document.createElement('li');
  listItem.innerText = itemText;
  list.appendChild(listItem);
}

var inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event) {
  if(event.which === 13) {
    var itemText = inputText.value;

  if(!itemText || itemText === "" || itemText === " ")
  return false; //blank 방지

  addNewItem(document.getElementById('todolist'), itemText);
  inputText.focus;
  inputText.select();
  }
}
