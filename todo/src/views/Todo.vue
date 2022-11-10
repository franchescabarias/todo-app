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
    v-if="tasks.length"
      class="pt-0"
    >
    <v-list-item-group
        v-model="settings"
        multiple
      >
      <div v-for="task in tasks" :key="task.id">
        <!--highlight when done-->
        <v-list-item
          @click="doneTask(task.id)"
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
              @click.stop="deleteTask(task.id)"
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
        tasks: [
          // {
          //   id: '1',
          //   title: 'Finish assignment',
          //   done: false
          // },
          // {
          //   id: '2',
          //   title: 'Watch Python tutorial',
          //   done: false
          // },
          // {
          //   id: '3',
          //   title: 'Do Typescript Assessment',
          //   done: false
          // },
        ],
      }
      }, 
      methods: {
        addTask() {
          let newTask = {
            id: Date.now(),
            title: this.newTaskTitle,
            done: false
          }
          this.tasks.push(newTask)
          this.newTaskTitle = ''
        },
        doneTask(id) {
          let task = this.tasks.filter(task => task.id === id)[0]
          task.done = !task.done
        },
        deleteTask(id) {
          this.tasks = this.tasks.filter(task => task.id !== id)
        },
        error() {
         return
        }
      }
    }
</script>
