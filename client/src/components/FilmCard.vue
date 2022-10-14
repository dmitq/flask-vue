<template>
<div class="card">
    <p>title: {{title}} </p>
    <p>author: {{author}}</p>
    <p>year: {{year}}</p>
</div>
</template>

<script>
export default {
    name: 'FilmCard',
    props: ['title', 'author', 'year']
}
</script>

<style scoped>
.card {
    background-color: blanchedalmond;
}
</style>
