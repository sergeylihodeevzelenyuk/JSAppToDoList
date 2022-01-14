class CreateTodoView {
  #$rootEl;
  #options;

  static ROOT_ID = "#input-wrapper";
  static CLASS = {
    TODO_LIST: "todo-list",
    TODO_INPUT: "todo-input",
    CREATE_BTN: "todo-button",
    ERROR_MSG: "todo-input__error-window",
    ERROR: "error",
  };

  constructor(options) {
    this.#$rootEl = $(CreateTodoView.ROOT_ID).on(
      "click",
      "." + CreateTodoView.CLASS.CREATE_BTN,
      (e) => this.onCreateTodoBtn(e)
    );

    this.#options = options;
  }

  onCreateTodoBtn(e) {
    e.preventDefault();
    this.clearInputError();

    if (this.isInputValid()) {
      const todoData = {
        id: "",
        status: "pending",
        title: this.getInputData(),
      };

      this.resetInpute();
      this.#options.createTodo(todoData);
    } else {
      this.showInputError();
    }
  }

  getInputData() {
    return $("." + CreateTodoView.CLASS.TODO_INPUT).val();
  }

  isInputValid() {
    return this.getInputData();
  }

  resetInpute() {
    $("." + CreateTodoView.CLASS.TODO_INPUT).val("");
  }

  clearInputError() {
    $("." + CreateTodoView.CLASS.TODO_INPUT).removeClass(
      CreateTodoView.CLASS.ERROR
    );
    $("." + CreateTodoView.CLASS.ERROR_MSG).removeClass(
      CreateTodoView.CLASS.ERROR
    );
  }

  showInputError() {
    $("." + CreateTodoView.CLASS.TODO_INPUT).addClass(
      CreateTodoView.CLASS.ERROR
    );
    $("." + CreateTodoView.CLASS.ERROR_MSG).addClass(
      CreateTodoView.CLASS.ERROR
    );
  }
}
