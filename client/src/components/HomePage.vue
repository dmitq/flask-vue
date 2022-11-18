<template>
<div>
  <router-link to="/films">
  <button class='nav'>Films</button>
  </router-link>
  <div class='mes'>{{mes}}</div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'HomePage',
    data() {
        return {
            mes: ''
        }
    },
    methods: {
        getMes() {
            axios.get('http://localhost:5000/')
            .then((res) => {this.mes = res.data.mes; console.log(res.data.mes)})
            .catch((e) => {console.log(e)})
        }
    },
    created() {
        this.getMes()
    }
}
</script>

<style>
/* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
article > * + * {
  margin-top: 1em;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

ul {
  margin: 20px auto ;
  display: flex;
  width: 1100px;
  gap: 40px;
  padding: 100px;
}
li {
  width: 33%;
}
.bio {
  margin-top: 100px;
  background-color: aliceblue;
}
.dark {
    background-color: black;
    opacity: 50%;
    z-index: 5;
    width: 100%;
    height: 100%;
    position: absolute;
    transform: scale(2);
    pointer-events: none;
}
.higher {
  z-index: 15;
}
.bio {
  position: absolute;
  width: 100%;
  right: 0;
  height: 500px;
}
.mes {
  color: white;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
}
</style>
