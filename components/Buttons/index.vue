<template>
  <div>
    <!-- The form to add new button -->
    <add-new @add-new="addNew" />
    <!-- buttons list -->
    <div class="p-grid p-fluid">
      <div
        v-for="button in buttons"
        :key="button.id"
        class="p-buttonset p-mx-2 p-mb-2"
      >
        <!-- The checkbox for remove button -->
        <div class="remove-button p-button p-button-outlined p-button-success">
          <Checkbox
            v-model="button.checked"
            :binary="true"
            @click="removeButton(button)"
          />
        </div>
        <!-- the button for get github repos -->
        <Button
          :label="button.value"
          class="p-button-success"
          :class="button.id === selectedButton.id ? '' : 'p-button-outlined'"
          @click="onShowList(button)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// The component for buttons list.

import AddNew from './AddNew'

export default {
  name: 'Buttons',
  components: {
    AddNew,
  },
  data() {
    return {
      // buttons list
      buttons: [
        { id: 1, value: 'vue', checked: false },
        { id: 2, value: 'nuxt', checked: false },
      ],
      // Selected button that showed github repos
      selectedButton: null,
    }
  },
  created() {
    // when page load, get vue repos as default
    this.onShowList(this.buttons[0])
  },
  methods: {
    // Show the github repositories
    onShowList(button) {
      if (!button) button = { value: '' }
      this.selectedButton = button
      this.$emit('on-show-list', this.selectedButton.value)
    },
    // Add new button
    addNew(newButton) {
      // Current buttons list
      const buttons = [...(this.buttons ?? [])]
      // If added button exist in buttons, true
      const isExist = buttons.some(
        (button) => button.value.toLowerCase() === newButton.toLowerCase()
      )

      // Current max id of buttons
      const maxId =
        buttons.length > 0 ? buttons.sort((a, b) => b.id - a.id)[0].id : 0

      // If the new button not exist in buttons, add
      if (!isExist) {
        const button = {
          id: maxId + 1,
          value: newButton,
          checked: false,
        }
        // add new button
        this.buttons.push(button)
        // show list
        this.onShowList(button)
      }
    },
    // Remove button
    removeButton(button) {
      // index of selected button
      let index = this.buttons.findIndex(function (i) {
        return i.id === button.id
      })

      // Remove button
      this.buttons.splice(index, 1)

      // Show list of before button
      if (button.id === this.selectedButton.id) {
        index = index > 0 ? index - 1 : index

        this.onShowList(this.buttons[index])
      }
    },
  },
}
</script>

<style scoped>
.remove-button {
  max-width: 2.357rem;
  min-width: 2.357rem;
  padding: 0.5rem;
  border-right: 0 !important;
  cursor: default;
}
</style>>
