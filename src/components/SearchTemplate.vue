<template>
  <v-container fluid>
    <v-responsive class="align-center text-center fill-height">
      <v-container class="vd-container" border  fluid>
        <v-row>
          <v-col cols="12">
            <v-combobox
              v-model="selectedItems"
              :items="this.items"
              label="PERFORM A SEARCH BY ARGUMENTS"
              multiple
              chips
              class="primary--text">
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                  color="primary">
                  <v-avatar class="accent white--text" left></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="auto"
            class="d-flex justify-center flex-row ml-auto mr-auto">
            <v-btn
              class="ma-auto text-capitalize"
              size="x-large"
              block rounded="xl"
              @click="clearform"
              color="#2196F3"
              >clear</v-btn>
            <v-btn
              class="ma-auto text-capitalize"
              size="x-large"
              block rounded="xl"
              color="rgba(212, 91, 4, 0.907)"
              @click="openIframe"
              >search</v-btn>
          </v-col>
        </v-row>
      </v-container>
   <v-divider></v-divider>
      <iframe
        v-if="showIframe"
        :src="iframeSrc"
        :height="iframeHeight"
        :width="iframeWidth"
        frameborder="0"
        allowfullscreen
        class="vd-ifcontainer" border  fluid
      />
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "SearchTemplate",
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedItems: [],
      items: this.items,
      baseUrl: "https://8bitnael.blogspot.com/search/label/?q=",
      iframeSrc: "",
      iframeHeight: "700",
      iframeWidth: "100%",
      showIframe: false, // inizialmente impostiamo la variabile a false
    };
  },
  mounted() {
    this.updateIframeHeight(); // chiamiamo il metodo all'inizio per impostare l'altezza dell'iframe
    window.addEventListener("resize", this.updateIframeHeight); // aggiungiamo un listener per ridimensionare l'altezza dell'iframe quando la finestra viene ridimensionata
  },
   methods: {
    composeUrl() {
      let url = this.baseUrl;
      const label = "|label:";
      if (this.selectedItems.length === 0) {
        // La lista è vuota, fai qualcosa
        console.log("La lista è vuota");
        url = url + label + this.label;
      } else {
        console.log("La lista non è vuota");
        // Rimuovi gli spazi vuoti dalle stringhe nell'array selectedItems
        const items = (this.selectedItems = this.selectedItems.map((item) =>
          item.replace(/\s+/g, "")
        ));
        console.log(items);
        const concatenatedItems = this.selectedItems.join(label);
        url = url + label + concatenatedItems;
      }
      return url;
    },
    openIframe() {
      const url = this.composeUrl();
      console.log(this.selectedItems);
      console.log(url);
      this.iframeSrc = url;
      this.showIframe = true; // impostiamo la variabile a true per mostrare l'iframe
    },
    clearform() {
      this.selectedItems = [];
      this.showIframe = false; // impostiamo la variabile a true per mostrare l'iframe
    },
    updateIframeHeight() {
      this.iframeHeight = window.innerHeight + "px"; // impostiamo l'altezza dell'iframe in base all'altezza della finestra del browser
    },
  }
}
</script>

<style scoped>
.vd-container {
  border: 1px solid rgba(242, 242, 242, 0.907);
}
.vd-ifcontainer {
  border: 1px solid rgba(243, 244, 247, 0.907);
}
</style>
