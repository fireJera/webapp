<template>
  <div id="app">
    <div id="header" class="headerDiv">
      <h1>todoList</h1>
      <input
        id="taskInput"
        type="text"
        class="taskInput"
        v-model="inputText"
        @keydown.enter="intputEnterDown()"
      />
      <input type="submit" value="添加" class="taskSubmit" @click="submitTask()" />
    </div>
    <div class="listul">
      <h2>未完成</h2>
      <ul>
        <li
          v-for="(listItem, index) of todoList"
          :key="index"
          :content="listItem"
          v-on:mouseenter="listMouseOver(true, index)"
          @mouseleave="listMouseLeave(true, index)"
        >
          <input type="checkbox" value="index" @change="todoChecked(index)" />
          {{ listItem.taskName }}
          <span v-show="listItem.isMoveOn">
            <input type="submit" value="x" class="removeInput" @click="removeToDoTask(index)" />
          </span>
        </li>
      </ul>
      <h2>已完成</h2>
      <ul>
        <li
          v-for="(listItem, index) in finishList"
          :key="index"
          :content="listItem"
          v-on:mouseenter="listMouseOver(false, index)"
          @mouseleave="listMouseLeave(false, index)"
        >
          <input type="checkbox" value="index" checked @change="finishedUnChecked(index)" />
          {{ listItem.taskName }}
          <span v-show="listItem.isMoveOn">
            <input type="submit" value="x" class="removeInput" @click="removeToDoTask(index)" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as Utils from "./utils/utils";
import ajax from './ajax/customAjax'

export default {
  name: "app",
  data() {
    return {
      inputText: "",
      todoList: [],
      finishList: [],
    };
  },

  watch: {
    todoList:function() {
      this.saveTodoToLocal();
    },
    finishList:function() {
      this.saveFinishToLocal();
    }
    // todoList: {
    //   handler: function () {
    //     this.saveTodoToLocal();
    //   },
    //   deep: true
    // },
    // finishList: {
    //   handler: function () {
    //     this.saveFinishToLocal();
    //   },
    //   deep: true
    // },
  },

  methods: {
    getData() {
      console.log("getData")
      var that = this
      ajax({
        methods: 'GET',
        url: '/todolist',
        data: {},
        success: function(res) {

        },
        faile: function(res) {

        }
      })
    },

    pushData(name) {
      console.log("pushData")
      var that = this
      ajax({
        methods: 'POST',
        url: '/todolist',
        data: {},
        success: function(res) {

        },
        faile: function(res) {

        }
      })
    },

    listMouseOver(isTodo, index) {
      if (isTodo) {
        this.todoList[index].isMoveOn = true;
      } else {
        this.finishList[index].isMoveOn = true;
      }
    },

    listMouseLeave(isTodo, index) {
      if (isTodo) {
        this.todoList[index].isMoveOn = false;
      } else {
        this.finishList[index].isMoveOn = false;
      }
    },

    intputEnterDown(e) {
      this.submitTask();
    },

    submitTask() {
      console.log("submitTask")
      if (this.inputText === "") {
        alert("please input text");
      } else {
        let listItem = { taskName: this.inputText, isMoveOn: false };
        this.todoList.push(listItem);
        this.pushData(inputText);
        this.inputText = "";
      }
    },

    todoChecked(index) {
      let temp = this.todoList[index];
      this.todoList.splice(index, 1);
      this.finishList.push(temp);
    },

    finishedUnChecked(index) {
      let temp = this.finishList[index];
      this.finishList.splice(index, 1);
      this.todoList.push(temp);
    },

    removeToDoTask(index) {
      this.todoList.splice(index, 1);
    },

    removeFinishTask() {
      this.finishList.splice(index, 1);
    },

    saveTodoToLocal() {
      Utils.setItem("todoList", this.todoList);
    },

    saveFinishToLocal() {
      Utils.setItem("finishList", this.finishList);
    },

    readFromLocal() {
      this.getData();
      let todos = Utils.getItem("todoList");
      let finishs = Utils.getItem("finishList");
      if (todos) {
        this.todoList = todos;
      }
      if (finishs) {
        this.finishList = finishs;
      }
    },
  },
  mounted() {
    this.readFromLocal();
  },
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  /* margin: 10px 10px 10px 10px;
  background-color: black; */
  min-width: 320px;
}

* {
  box-sizing: border-box;
}

.headerDiv {
  background-color: black;
  padding: 30px 0px 30px 0px;
  border-color: blue;
  border-style: outset;
  text-align: center;
  color: red;
}

.headerDiv:after {
  content: "";
  display: table;
  clear: both;
}

.taskInput {
  float: left;
  border: none;
  width: 75%;
  font-size: 16px;
  padding: 10px;
}

.taskSubmit {
  background: #d9d9dd;
  color: #555;
  border: none;
  width: 25%;
  padding: 8px;
  float: left;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.taskSubmit:hover {
  background-color: #bbb;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

.removeInput {
  position: absolute;
  background: red;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  text-align: center;
}
</style>
