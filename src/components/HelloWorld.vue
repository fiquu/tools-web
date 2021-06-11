<i18n lang="yaml">
en:
  SETUP: "Recommended IDE setup: {vscode} + {vetur} or {volar} (if using {setup})"
  SEE: See {readme} for more information.
  COUNT: "count is: {count}"
  EDIT: "Edit {component} to test hot module replacement."
</i18n>

<template lang="pug">
h1 {{ msg }}

i18n-t(keypath="SETUP" tag="p")
  template(#vscode)
    a(href="https://code.visualstudio.com/", target="_blank")
      | VSCode
  template(#vetur)
    a(
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur",
      target="_blank"
    )
      | Vetur
  template(#volar)
    a(href="https://github.com/johnsoncodehk/volar", target="_blank")
      | Volar
  template(#setup)
    code &lt;script setup&gt;

i18n-t(keypath="SEE" tag="p")
  template(#readme)
    code README.md

p
  a(href="https://vitejs.dev/guide/features.html", target="_blank")
    | Vite Docs
  |
  | |
  |
  a(href="https://v3.vuejs.org/", target="_blank")
    | Vue 3 Docs

button(@click="count++")
  | {{ t('COUNT', { count }) }}

i18n-t(keypath="EDIT" tag="p")
  template(#component)
    code components/HelloWorld.vue
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const { t } = useI18n({
      inheritLocale: true,
    });

    return { count, t };
  },
});
</script>

<style lang="sass" scoped>
a
  color: #42b983

label
  margin: 0 0.5em
  font-weight: bold

code
  background-color: #eee
  padding: 2px 4px
  border-radius: 4px
  color: #304455
</style>
