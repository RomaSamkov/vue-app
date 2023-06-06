const App = {
  data() {
    return {
      CustomPlaceholder: "Enter name todo",
      title: "To Do List:",
    };
  },
};

Vue.createApp(App).mount("#app");
