<template>
  <div class="home">
    <div class="sort" style="margin: 20px auto;">
      filter by with/without water
      <button @click="handleFilter">
        With
        <span v-if="filterApplied">out</span> Water
      </button>
      <button @click="handleReset">Reset Filter</button>
    </div>
    <div class="recipes">
      <Card
        @remove-from-cart="handleRemoveFromCart"
        @add-to-cart="handleAddToCart"
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipe="recipe"
        :index="index"
        :selected="previousSelection"
      />
    </div>
    <div class="selected-ingredients">
      <ol>
        <li v-for="(item, index) in requiredIngredients" :key="index">
          {{
          item
          }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "HomePage",
  components: {
    Card
  },
  data() {
    return {
      originalRecipes: [
        {
          name: "Risotto",
          type: "Italian",
          cook_time: 60,
          ingredients: [
            "Rice",
            "Chicken Stock",
            "Parmesan Cheese",
            "White Wine",
            "Butter",
            "Salt",
            "Pepper",
            "Peas"
          ]
        },
        {
          name: "Enchiladas",
          type: "Mexican",
          cook_time: 50,
          ingredients: [
            "Tomato Sauce",
            "Tomato",
            "Corn Tortillas",
            "Cheddar Cheese",
            "Onion",
            "Olives",
            "Salt",
            "Chicken"
          ]
        },
        {
          name: "Hummus",
          type: "Middle Eastern",
          cook_time: 10,
          ingredients: ["Garlic", "Chickpeas", "Salt", "Tahini", "Hot Sauce"]
        },
        {
          name: "Pancakes",
          type: "Breakfast",
          cook_time: 25,
          ingredients: [
            "Milk",
            "Flour",
            "Sugar",
            "Butter",
            "Baking Powder",
            "Baking Soda",
            "Egg",
            "Salt"
          ]
        },
        {
          name: "Borscht",
          type: "Russian",
          cook_time: 75,
          ingredients: [
            "Water",
            "Potato",
            "Beets",
            "Butter",
            "Onion",
            "Salt",
            "Celery",
            "Carrot",
            "Cabbage",
            "Pepper",
            "Vinegar",
            "Tomato"
          ]
        },
        {
          name: "Pierogi",
          type: "Polish",
          cook_time: 105,
          ingredients: [
            "Butter",
            "Onion",
            "Salt",
            "Pepper",
            "Potato",
            "Egg",
            "Flour",
            "Baking Powder"
          ]
        },
        {
          name: "Pupusa",
          type: "Salvadoran",
          cook_time: 40,
          ingredients: ["Masa", "Water", "Queso Fresco"]
        },
        {
          name: "Fried Rice",
          type: "Chinese",
          cook_time: 28,
          ingredients: [
            "Onion",
            "Oil",
            "Rice",
            "Egg",
            "Soy Sauce",
            "Sesame Oil",
            "Chicken",
            "Carrot",
            "Peas"
          ]
        }
      ],
      recipes: [
        {
          name: "Risotto",
          type: "Italian",
          cook_time: 60,
          ingredients: [
            "Rice",
            "Chicken Stock",
            "Parmesan Cheese",
            "White Wine",
            "Butter",
            "Salt",
            "Pepper",
            "Peas"
          ]
        },
        {
          name: "Enchiladas",
          type: "Mexican",
          cook_time: 50,
          ingredients: [
            "Tomato Sauce",
            "Tomato",
            "Corn Tortillas",
            "Cheddar Cheese",
            "Onion",
            "Olives",
            "Salt",
            "Chicken"
          ]
        },
        {
          name: "Hummus",
          type: "Middle Eastern",
          cook_time: 10,
          ingredients: ["Garlic", "Chickpeas", "Salt", "Tahini", "Hot Sauce"]
        },
        {
          name: "Pancakes",
          type: "Breakfast",
          cook_time: 25,
          ingredients: [
            "Milk",
            "Flour",
            "Sugar",
            "Butter",
            "Baking Powder",
            "Baking Soda",
            "Egg",
            "Salt"
          ]
        },
        {
          name: "Borscht",
          type: "Russian",
          cook_time: 75,
          ingredients: [
            "Water",
            "Potato",
            "Beets",
            "Butter",
            "Onion",
            "Salt",
            "Celery",
            "Carrot",
            "Cabbage",
            "Pepper",
            "Vinegar",
            "Tomato"
          ]
        },
        {
          name: "Pierogi",
          type: "Polish",
          cook_time: 105,
          ingredients: [
            "Butter",
            "Onion",
            "Salt",
            "Pepper",
            "Potato",
            "Egg",
            "Flour",
            "Baking Powder"
          ]
        },
        {
          name: "Pupusa",
          type: "Salvadoran",
          cook_time: 40,
          ingredients: ["Masa", "Water", "Queso Fresco"]
        },
        {
          name: "Fried Rice",
          type: "Chinese",
          cook_time: 28,
          ingredients: [
            "Onion",
            "Oil",
            "Rice",
            "Egg",
            "Soy Sauce",
            "Sesame Oil",
            "Chicken",
            "Carrot",
            "Peas"
          ]
        }
      ],
      selectedList: [],
      filterApplied: false,
      requiredIngredients: [],
      previousSelection: []
    };
  },
  props: {},
  methods: {
    handleReset() {
      this.recipes = this.originalRecipes;
      this.filterApplied = false;
    },
    handleFilter() {
      if (this.filterApplied) {
        this.recipes = this.originalRecipes.filter(e => {
          return e.ingredients.every(e => {
            return e !== "Water";
          });
        });
      } else {
        this.recipes = this.originalRecipes.filter(e => {
          return e.ingredients.some(e => {
            return e === "Water";
          });
        });
      }
      this.filterApplied = !this.filterApplied;
    },
    handleAddToCart($event) {
      console.log("Add ", $event);
      this.selectedList[$event.index] = $event.ingredients;
      console.log(this.selectedList);
      this.updateSortedList();
    },
    handleRemoveFromCart($event) {
      console.log("Remove");
      this.selectedList[$event.index] = undefined;
      console.log(this.selectedList);
      this.updateSortedList();
    },
    updateSortedList() {
      this.requiredIngredients = [];
      this.selectedList.forEach(e => {
        if (e) {
          this.requiredIngredients = this.requiredIngredients.concat(e);
        }
      });
      this.requiredIngredients = Array.from(
        new Set(this.requiredIngredients)
      ).sort();
    }
  },
  mounted() {
    var previousSelection = localStorage.getItem("selectedList");
    if (previousSelection) {
      this.selectedList = JSON.parse(previousSelection);
      this.previousSelection = this.selectedList.map((e, index) => {
        return e !== null ? index : "";
      });
      console.log("index is ", this.previousSelection);
      this.updateSortedList();
    }

    window.addEventListener("beforeunload", e => {
      // localStorage.setItem("abcde", "asdas");
      if (
        !this.selectedList.every(e => {
          return !e;
        })
      ) {
        var temp = JSON.stringify(this.selectedList);
        localStorage.setItem("selectedList", temp);
      } else {
        localStorage.setItem("selectedList", []);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.recipe {
  width: 22%;
  padding: 20px;
  border: 1px solid red;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: #e3e3e3;
}
</style>
