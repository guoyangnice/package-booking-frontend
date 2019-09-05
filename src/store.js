import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: {}
  },
  getters: {
    getAllPackages(state) {
      return state.value;
    }
  },
  mutations: {
    update(state, value) {
      state.value = value;
    }
  },
  actions: {
    //提交信息

    commitMessage(context) {
      const axios = require("axios");
      var obj = JSON.stringify(context.value);
        axios.post('http://localhost:8080/packages', obj)
          .then(function () {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getMessage(context) {
        axios
          .get("http://localhost:8080/packages")
          .then(function (response) {
            context.commit('update', response.data);
            window.console.log(response.data);
          })
          .catch(function (error) {
            window.console.log("error");
          })
          .finally(function () {
            window.console.log("finally");
          });
    }
  }
})
