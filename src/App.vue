
<i18n lang="yaml">
en:
  MESSAGE: Hello Vue 3 + TypeScript + Vite
</i18n>

<template lang="pug">
img(alt="Vue logo" src="./assets/logo.png")
HelloWorld(:msg="t('MESSAGE')")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup: () => {
    const { t } = useI18n({
      inheritLocale: true,
    });

    return { t };
  },
});
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
