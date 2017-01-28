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
            this.listItem.value = ''
        })

        $('#list').on('click', '.delete', function () {
            todoService.removeTodos(this.id);
            update()
        })

        function update() {
            var list = todoService.getTodos()
            var taskElem = $('#task');
            var listElem = $('#list');
            var taskTemplate = `<h3>Number of tasks: ${list.length}</h3>`
            var template = '';
            for (var i = 0; i < list.length; i++) {
                listElem.empty();
                template += `
               <li id="${i}"> <button class="delete btn-danger" id="${i}">X</button> ${list[i]}
                </li>`
            }
			listElem.empty().append(template);
            taskElem.empty().append(taskTemplate)
        }        
    }

    TodoController();

} ())