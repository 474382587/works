Vue.component('checkbox', {
  props: ['checked', 'task'],
  template: `
    <div class="checklist">
        <input type="checkbox" @input='updateChecked' :checked ='checked'>
        <span v-show = '!edit'>
            {{task}}
            <button class='edit-button' @click='edit=true'>Edit</button>
            <button class="delete" @click ="deleteMe">delete</button>
        </span>
        <input type="text" @input='update' v-show = 'edit' @keyup.enter = 'edit =false'>
    </div>`,
  data: function() {
    return {
      edit: true
    }
  },
  methods: {
    update: function(event) {
      this.$emit('update', event.target.value)
    },
    updateChecked: function(event) {
      this.$emit('updates', event.target.checked)
    },
    deleteMe: function() {
      this.$emit('delete-me')
    }
  }
})
