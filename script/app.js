const ROOT_ID = "#root";

new Controller($(ROOT_ID));

// ("use ctrict");

// const CLASS = {
//   BTN: "todo-button",
//   INPUT: "todo-input",
//   LIST: "todo-list",
//   LIST_ITEM: "todo-list__item",
//   ERROR: "todo-input__error-window",
//   TODO_LIST: "todo-list__item-container",
//   TODO_LIST_PENDING: "pending",
//   TODO_LIST_DONE: "completed",
//   BTN_DELETE: "todo-list__item-delete",
//   BTN_DONE: "todo-list__item-done",
//   ERROR_INPUTE: "todo-input__error",
//   ERROR_WINDOW: "todo-input__error-window_active",
// };
// const ELEMENT = {
//   BUTTON: document.querySelector("." + CLASS.BTN),
//   INPUT: document.querySelector("." + CLASS.INPUT),
//   LIST: document.querySelector("." + CLASS.LIST),
//   ERROR: document.querySelector("." + CLASS.ERROR),
// };

// const listItemHTML = document.querySelector("." + CLASS.LIST_ITEM).innerHTML;

// ELEMENT.BUTTON.addEventListener("click", onButtonClick);
// ELEMENT.LIST.addEventListener("click", onListClick);
// document.addEventListener("keydown", onDocumentKeydown);

// init();

// function onButtonClick() {
//   clearErrors();

//   if (!ELEMENT.INPUT.value) {
//     showErrors();
//     return;
//   }

//   createRemoutTodo().then(() => init());
//   resetInput();
// }

// function onListClick(e) {
//   if (e.target.classList.contains(CLASS.BTN_DONE)) {
//     const el = e.target.closest("." + CLASS.TODO_LIST);

//     el.classList.toggle(CLASS.TODO_LIST_DONE);
//     el.classList.toggle(CLASS.TODO_LIST_PENDING);

//     updateRemoutTodo(el);
//   }

//   if (e.target.classList.contains(CLASS.BTN_DELETE)) {
//     const id = e.target.closest("." + CLASS.TODO_LIST).dataset.id;

//     deleteRemoutTodo(id).then(() => init());
//   }
// }

// function onDocumentKeydown(e) {
//   if (e.key === "Enter") {
//     onButtonClick();
//   }

//   if (ELEMENT.INPUT.value && e.key === "Escape") {
//     resetInput();
//   }
// }

// function createRemoutTodo() {
//   const todoData = {
//     user_id: 144,
//     title: ELEMENT.INPUT.value,
//     status: "pending",
//   };

//   return TodoAPI.create(todoData);
// }

// function updateRemoutTodo(el) {
//   const id = el.dataset.id;
//   const todoData = {
//     status: el.classList[1],
//   };

//   TodoAPI.update(todoData, id).catch((error) => showServerError(error));
// }

// function deleteRemoutTodo(id) {
//   return TodoAPI.delete(+id);
// }

// function init() {
//   TodoAPI.getList()
//     .then((todos) => {
//       addTodosList(todos);
//     })
//     .catch((error) => showServerError(error));
// }

// function addTodosList(todos) {
//   const todosHTML = todos.map((todo) => getTodoHTML(todo)).join("");

//   ELEMENT.LIST.innerHTML = todosHTML;
// }

// function getTodoHTML(todo) {
//   return listItemHTML
//     .replace("{{message}}", todo.title)
//     .replace("{{condition}}", todo.status)
//     .replace("{{id}}", todo.id);
// }

// function resetInput() {
//   ELEMENT.INPUT.value = "";
// }

// function showServerError(error) {
//   alert(error);
// }

// function showErrors() {
//   ELEMENT.INPUT.classList.add(CLASS.ERROR_INPUTE);
//   ELEMENT.ERROR.classList.add(CLASS.ERROR_WINDOW);
// }

// function clearErrors() {
//   if (ELEMENT.INPUT.classList.contains(CLASS.ERROR_INPUTE)) {
//     ELEMENT.INPUT.classList.remove(CLASS.ERROR_INPUTE);
//   }

//   if (ELEMENT.ERROR.classList.contains(CLASS.ERROR_WINDOW)) {
//     ELEMENT.ERROR.classList.remove(CLASS.ERROR_WINDOW);
//   }
// }
