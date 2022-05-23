<template>
  <v-select
    v-model="columns[columnKey].search.value"
    :label="columns[columnKey].filter.placeholder"
    :items="columns[columnKey].filter.options"
    class="p-column-filter"
    clearable
    solo
    hide-details
    @input="inputKeyup($event, columnKey)"
  >
    <template v-slot:item="{ item }">
      <span
        v-if="columns[columnKey].class.dynamic"
        class="data-table-select-option"
        :class="columns[columnKey].class.name + item"
      >
        {{
          columns[columnKey].filter.optionsText
            ? columns[columnKey].filter.optionsText[item]
            : item
        }}
      </span>
      <span v-else class="data-table-select-option">
        {{
          columns[columnKey].filter.optionsText
            ? columns[columnKey].filter.optionsText[item]
            : item
        }}
      </span>
    </template>

    <template v-slot:selection="{ item, index }">
      <span
        v-if="columns[columnKey].class.dynamic"
        class="data-table-select-option"
        :class="columns[columnKey].class.name + item"
      >
        {{
          columns[columnKey].filter.optionsText
            ? columns[columnKey].filter.optionsText[item]
            : item
        }}
      </span>
      <span v-else class="data-table-select-option">
        {{
          columns[columnKey].filter.optionsText
            ? columns[columnKey].filter.optionsText[item]
            : item
        }}
      </span>
    </template>
  </v-select>
</template>

<script>
export default {
  props: ["columns", "columnKey"],
  data: () => ({
    menu: false,
  }),
  methods: {
    inputKeyup(string, key) {
      this.$emit("inputKeyup", string, key);
    },
  },
};
</script>
