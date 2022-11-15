<template>
  <div class="home">

    <field-add-task/> 
    <task/>

    <list-tasks
    v-if="$store.state.tasks.length"
    />

    <div
    v-else
    >
      <v-icon 
      class="dark--text text-h1 d-flex justify-center align-self-center">
        mdi-check-underline
      </v-icon>
      <div
      class="dark--text text-h3 d-flex justify-center"
      >
      No tasks
      </div>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'HomeView',
       components: {
        'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
        'list-tasks': require("@/components/Todo/ListTasks.vue").default
       }
      }
</script>
