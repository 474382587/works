<template>
  <div>
      <Search />
      <Top250 :list="list"/>
      <Loading v-if="!completeLoading" />
      <div class="end" v-if="list.length === 250">到底了朋友</div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import Top250 from '../components/Top250.vue'
import Loading from '../components/Loading.vue'
import Axios from 'axios'

export default {
  name: 'Home',
  components: {
    Search: Search,
    Top250: Top250,
    Loading: Loading
  },
  data() {
    return {
      start: 0,
      list: [],
      completeLoading: undefined,
      loadingVisible: true,
      allLoaded: false
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    window.addEventListener(
      'scroll',
      // 函数节流
      this.throttle(() => {
        if (
          //判断是否到底
          !this.allLoaded && this.completeLoading &&
          window.pageYOffset + window.innerHeight >
            document.documentElement.scrollHeight - 300
        ) {
          console.log('新的一轮')
          this.getData()
          this.toggleLoading()
        }
        //判断是否下拉
      }, 60),
      false
    )
  },
  methods: {
    toggleLoading() {
      console.log('toggle ing    ', this.loadingVisible)
      this.loadingVisible = !this.loadingVisible
    },
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
      var promiseArray = []
      this.completeLoading = false
      var devUrl = '/api/movie/top250?start='
      var prodUrl = 'https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie//top250?start='
      // https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start=
      promiseArray.push(Axios.get(prodUrl + this.start))
      promiseArray.push(Axios.get(prodUrl + (this.start + 20)))
      promiseArray.push(Axios.get(prodUrl + (this.start + 40)))
      Promise.all(promiseArray).then(res=>{
        console.log(res)
          res.forEach(e=>{
            if (e.data.subjects.length === 0) {
              this.allLoaded = true
            } 
            !e.data.subjects.length ? '' : this.list.push(...e.data.subjects)
          })
          this.completeLoading = true
          this.start += 60
          console.log("cong zhe li kai shi " + this.start)
      })

      // https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start=
      // build ^ dev v
      // /api/movie/top250?start=
      //  -----------------------------------------------------------------------------------------------------------
      // this.completeLoading = false
      // Axios.get('https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start=' + this.start)
      //   .then(res => {
      //     console.dir(res.data.subjects)
      //     this.list.push(...res.data.subjects)
      //     this.start += 20
      //     // /api/movie/subject/:id
      //     return Axios.get('https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start=' + this.start)
      //   })
      //   .then(res => {
      //     this.start += 20
      //     this.list.push(...res.data.subjects)
      //     if (this.start > 250) {
      //       this.toggleLoading()
      //       return {
      //         data: 'finished'
      //       }
      //     } else {
      //       return Axios.get('https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start=' + this.start)
      //     }
      //   })
      //   .then(res => {
      //     if (res.data === 'finished') {
      //       console.log('All finished')
      //     } else {
      //       this.start += 20
      //       this.completeLoading = true
      //       console.log('完成了吗？', this.completeLoading)
      //       this.list.push(...res.data.subjects)
      //       this.toggleLoading()
      //     }
      //   })
      //  -------------------------------------------------------------------------------------------------------------------------------
    }
  }
}
</script>

<style lang="scss" scoped>
.end {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 5rem;
  height: 5rem;
}
</style>
  
