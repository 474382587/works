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
      start: 0,
      list: [],
      completeLoading: undefined
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    window.addEventListener(
      'scroll',
      this.throttle(() => {
        console.log('------  ++++  -------')
        console.log('------  ++++  -------', this.completeLoading )
        if (
          this.completeLoading &&
          window.pageYOffset + window.innerHeight >
            document.documentElement.scrollHeight - 300
        ) {
          console.log('新的一轮')
          this.getData()
        }
      }, 60),
      false
    )
  },
  methods: {
    throttle(fn, delay) {
      var timer = null
      return function() {
        clearTimeout(timer)
        timer = setTimeout(function() {
          fn()
        }, delay)
      }
    },
    getData() {
      console.log('Start', this.start)
      console.log('完成了吗？', this.completeLoading)

      this.completeLoading = false
      Axios.get('/api/movie/top250?start=' + this.start)
        .then(res => {
          console.dir(res.data.subjects)
          this.list.push(...res.data.subjects)
          this.start += 20
          return Axios.get('/api/movie/top250?start=' + this.start)
        })
        .then(res => {
          this.start += 20
          this.list.push(...res.data.subjects)
          if (this.start > 250) {
            return
          } else {
            return Axios.get('/api/movie/top250?start=' + this.start)
          }
        })
        .then(res => {
          this.start += 20
          this.completeLoading = true
          console.log('完成了吗？', this.completeLoading)

          this.list.push(...res.data.subjects)
        })
    }
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
