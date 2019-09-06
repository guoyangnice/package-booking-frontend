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

    commitMessage(context,values) {
      const axios = require("axios");
      // values = JSON.stringify(context.value);
        axios.post('http://localhost:8080/packages', {
          id: 1,
        packageNumber: values.packageNumber,
        recipient:values.recipient,
        phoneNumber: values.phoneNumber,
        weight: values.weight,
        status: values.status,
        bookedTime: values.bookedTime
        })
          // .then(function () {
          //   window.console.log(response);
          // })
          // .catch(function (error) {
          //   window.console.log(error);
          // });
      },
    //   getMessage(context) {
    //     axios
    //       .get("http://localhost:8080/packages")
    //       .then(function (response) {
    //         context.commit('update', response.data);
    //         window.console.log(response.data);
    //       })
    //       .catch(function (error) {
    //         window.console.log("error");
    //       })
    //       .finally(function () {
    //         window.console.log("finally");
    //       });
    // }
  }
})
