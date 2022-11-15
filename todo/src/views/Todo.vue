<template>
  <div class="home">

    <field-add-task/> 

    <div class=" ml-2 mt-6 d-flex">
      <v-icon 
      class="text-h4"
      >
        mdi-brightness-5
      </v-icon>
      <div class="font-weight-bold dark--text text-h4 text-left pl-3">Today</div> 
    </div>


    <!--task-->
    <v-list 
    v-if="$store.state.tasks.length"
      class="pt-0"
    >
    <v-list-item-group
        v-model="settings"
        multiple
      >
      <div v-for="task in $store.state.tasks" :key="task.id">
        
        <!--highlight when done-->
        <v-list-item
          @click="$store.commit('doneTask', task.id)"
          :class="{'blue lighten-5' : task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="dark"
              ></v-checkbox>
            </v-list-item-action>

            <!--strikethrough line when done-->
            <v-list-item-content>
              <v-list-item-title
              :class="{ 'text-decoration-line-through' : task.done }"
              >
              {{ task.title }}
               </v-list-item-title>
            </v-list-item-content>

            <!--delete-->
           
            <v-list-item-action>
              <v-btn
              v-if="$vuetify.breakpoint.mdAndUp" 
              icon
              @click.stop="$store.commit('deleteTask', task.id)"
              >
                <v-icon 
                color="dark ">mdi-delete-sweep</v-icon>
              </v-btn>
             
            <v-menu
              v-else-if="$vuetify.breakpoint.smAndDown"
              offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="black"
              dark
              v-bind="attrs"
              v-on="on"
              icon
            >
            <v-icon 
            color="dark ">mdi-dots-horizontal</v-icon>
            </v-btn>
            </template>
            <v-list>
              <v-list-item
              @click.stop="$store.commit('deleteTask', task.id)"
              >
              <v-list-item-icon><v-icon 
                color="dark ">mdi-delete-sweep</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
            </v-menu>
            </v-list-item-action>
          </template>
          </v-list-item>
          <v-divider></v-divider>
      </div>
          </v-list-item-group>
          </v-list>
      
    
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
        'field-add-task': require('@/components/Todo/FieldAddTask.vue').default
       }
      }
</script>
