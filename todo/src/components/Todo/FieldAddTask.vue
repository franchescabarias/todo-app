<template>
    <v-text-field
             v-model="newTaskTitle"
             @click:append="addTask"
             @keyup.enter="addTask"
             class="pa-3 blue--text pt-5"
             outlined
             hide-details
             clearable 
             label="Enter task"
             append-icon="mdi-plus-box"
           ></v-text-field>
 </template>
 
 <script>
 export default {
   data() {
     return {
       newTaskTitle: ''
     }
   }, 
   methods: {
     addTask() {
       this.$store.dispatch('addTask', this.newTaskTitle) //when using commit - use dispatch
       this.newTaskTitle = ''
     },
       
   }
 }
 </script>
 