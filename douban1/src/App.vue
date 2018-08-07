<template>
  <div id="app">
      <Search />
      <Top250 :list="this.list"/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Top250 from './components/Top250.vue'
import Axios from 'axios'

export default {
  name: 'app',
  components: {
    Search: Search,
    Top250: Top250
  },
  data() {
    return {
      list: []
    }
  },
  beforeCreate() {
    Axios.get('/api/movie/top250').then(res => {
      console.dir(res.data.subjects)
      this.list = res.data.subjects
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
