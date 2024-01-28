<template>
   <v-spacer></v-spacer>
  <v-card
    class="mx-auto"
    max-width="1024"
  >
    <v-img
      src="@/assets/imgs/the-deep-space.png"
      height="500px"
      cover
    ></v-img>

    <v-card-title>
      Vdanael: A Taste of Neurons
    </v-card-title>

    <v-card-subtitle>
      An unique and innovative platform combining artificial intelligence, IT tips, and electronic music.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text">
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Welcome to 'A Taste of Neurons,' a cutting-edge digital platform that seamlessly merges the realms of artificial intelligence, IT expertise, and captivating electronic music.
          This platform offers a unique fusion of scientific exploration, technological advancements, and artistic expression. 
          From thought-provoking articles on AI breakthroughs to practical IT tutorials, and from mind-bending electronic music productions to immersive audiovisual experiences, 
          'A Taste of Neurons' is a one-of-a-kind destination for intellects, creatives, and tech enthusiasts alike. 
          Join with me on this multidimensional journey as we empower and inspire the innovators of tomorrow.

          
          <!--
          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
           -->

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
 export default {
    data: () => ({
      show: false,
      messages: [
        {
          from: 'Eng Hub',
          message: `Empowering English Language.`,
          time: '',
          color: 'blue',
        },
        {
          from: 'IT Tips Hub',
          message: 'Empowering Technological Literacy and Efficiency',
          time: '',
          color: 'green',
        },
        {
          from: 'AI Hub',
          message: 'Exploring the Frontiers of Artificial Intelligence',
          time: '',
          color: 'yellow',
        },
        {
          from: 'AI Music Hub',
          message: ` Exploring the Intersection of Music and Artificial Intelligence`,
          time: '',
          color: 'red',
        },
      ],
    }),
  }
  </script>
  
  <style scoped>
  /* Aggiungiamo qui il nostro CSS personalizzato */
  </style>