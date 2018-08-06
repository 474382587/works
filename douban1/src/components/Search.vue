<template>
  <div class="search-container">
    <form action="" class="search">
      <input type="text" placeholder="请输入电影名称">
      <button>搜索</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins/mixin.scss';
.search-container {
  width: 100%;
  padding: 3rem 0 .8rem;
  border-bottom: 1px solid $gray;
}
.search {
  display: flex;
  justify-content: space-between;
  max-width: 20rem;
  margin: 0 auto;
  input {
    flex: 1;
    margin-right: 0.5rem;
    border: 1px solid darken($color: $gray, $amount: 10%);
    border-radius: 0.25rem;
    padding: 0.4rem;
  }
  button {
    background: white;
    border: 1px solid $gray;
    border-radius: 0.25rem;
  }
}
</style>
