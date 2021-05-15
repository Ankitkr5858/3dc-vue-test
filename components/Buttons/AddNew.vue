<template>
  <div class="p-grid p-fluid p-mb-3">
    <div class="p-col-12">
      <div class="p-inputgroup">
        <!-- button text -->
        <InputText
          v-model="newButton"
          placeholder="Enter new button"
          :class="isInvalid && !newButton ? 'p-invalid' : ''"
        />
        <!-- add button -->
        <Button
          icon="pi pi-plus"
          label="Add new"
          class="p-button-success"
          @click="addNew"
        />
      </div>
    </div>
  </div>
</template>

<script>
// The component for add new button.
export default {
  name: 'AddNew',
  data() {
    return {
      newButton: '', // New button text
      isInvalid: false,
    }
  },
  methods: {
    // Add new button
    addNew() {
      if (!this.newButton) {
        this.isInvalid = true
        return
      }
      // Emit to parent component.
      this.$emit('add-new', this.newButton)
      // Set initial value to input form.
      this.newButton = ''
      this.isInvalid = false
    },
  },
}
</script>

<style>
</style>
