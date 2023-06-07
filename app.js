const App = {
  data() {
    return {
      CustomPlaceholder: "Enter name todo",
      title: "To Do List:",
      inputValue: "",
      notes: ["note1", "note2"],
    };
  },
  methods: {
    inputChangeHandler(e) {
      this.inputValue = e.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
    inputKeyPress(e) {
      if (e.key === "Enter") {
        this.addNewNote();
      }
    },
  },
};

Vue.createApp(App).mount("#app");
