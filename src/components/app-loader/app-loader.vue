<template>
  <div class="app-loader flex justify-center items-center py-6">
    <slot>
      <IconLoading class="w-8 h-8 fill-emerald-400 animate-spin"/>
    </slot>
  </div>
</template>
<script lang="ts" src="./app-loader.ts"></script>
