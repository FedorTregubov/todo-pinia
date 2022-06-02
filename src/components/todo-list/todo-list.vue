<template>
  <div class="todo-list">
    <TodoCreateForm @create="onCreate" />

    <AppErrorCatch v-if="todosStatus === LOAD_STATUSES.IS_ERROR" />

    <template v-else>
      <div class="todo-list__items mt-4">
        <TodoListItem
          v-for="(todo, index) in todos"
          :key="`todo-item-${todo.id}`"
          :class="{ 'border-t': index > 0 }"
          :item="todo"
        />

        <VueInfiniteScrolling
          v-bind="{
            isLoading: todosStatus === LOAD_STATUSES.IS_LOADING,
            isAppendedToBody: true,
            pagination: todosPagination,
          }"
          @load-more="onLoadMore"
        >
          <AppLoader v-if="todosStatus === LOAD_STATUSES.IS_LOADING" />
        </VueInfiniteScrolling>
      </div>
    </template>
  </div>
</template>
<script lang="ts" src="./todo-list.ts"></script>
