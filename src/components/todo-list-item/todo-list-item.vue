<template>
  <div
    class="todo-list-item flex justify-between items-center py-2 px-2 bg-white"
    :class="itemStatus === LOAD_STATUSES.IS_LOADING ? 'cursor-default' : 'cursor-pointer'"
    @click="onComplete"
  >
    <span class="flex items-center">
      <span class="todo-list-item__icon-check mr-2">
        <IconLoading
          v-if="itemStatus === LOAD_STATUSES.IS_LOADING"
          class="w-4 h-4 fill-emerald-400 animate-spin"
        />

        <IconCheck
          v-else-if="item.completed"
          class="w-4 h-4 fill-emerald-400"
        />
      </span>

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
      :is-disabled="itemStatus === LOAD_STATUSES.IS_LOADING"
      @click.stop="onDelete"
    >
      <IconTrash class="todo-list-item__icon-delete w-4 h-4 fill-white" />
    </AppButton>
  </div>
</template>
<script lang="ts" src="./todo-list-item.ts"></script>
