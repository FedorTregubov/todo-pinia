<template>
  <div class="todo-list">
    <!--TODO: filter-->
    <!--TODO: add-todo: input + btn-add-->
    <div class="todo-list__items border-2">
      <TodoListItem
        v-for="(todo, index) in todos"
        :key="`todo-item-${todo.id}`"
        :class="{ 'border-t-2': index > 0 }"
        :item="todo"
        @complete="onComplete"
        @delete="onDelete"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./todo-list.ts"></script>
