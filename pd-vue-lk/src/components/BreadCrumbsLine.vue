<template>
  <div class="breadcrumbs">
    <span class="breadcrumbs-first-divider"> > </span>
    <v-breadcrumbs
        :items="items"
        divider=">"
    ></v-breadcrumbs>
  </div>
</template>

<script>
import breadcrumbs from "@/resources/breadcrumbs";

export default {
  props: ['page', 'customEnd'],
  data: () => ({
    items: [],
  }),
  mounted() {
    const configItems = breadcrumbs[this.page];
    let items = [];

    for (let key in configItems) {
      items.push(configItems[key]);
    }

    if (this.customEnd) {
      items.push(this.customEnd);
    }

    this.items = items;
  }
}
</script>

<style lang="scss">
  .breadcrumbs {
    display: flex;
    align-items: center;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 42px;

    .breadcrumbs-first-divider {
      font-weight: 500;
      font-size: 19px;
      line-height: 22px;
      color: #7C7E8F!important;
    }

    .v-breadcrumbs__item {
      font-weight: 500;
      font-size: 19px;
      line-height: 22px;
      color: #7C7E8F!important;
    }
  }
</style>
