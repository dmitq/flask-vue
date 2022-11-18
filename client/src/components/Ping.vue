<template>
  <div>
    {{msg}}
  </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'Ping',
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        getMessage() {
            const url = 'http://localhost:5000/ping'
            axios.get(url)
            .then((res) => {this.msg = res.data})
            .catch((e) => console.log(e))
        }
    },
    created() {
        this.getMessage()
    }
}
</script>

<style>

</style>
