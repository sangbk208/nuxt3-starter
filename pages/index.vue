<script setup>
const { locales, setLocale } = useI18n();

const onChangeLanguage = (code) => {
  setLocale(code);
};

const classes = {
  container: 'p-9 space-y-4',
  flagWrapper: 'flex items-center gap-2',
  flagImg: 'size-4'
};
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.flagWrapper">
      <button v-for="{ code, flag } in locales" :key="code" @click="() => onChangeLanguage(code)">
        <img :src="`/assets/flags/${flag}.svg`" :alt="flag" :class="classes.flagImg" />
      </button>
    </div>

    <h1 class="text-h1">{{ $t('title') }}</h1>
  </div>
</template>
