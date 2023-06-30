import { createStore } from "vuex";

export default createStore({
  state: {
    myViews: null,
    myView: null,
    // adminIn: null,
    // adminOutputs: null,
    // adminOutput: null,
  },

  mutations: {
    setmyViews: (state, myViews) => {
      state.myViews = myViews;
    },
    setmyView: (state, myView) => {
      state.myView = myView;
    },
    // setAdminIn: (state, adminUn) => {
    //   state.adminIn = adminUn;
    // },
    // setAdminOutputs: (state, adminOutputs) => {
    //   state.adminOutputs = adminOutputs;
    // },
    // setAdminOutput: (state, adminOutput) => {
    //   state.adminOutput = adminOutput;
    // },
  },
  actions: {
    getmyViews: async (context) => {
      fetch("http://localhost:3000/myViews")
        .then((res) => res.json())
        .then((myViews) => context.commit("setmyViews", myViews));
    },
    getmyView: async (context, id) => {
      fetch("http://localhost:3000/myViews/" + id)
        .then((res) => res.json())
        .then((myView) => context.commit("setmyView", myView));
    },
    // getadminOutputs: async (context) => {
    //   fetch("http://localhost:3000/myViews")
    //     .then((res) => res.json())
    //     .then((getadminOutputs) => context.commit("setadminOutputs", getadminOutputs));
    // },
    // getadminOutput: async (context, id) => {
    //   fetch("http://localhost:3000/myViews/" + id)
    //     .then((res) => res.json())
    //     .then((getadminOutput) => context.commit("setadminOutput", getadminOutput));
    // },
    getAdminIn: (context, payload) => {
      const { id, image, title, size, price, quantity, type } = payload;
      fetch("http://localhost:3000/myViews", {
        method: "POST",
        body: JSON.stringify({
          id: id,
          image: image,
          title: title,
          size: size,
          price: price,
          quantity: quantity,
          type: type,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getmyViews"))
    },
  },
});
