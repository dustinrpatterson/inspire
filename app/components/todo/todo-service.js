function TodoService() {
    //This service is all setup for you no edits necessary here

    this.newItem = [];

    this.getTodos = function () {
        var t = localStorage.getItem('todo');
        if (t) {
            console.log('Todo Data:', JSON.parse(t))
            return JSON.parse(t)
        }
        console.log('Todo Data:', [])
        return [];
    }

    this.saveTodos = function (newItem) {
        //^^^ Less typical but todos should always be the entire array
        localStorage.setItem('todo', JSON.stringify(newItem));
        console.log('Todo Data Saved:', newItem);
    }

    this.removeTodos = function (id) {
        debugger
        for (var i = 0; i < this.newItem.length; i++) {
            var oldItem = this.newItem[i];
            if (id == i) {
                this.newItem.splice(i, 1)
                this.saveTodos(this.newItem)
            }
        }
    }
}