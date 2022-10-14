<template>
<div>
<ul>
  <li v-for="(film, index) in films" :key="index">
    <film-card
    :author="film.author"
    :title="film.author"
    :year="film.year"
    />
  </li>
</ul>
</div>
</template>

<script>
import axios from 'axios'
import FilmCard from '../components/FilmCard.vue'
export default {
    name: 'FilmList',
    components: {FilmCard},
    data() {
        return {
            films: [],
        }
    },
    methods: {
        getFilms() {
            axios.get('http://localhost:5000/films')
            .then((res) => {this.films = res.data.films; console.log(self.films)})
            .catch((e) => {console.log(e)})
        },
        showFilms() {
            console.log(this.films)
        }
    },
    created() {
        this.getFilms()
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
    display: flex;
    gap: 20px;
}

</style>
