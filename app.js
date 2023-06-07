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
    onDeleteNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
