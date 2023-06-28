import { createStore } from "vuex";

export default createStore({
  state: {
    myViews: null,
    myView: null,
  },

  mutations: {
    setmyViews: (state, myViews) => {
      state.myViews = myViews;
    },
    setmyView: (state, myView) => {
      state.myView = myView;
    },
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
  },});
