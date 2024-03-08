<script lang="ts" name="LanguageSwitcher" setup>
const { locales, setLocale } = useI18n();

const onChangeLanguage = (code: string) => {
  setLocale(code);
};

const classes = {
  container: 'flex items-center gap-2',
  flagImg: 'size-4'
};
</script>

<template>
  <div :class="classes.container">
    <button v-for="{ code, flag } in locales" :key="code" @click="() => onChangeLanguage(code)">
      <img :src="`/assets/flags/${flag}.svg`" :alt="flag" :class="classes.flagImg" />
    </button>
  </div>
</template>
