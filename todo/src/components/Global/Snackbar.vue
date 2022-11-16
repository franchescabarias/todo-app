<template>
    <v-snackbar
    v-model="$store.state.snackbar.show"
    shaped
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="red"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
    data: () => ({
      text: `You've entered a task.`,
    }),
}
</script>

<style>

</style>