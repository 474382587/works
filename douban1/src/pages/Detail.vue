<template>
  <div class="detail">
    <div class="detail__image-wrapper">
      <img class="detail__image" :src="this.image" alt="">
    </div>
    <div class="detail__content-wrapper">
      <ul class="info">
        <li class="title">{{this.title}}</li>
        <li class="director">导演：{{this.directors}}</li>
        <li class="cast">主演：{{this.casts}}</li>
      </ul>
      <div class="intro">
        <p class="intro-title">简介</p>
        <p class="intro-content">
          {{this.intro}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Detail',
  props: {
    movieId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      image: '',
      title: '',
      directors: '',
      casts: '',
      intro: ''
    }
  },
  methods: {
    getData() {
      Axios.get('/api/movie/subject/' + this.movieId).then(res => {
        console.log(res.data)
        this.title = res.data.title
        this.directors = res.data.directors.map(e=>e.name).join("，")
        this.casts = res.data.casts.map(e=>e.name).join('，')
        this.intro = res.data.summary
        this.image = res.data.images.small
      })
    }
  },
  activated() {
    console.log(this.movieId, "获取详情")
    this.getData()
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  }
}
</script>

<style lang="scss" scoped>
.detail {
  font-family: monospace, 'Courier New', Courier;
  color: #444;
  font-size: 1.6rem;
}
.detail__image-wrapper {
  width: 100%;
  margin-bottom: 3vh;
  overflow: hidden;
  position: relative;
}
.detail__image {
  width: 100%;
  height: 40vh;
}
.detail__content-wrapper {
  padding: 1vw 4vw;
  line-height: 1.5;
}
.intro-title{
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.title {
  color: black;
  font-size: 2.4rem;
  font-weight: bolder;
}
.title,
.director,
.cast {
  margin-bottom: 0.4rem;
}
.info,
.intro {
  margin-bottom: 2rem;
}
</style>
