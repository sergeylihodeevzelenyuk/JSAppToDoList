class Collection {
  static TRUE = "completed";
  static FALSE = "pending";

  #list = [];

  fetch() {
    return TodoAPI.getList().then((list) => {
      this.setList(list);

      return this.getList();
    });
  }

  toggle(id) {
    const todo = this.getTodoById(id);

    this.toggleStatus(todo);

    return TodoAPI.update(todo, id);
  }

  delete(id) {
    const todo = this.getTodoById(id);

    return TodoAPI.delete(id);
  }

  createTodo(data) {
    return TodoAPI.create(data);
  }

  getTodoById(id) {
    return this.#list.find((item) => item.id === +id);
  }

  toggleStatus(todo) {
    if (todo.status == Collection.TRUE) {
      todo.status = Collection.FALSE;
    } else {
      todo.status = Collection.TRUE;
    }
  }

  getList() {
    return Promise.resolve(this.#list);
  }

  setList(list) {
    return (this.#list = list);
  }
}
