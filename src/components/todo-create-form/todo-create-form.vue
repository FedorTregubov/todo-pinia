<template>
  <form
    class="todo-create-form"
    @submit.prevent="onCreate"
  >
    <div class="flex justify-between items-center">
      <AppInput
        class="flex-1"
        v-model.trim="title"
        placeholder="Type new item"
      />
      <AppButton
        class="ml-4 h-8 px-6 text-white"
        type="submit"
      >
        Add
      </AppButton>
    </div>
  </form>
</template>
<script lang="ts" src="./todo-create-form.ts"></script>
