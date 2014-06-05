function init(){
    var addButton = document.getElementById('addButton');
    addButton.onclick = AddToList;
}
window.onload = init;

function AddToList(){
    TodoList._input = document.getElementById('inputfield').value;
    if(TodoList._input == ''){
        alert('Tekstvak is leeg!');
    }
    else{

        TodoList.item = document.getElementById('lijst');
        var createLi = document.createElement('li');
        createLi.innerHTML = TodoList._input;
        TodoList.item.appendChild(createLi, TodoList.item.firstChild);
        console.log(TodoList._item);
        document.getElementById('inputfield').value = '';
    }

}

var TodoList = {};

Object.defineProperties(TodoList,
    {

        item:
        {
            get:function()
            {
                return this._name;
            },
            set: function(value)
            {
                this._name = value;
            }

        },
        input:
        {
            get:function()
            {
                return this._name;
            },
            set: function(value)
            {
                this._name = value;
            }

        }

    });


//console.log(athlete._name);
//console.log(name = "kees");
//console.log(athlete.name);
//
//console.log(athlete.name);
//athlete._name = "jaap";
//console.log(athlete.name);
////console.log("name" in athlete);
////console.log(athlete.propertyIsEnumerable())
//athlete._age = 21;
//console.log(athlete.age);