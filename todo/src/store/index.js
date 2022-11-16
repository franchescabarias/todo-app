import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // single state tree - this single object contains all your 
  // application level state and serves as the "single source of truth."
  state: {
    tasks: [
      {
        id: '1',
        title: 'Finish assignment',
        done: false
      },
      {
        id: '2',
        title: 'Watch Python tutorial',
        done: false
      },
      {
        id: '3',
        title: 'Do Typescript Assessment',
        done: false
      },
    ],
    snackbar: {
      show: false,
      text: ``
    }
  },
  // Vuex allows us to define "getters" in the store. 
  // You can think of them as computed properties for stores.
  getters: {
  },
  // a method that mutates or updates the store property with the value provided
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout);
    },
    hideSnackBar(state) {
      state.snackbar.show = false
    }
  },
  // can fetch and process data before it is sent to a mutation
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'You have added a task!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'You have deleted a task!')
    }
  },

  //allows us to divide our store into modules. 
  //Each module can contain its own state, mutations,
  // actions, getters, and even nested modules
  modules: {
  }
})
