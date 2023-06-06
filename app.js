const App = {
  data() {
    return {
      CustomPlaceholder: "Enter name todo",
      title: "To Do List:",
      inputValue: "",
    };
  },
  methods: {
    inputChangeHandler(e) {
      this.inputValue = e.target.value;
    },
  },
};

Vue.createApp(App).mount("#app");
