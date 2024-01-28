<template>
  <search-template :items="sortedItems" :label="label"></search-template>
</template>

<script>
import SearchTemplate from "@/components/SearchTemplate.vue";
import mlitems from "../data/machinelearning.json";
export default {
  name: "A.I.",
  components: {
    SearchTemplate,
  },
  data() {
    return {
      items: mlitems.items,
      label: "ML"
    };
  },
  computed: {
    sortedItems() {
      return this.items.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
      });
    },
  },
};
</script>

<style scoped>
</style>