<template>
  
  <div>
    <div class="searchResult">
      <div class="back-button" @click='backToPrevious'>返回</div>
      <span class="title">搜索：“{{searchKeywords}}”</span>
      <router-link :to="{name:'movie-detail', params: { movieId: item.id }}" tag='div' :mid="item.id" class="movie-item" v-for="(item) in list" :key=item.id>
        <div class="image-wrapper">
          <img :src="item.images.small" :alt="item.alt" class="movie-image">
        </div>
        <p class="movie-title">{{item.title}}</p>
        <div class="movie-rating">
          <Stars :rating="item.rating.average" :itemid="item.id" /> {{item.rating.average}}
        </div>
      </router-link>
    </div>
    <Loading v-if="!completeLoading" />
    <div class="end" v-if="allLoaded">到底了朋友</div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import Axios from 'axios'
import Stars from '../components/Stars'

export default {
  name: 'SearhResults',
  props: {
    searchKeywords: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      start: 0,
      list: [],
      completeLoading: undefined,
      loadingVisible: true,
      thisIsTheEnd: false,
      allLoaded: false
    }
  },
  components: {
    Loading,
    Stars
  },

  methods: {
    toggleLoading() {
      console.log('toggle ing    ', this.loadingVisible)
      this.loadingVisible = !this.loadingVisible
    },
    backToPrevious() {
      this.$router.back()
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
      console.log('完成了吗？', this.completeLoading)


      var devUrl = '/api/movie/search?q=?' + this.searchKeywords + '&start='
      var prodUrl = 'https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/search?q=?' + this.searchKeywords + '&start='
      var promiseArray = []
      this.completeLoading = false
      // https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start=
      promiseArray.push(Axios.get(devUrl + this.start))
      promiseArray.push(Axios.get(devUrl + (this.start + 20)))
      promiseArray.push(Axios.get(devUrl + (this.start + 40)))
      Promise.all(promiseArray).then(res=>{
          console.log(res)
          res.forEach(e=>{
            if (e.data.subjects.length === 0) {
              this.allLoaded = true
            } 
            !!e.data.length ? '' : this.list.push(...e.data.subjects)
          })
          this.completeLoading = true
          this.start += 60
      })





      // https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/top250?start=
      // http://api.douban.com/v2
      // http://api.douban.com/v2/movie/search?q=start=
      // this.completeLoading = false
      // Axios.get(
      //   'https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/search?q=?' + this.searchKeywords + '&start=' + this.start
      // )
      //   .then(res => {
      //     !!res.data.length ? '' : this.list.push(...res.data.subjects)
      //     if (res.data.subjects.length < 20) {
      //       this.toggleLoading()
      //       this.thisIsTheEnd = true
      //       return {
      //         data: 'finished'
      //       }
      //     }
      //     this.start += 20
      //     // /api/movie/subject/:id
      //     return Axios.get(
      //       'https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/search?q=?' +
      //         this.searchKeywords +
      //         '&start=' +
      //         this.start
      //     )
      //   })
      //   .then(res => {
      //     this.start += 20
      //     !!res.data.length ? '' : this.list.push(...res.data.subjects)
      //     if (res.data === 'finished') {
      //       return {
      //         data: 'finished'
      //       }
      //     } else if (res.data.subjects.length < 20) {
      //       this.toggleLoading()
      //       this.thisIsTheEnd = true
      //       return {
      //         data: 'finished'
      //       }
      //     } else {
      //       return Axios.get(
      //         'https://cors-anywhere.herokuapp.com/http://api.douban.com/v2/movie/search?q=?' +
      //           this.searchKeywords +
      //           '&start=' +
      //           this.start
      //       )
      //     }
      //   })
      //   .then(res => {
      //     !!res.data.length ? '' : this.list.push(...res.data.subjects)
      //     this.start += 20
      //     if (res.data === 'finished') {
      //       console.log('All finished')
      //     } else if (res.data.subjects.length < 20) {
      //       this.toggleLoading()
      //       this.thisIsTheEnd = true
      //       console.log('All finished')
      //     } else {
      //       this.completeLoading = true
      //       this.toggleLoading()
      //     }
      //   })
    }
  },
  beforeMount() {
    this.list = []
  },
  activated() {
    this.getData()
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
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins/mixin.scss';
.searchResult {
  position: relative;
  padding: 0.4rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.title {
  width: 100%;
  text-align: center;
  font-size: medium;
  font-weight: bold;
  font-family: 'Arial', 'FangSong', 'Microsoft YaHei', '黑体', '宋体',
    sans-serif;
  padding: 1rem 0;
  border-bottom: 1px solid $gray;
}
.movie-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 0.6rem 0.66%;
  text-align: center;
  min-width: 30%;
  max-width: 30%;
  padding: 1%;
  background-color: lighten($color: $pearl, $amount: 10%);
}
.image-wrapper {
  width: 100%;
  height: 76%;
  overflow: hidden;
}
.movie-image {
  margin-bottom: 0.4rem;
  width: 100%;
  height: 100%;
  max-height: 16rem;
}
.movie-title {
  font-family: sans-serif;
  margin: 0.2rem 0 0;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.end {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 5rem;
  height: 5rem;
}
.back-button {
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  z-index: 1;
  color: rgb(173, 173, 173);
  background-color: rgba(5, 5, 5, 0.048);
  padding: 0.6rem 0.8rem;
  border-radius: 0.2rem;
  border: 1px solid #bbb;
}
</style>


