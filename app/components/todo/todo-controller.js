(function () {
    function TodoController() {

        var todoService = new TodoService();
        todoService.newItem = todoService.getTodos();
        update();

        $('form').on('submit', function (e) {
            e.preventDefault();
            var temp = this.listItem.value;            
            todoService.newItem.push(temp);
            todoService.saveTodos(todoService.newItem);
            update();
        })

        $('#list').on('click', '.delete', function () {
            todoService.removeTodos(this.id);
            update()
        })

        function update() {
            var list = todoService.getTodos()
            var listElem = $('#list');
            var taskTemplate = `<h3>Number of tasks: ${list.length}</h3>`
            var template = '';
            for (var i = 0; i < list.length; i++) {
                listElem.empty();
                template += `
               <li id="${i}">${list[i]}
                <button class="delete" id="${i}">X</button></li>`
            }
			listElem.empty().append(taskTemplate, template);
        }        
    }

    TodoController();

} ())