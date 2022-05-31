<template>
  <div class="todo-list">
    <TodoCreateForm @create="onCreate" />

    <div class="todo-list__items mt-4">
      <TodoListItem
        v-for="(todo, index) in todos"
        :key="`todo-item-${todo.id}`"
        :class="{ 'border-t': index > 0 }"
        :item="todo"
        @complete="onComplete"
        @delete="onDelete"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./todo-list.ts"></script>
