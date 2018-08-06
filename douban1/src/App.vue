<template>
  <div id="app">
      <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Axios from 'axios'

export default {
  name: 'app',
  components: {
    Search: Search
  },
  beforeCreate() {
    Axios.get('/api/movie/top250').then(res=>{
      console.dir(res.data)
    })
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
