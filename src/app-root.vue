<template>
  <div class="app-root flex flex-col h-full">
    <div class="grow-0 shrink-0 basis-0">
      <AppHeader />
    </div>

    <main class="grow-1 shrink-1 basis-full">
      <TodoList class="container p-0 mx-auto my-10" />
    </main>

    <div class="grow-0 shrink-0 basis-0">
      <AppFooter />
    </div>
  </div>
</template>
<script lang="ts" src="./app-root.ts"></script>
