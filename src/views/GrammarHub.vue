<template>
  <search-template :items="sortedItems" :label="label"></search-template>
</template>

<script>
import SearchTemplate from "@/components/SearchTemplate.vue";
import blogItems from "../data/grammarhub.json";
export default {
  name: "GrammarHub",
  components: {
    SearchTemplate,
  },
  data() {
    return {
      items: blogItems.items,
      label: "ENG"
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
  }
};
</script>

<style scoped>
 
</style>