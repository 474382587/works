<template>
  <div class="recipe">
    <h2 class="name">{{recipe.name}}</h2>
    <p class="type">Dish Type: {{recipe.type}}</p>
    <p class="prep">Dish Prep Time: {{recipe.cook_time}}</p>
    <p class="ingredients">Ingredients: {{recipe.ingredients.join(', ')}}</p>
    <button @click="handleFav">{{!favorite ? 'Favorite': 'Unfavorite'}}</button>
  </div>
</template>


<script>
export default {
  name: "Card",
  props: {
    recipe: {
      type: Object,
      required: true
    },
    index: Number,
    selected: Array
  },
  data() {
    return {
      favorite: false
    };
  },
  methods: {
    handleFav: function() {
      if (!this.favorite) {
        this.$emit("add-to-cart", {
          name: this.recipe.name,
          ingredients: this.recipe.ingredients,
          index: this.index
        });
      } else {
        this.$emit("remove-from-cart", {
          name: this.recipe.name,
          ingredients: this.recipe.ingredients,
          index: this.index
        });
      }
      this.favorite = !this.favorite;
    }
  },
  mounted() {
    console.log(" Hi ", this.selected);
    if (this.selected && this.selected.indexOf(this.index) != -1) {
      this.favorite = true;
    }
  },
  watch: {
    selected: function(val) {
      this.favorite = val && val.indexOf(this.index) !== -1 ? true : false
    }
  }
};
</script>
