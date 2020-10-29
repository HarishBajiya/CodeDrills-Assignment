<!-- 
//
//Code by Harry
//
This components is for appBar which contains codedrills logo and a btn for routing purpose 
-->

<template>
  <v-app-bar app dark elevation="2">
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2 pa-3"
        src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/okgl3wpytk3rnjbv9lax"
        transition="scale-transition"
        width="40"
      />

      <h1 class="pa-3 toolbar-title primary--text">CodeDrills</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/submissions" text>
      <span class="ma-2 pa-3 primary--text subtitle-1 font-weight-bold"
        >Submissions</span
      >
    </v-btn>
  </v-app-bar>
</template>

<script>
import solution from "../components/Solution";
export default {
  data() {
    return {
      solution,
    };
  },
};
</script>

<style scoped>
</style>