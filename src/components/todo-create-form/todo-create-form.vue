<template>
  <form class="todo-create-form" @submit.prevent="onSubmit">
    <div class="flex justify-between items-center">
      <AppInput
        class="flex-1"
        v-model.trim="title"
        placeholder="Type new item"
      />
      <AppButton
        class="ml-4 h-8 py-4 px-6 text-white"
        type="submit"
        :is-disabled="isSubmitDisabled"
      >
        Add
      </AppButton>
    </div>
  </form>
</template>
<script lang="ts" src="./todo-create-form.ts"></script>
