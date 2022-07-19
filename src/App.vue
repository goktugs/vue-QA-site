

<template>
  <router-view name="AppHeader"/>
  <router-view/>
  <AppLoading />
</template>

<script>
import AppLoading from "@/components/AppShared/AppLoading.vue"

export default {
    components: {AppLoading},
  mounted() {
    this.$store.dispatch("initApp");
  },
};
</script>