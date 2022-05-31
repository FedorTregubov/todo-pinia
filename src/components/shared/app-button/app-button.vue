<template>
  <button
    class="app-button inline-flex justify-center items-center h-6 px-1 rounded-md"
    :class="{
      'bg-emerald-500': buttonType === AppButtonTypes.PRIMARY,
      'bg-red-400': buttonType === AppButtonTypes.DANGER,
    }"
  >
    <slot />
  </button>
</template>
<script lang="ts" src="./app-button.ts"></script>
