<script setup>
const classes = {
  container: 'p-9 space-y-4',
  title: 'text-lg font-bold'
};
</script>

<template>
  <div :class="classes.container">
    <LanguageSwitcher />

    <h1 :class="classes.title">{{ $t('title') }}</h1>
  </div>
</template>
