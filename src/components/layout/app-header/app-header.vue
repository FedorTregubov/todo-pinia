<template>
  <header class="container mx-auto bg-emerald-500 py-4">
    <div class="flex justify-between items-center">
      <h1
        class="font-semibold text-white uppercase"
        data-test="app-header__title"
      >
        {{ APP_TITLE }}
      </h1>

      <nav class="ml-2" data-test="app-header__nav">
        <ul class="flex justify-end">
          <li class="text-white">About</li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script lang="ts" src="./app-header.ts"></script>
