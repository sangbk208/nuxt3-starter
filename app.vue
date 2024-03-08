<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
});
const { $config } = useNuxtApp();
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <Html
      :lang="head?.htmlAttrs?.lang"
      :dir="head?.htmlAttrs?.dir"
      :version="$config.public.appVersion"></Html>
    <NuxtPage />
  </NuxtLayout>
</template>
