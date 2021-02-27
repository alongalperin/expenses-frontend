<template>
  <div class="App__Container">
    <h1>Expenses App</h1>
    <ExpenseInsert />
  </div>
</template>

<script>
import ExpenseInsert from './components/ExpenseInsert';
export default {
  name: 'App',
  components: {
    ExpenseInsert
  }
}
</script>

<style>
html,
body {
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.App__Container {
  width: 80%;
  height: 100%;
  margin: 0px auto;
}

</style>
