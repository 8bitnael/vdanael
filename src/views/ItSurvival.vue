<template>
  <search-template :items="sortedItems" :label="label"></search-template>
</template>

<script>
import SearchTemplate from "@/components/SearchTemplate.vue";
import jitems from "../data/jsnippets.json";
export default {
  name: "I.T.",
  components: {
    SearchTemplate,
  },
  data() {
    return {
      items: jitems.items,
      label: "JAVA"
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