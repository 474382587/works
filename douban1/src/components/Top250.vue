<template>
  <div class="top-250">
    <h3 class="title">豆瓣电影 TOP250</h3>

    <div class="movie-item" v-for="item in list" :key=item.id>
      <div class="image-wrapper">
        <img :src="item.images.small" :alt="item.alt" class="movie-image">
      </div>
      <p class="movie-title">{{item.title}}</p>
      <div class="movie-rating">
        <Stars :rating="item.rating.average" :itemid="item.id" /> {{item.rating.average}}
      </div>
    </div>
    
  </div>
</template>

<script>
import Stars from './Stars'
export default {
  name: 'Top250',
  components: {
    Stars: Stars
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    }
  },
  created() {
    console.log(this.list)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins/mixin.scss';

.top-250 {
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
  flex:1;
  margin: 1%;
  text-align: center;
  min-width: 30%;
  max-width: 30%;
  padding: 0.2rem;
}
.movie-image {
  margin-bottom: 0.4rem;
  width: 100%;
}
.movie-title {
  margin: 0.4rem 0;
}
</style>
