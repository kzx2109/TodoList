import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: '掃地',

      }, {
        id: 2,
        title: '拖地',

      }, {
        id: 3,
        title: '洗衣服',

      }, {
        id: 4,
        title: '打程式',

      }
    ]
  },
  getters: {
    allTodos: (state) => state.todos,

  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      // console.log(todo);
    },
    delete_todo(state, id) {
      // 需要找一下
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo) {
      let data = state.todos.findIndex(t => t.id == todo.id);
      if (data != -1) {
        console.log(todo);
      }
    },

  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },

  },
  modules: {
  }
})
