<template>
  <router-view/>
</template>

<style>
.nav {
  color: rgb(255, 255, 255);
  background-color: rgb(36, 162, 225);
  border-radius: 5px;
  border: 0;
  margin: 10px;
}
#app {
  padding: 0;
  margin: 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
li {
list-style-type: none; /* Убираем маркеры */
}
ul {
margin-left: 0; /* Отступ слева в браузере IE и Opera */
padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
}
</style>
