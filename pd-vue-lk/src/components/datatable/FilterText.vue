<template>
  <v-text-field
      v-if="columns[columnKey].filter.type === 'text'"
      v-model="columns[columnKey].search.value"
      :type="columns[columnKey].filter.type"
      :label="columns[columnKey].filter.placeholder"
      class="p-column-filter"
      :class="{ 'column-id-filter': columns[columnKey].name === 'id' }"
      clearable
      solo
      hide-details
      @input="inputKeyup($event, columnKey)"
  ></v-text-field>
</template>

<script>
export default {
  props: ['columns', 'columnKey'],
  data: () => ({
    menu: false,
  }),
  methods: {
    inputKeyup(string, columnKey) {
      this.$emit('inputKeyup', string, columnKey)
    },
  }
}
</script>