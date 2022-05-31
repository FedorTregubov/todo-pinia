<template>
  <div
    class="todo-list-item flex justify-between items-center py-2 px-2 cursor-pointer"
    @click="onComplete"
  >
    <span class="flex items-center">
      <IconCheck
        v-if="item.completed"
        class="todo-list-item__icon-check w-4 h-4 mr-2 fill-emerald-400"
      />

      <span
        class="todo-list-item__title"
        :class="item.completed ? 'text-gray-400' : 'text-gray-600'"
      >
        {{ item.title }}
      </span>
    </span>

    <AppButton
      class="ml-2"
      :button-type="AppButtonTypes.DANGER"
      @click.stop="onDelete"
    >
      <IconTrash class="todo-list-item__icon-delete w-4 h-4 fill-white" />
    </AppButton>
  </div>
</template>
<script lang="ts" src="./todo-list-item.ts"></script>
