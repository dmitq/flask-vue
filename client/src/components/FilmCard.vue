<template>
<div class="card" :class="{ active: checked }">
    <p class='header'> {{title}} </p>
    <p>author: {{author}}</p>
    <p>year: {{year}}</p>
</div>

</template>

<script>
export default {
    name: 'FilmCard',
    props: ['title', 'author', 'year', 'checked']
}
</script>

<style scoped>
.card {
    color: rgb(255, 255, 255);
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    background-color: rgb(156, 12, 12);
    border-radius: 7px;
    height: 200px;
    text-align: center;
    padding: 10px;
    transition: transform 0.6s cubic-bezier(0.215, 0.610, 0.355, 1);
}
.card:hover {
    transform: scale(1.1);
}
.header {
    font-size: 24px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.active {
    border: 2px solid white;
}
</style>
