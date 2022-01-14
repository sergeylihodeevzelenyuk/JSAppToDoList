class TodoAPI {
  static USER_ID = 144;
  static TOKEN =
    "4d86da993e5a01b52eb3f949eef1e50b23844370f639db40c707f0cd0891a0e6";
  static URL = "https://gorest.co.in/public/v1/todos";
  static HEADERS = {
    Accept: "application/json",
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${this.TOKEN}`,
  };

  static getList() {
    return fetch(`${this.URL}?user_id=${this.USER_ID}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error(`${res.status}: Can't get todos list from server`);
      })
      .then((data) => data.data);
  }

  static delete(id) {
    return fetch(`${this.URL}/${id}`, {
      method: "DELETE",
      headers: this.HEADERS,
    }).then((res) => {
      if (!res.ok || res.status !== 204) {
        throw new Error(`${res.status}: Can't delete todo from server`);
      }
    });
  }

  static create(todoData) {
    return fetch(this.URL, {
      method: "POST",
      headers: this.HEADERS,
      body: JSON.stringify({ ...todoData, user_id: this.USER_ID }),
    }).then((res) => {
      if (!res.ok || res.status !== 201) {
        throw new Error(`${res.status}: Can't post todo on server`);
      }
    });
  }

  static update(todoData, id) {
    return fetch(`${this.URL}/${id}`, {
      method: "PUT",
      headers: this.HEADERS,
      body: JSON.stringify(todoData),
    }).then((res) => {
      if (!res.ok || res.status !== 200) {
        throw new Error(`${res.status}: Can't update to on server`);
      }
    });
  }
}
