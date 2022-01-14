class Controller {
  #$container;

  constructor($container) {
    this.#$container = $container;

    this.todoCollection = new Collection();

    this.todoListWiew = new TodoListWiew({
      onToggle: (id) => {
        this.todoCollection.toggle(id).catch(this.todoListWiew.showServerError);
      },
      delete: (id) => {
        this.todoCollection.delete(id).catch(this.todoListWiew.showServerError);
      },
    });

    this.todoListWiew.appendTo(this.#$container);
    this.createTodoList();

    this.CreateTodoWiew = new CreateTodoView({
      createTodo: (data) => {
        this.todoCollection
          .createTodo(data)
          .then(() => this.createTodoList())
          .catch(this.todoListWiew.showServerError);
      },
    });
  }

  createTodoList() {
    this.todoCollection
      .fetch()
      .then((list) => {
        this.todoListWiew.renderList(list);
      })
      .catch(this.todoListWiew.showServerError);
  }
}
