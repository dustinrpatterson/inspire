(function () {
    function TodoController() {

        var todoService = new TodoService();
        update(todoService.getTodos());


        $('form').on('submit', function (e) {
            e.preventDefault();
            var temp = this.listItem.value;
            todoService.newItem = todoService.getTodos();
            todoService.newItem.push(temp);
            todoService.saveTodos(todoService.newItem);
            update(todoService.getTodos());
        })

        function update(list) {
            var listElem = $('#list');
                var template = '';
            for (var i = 0; i < list.length; i++) {
				listElem.empty();
                template += `
                <li>${list[i]}</li>`
            }
            listElem.append(template);

        }

    }





    TodoController();

	}()) //closes iife