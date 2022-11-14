<template>
  <div class="home">
    <div class=" ml-2 mt-6 d-flex">
      <v-icon 
      class="text-h4"
      >
        mdi-brightness-5
      </v-icon>
      <div class="font-weight-bold dark--text text-h4 text-left pl-3">Today</div> 
    </div>

      <!--text field-->
    <v-text-field
            v-model="newTaskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
            :class="{ 'error' : newTaskTitle.length > 500 }"
            class="pa-3 blue--text pt-5"
            outlined
            hide-details
            clearable 
            label="Enter task"
            append-icon="mdi-plus-box"
          ></v-text-field>

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

            <v-list-item-content>
              <!--strikethrough line when done-->
              <v-list-item-title
              :class="{ 'text-decoration-line-through' : task.done }"
              >
              {{ task.title }}
            </v-list-item-title>
            </v-list-item-content>

            <!--delete-->
            <v-list-item-action>
              <v-btn icon
              @click.stop="$store.commit('deleteTask', task.id)"
              >
                <v-icon 
                color="dark ">mdi-delete-sweep</v-icon>
              </v-btn>
              <v-btn icon
              @click.stop="deleteTask(task.id)"
              >
              
              </v-btn>
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
    data() {
      return {
        newTaskTitle: '',
        // Examples
        
      }
      }, 
      methods: {
        addTask() {
          this.$store.commit('addTask', this.newTaskTitle)
          this.newTaskTitle = ''
        },
        error() {
         return
        }
      }
    }
</script>
