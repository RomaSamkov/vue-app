// const App = {
//   data() {
//     return {
//       CustomPlaceholder: "Enter name todo",
//       title: "To Do List:",
//       inputValue: "",
//       notes: ["note1", "note2"],
//     };
//   },
//   methods: {
//     addNewNote() {
//       if (this.inputValue !== "") {
//         this.notes.push(this.inputValue);
//         this.inputValue = "";
//       }
//     },
//     onDeleteNote(idx) {
//       this.notes.splice(idx, 1);
//     },
//     handleToUpperCase(item) {
//       return item.toUpperCase();
//     },
//   },
//   computed: {
//     doubleCountComputed() {
//       console.log("DoubleCount!");
//       return this.notes.length * 2;
//     },
//   },
//   watch: {
//     inputValue(value) {
//       if (value.length > 10) {
//         alert("Hello Vue.JS !");
//       }
//     },
//   },
// };

// Vue.createApp(App).mount("#app");
const App = {
  data: () => ({
    title: "Grut Text",
    myHtml: "<h1>My Vue</h1>",
    person: {
      name: "Vue",
      nickName: "JS",
      age: 3,
    },
    items: [1, 2, 3, 4, 5, 6],
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
    },
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
  watch: {},
};

Vue.createApp(App).mount("#app");
