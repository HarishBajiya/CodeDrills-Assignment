<template>
  <v-app>
    <appBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    appBar: () => import("@/components/appBar"),
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss">
</style>
