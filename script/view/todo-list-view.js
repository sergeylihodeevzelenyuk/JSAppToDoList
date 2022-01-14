class TodoListWiew {
  #$listEl;
  #options;

  static CLASS_TODO = {
    LIST: "todo-list",
    ITEM: "todo-list__item-container",
    MESSAGE: "todo-list__item-message",
    BTNS: "todo-list__item-buttons-wrapper",
    BTN_DONE: "todo-list__item-done",
    BTN_DELETE: "todo-list__item-delete",
    LIST_PENDING: "pending",
    LIST_COMPLETED: "completed",
  };

  constructor(options) {
    this.#options = options;
    this.#$listEl = this.init();
  }

  init() {
    return $(`<ul class=${TodoListWiew.CLASS_TODO.LIST}></ul>`)
      .on("click", "." + TodoListWiew.CLASS_TODO.BTN_DONE, (e) =>
        this.onBtnDoneClick(e)
      )
      .on("click", "." + TodoListWiew.CLASS_TODO.BTN_DELETE, (e) =>
        this.onBtnDeleteClick(e)
      );
  }

  onBtnDoneClick(e) {
    const id = this.getTodoId(e.target);

    this.toggleStatusClasses(e.target);
    this.#options.onToggle(id);
  }

  onBtnDeleteClick(e) {
    const id = this.getTodoId(e.target);

    this.removeTodoElFromUi(e.target);
    this.#options.delete(id);
  }

  getTodoId(target) {
    return $(target)
      .closest("." + TodoListWiew.CLASS_TODO.ITEM)
      ?.data("id");
  }

  removeTodoElFromUi(target) {
    $(target)
      .closest("." + TodoListWiew.CLASS_TODO.ITEM)
      .remove();
  }

  toggleStatusClasses(target) {
    $(target)
      .closest("." + TodoListWiew.CLASS_TODO.ITEM)
      .toggleClass(TodoListWiew.CLASS_TODO.LIST_PENDING)
      .toggleClass(TodoListWiew.CLASS_TODO.LIST_COMPLETED);
  }

  appendTo($el) {
    $el.append(this.#$listEl);
  }

  renderList(list) {
    const html = list.map((todo) => this.generateTodoHtml(todo)).join("");

    this.#$listEl.html(html);
  }

  generateTodoHtml(todo) {
    return `<li class="${TodoListWiew.CLASS_TODO.ITEM} ${todo.status}" data-id=${todo.id}>
    <p class="${TodoListWiew.CLASS_TODO.MESSAGE}">${todo.title}</p>
    <p class="${TodoListWiew.CLASS_TODO.BTNS}">
      <span class="${TodoListWiew.CLASS_TODO.BTN_DONE}">&#9989;</span>
      <span class="${TodoListWiew.CLASS_TODO.BTN_DELETE}">&#10062;</span>
    </p>
  </li>`;
  }

  showServerError(error) {
    alert(error);
  }
}
