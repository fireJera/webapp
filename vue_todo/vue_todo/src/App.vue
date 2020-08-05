<template>
  <div id="app">
    <div id="header" class="headerDiv">
        <input type="text" class="taskInput">
        <input type="submit" value="添加" class="taskSubmit">
    </div>
    <div>
      <ul>

      </ul>
    </div>
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
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
  display: inline-block;
  margin: 0 10px;
}

</style>
