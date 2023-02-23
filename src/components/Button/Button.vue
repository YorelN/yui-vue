<script setup lang="ts">
  export interface ButtonProps {
    variant?: string;
    dark?: boolean;

    color?: string;
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    variant: "primary",
    dark: false,
    color: "#0068ff",
  });

  const { variant } = props;
</script>
<template>
  <button class="btn" :class="{ variant, dark, color }">
    <slot />
  </button>
</template>
