<template>
  <div class="home">
    <div class=" ma-3">
    <p class="font-weight-bold primary--text text-h5 text-left pl-3 pt-3">Today</p>
    </div>

      <!--text field-->
    <v-text-field
            v-model="newTaskTitle"
            @click:append="addTask"
            @keyup.enter="addTask"
            :class="{ 'error' : newTaskTitle.length > 500 }"
            class="pa-3 blue--text"
            outlined
            hide-details
            clearable 
            label="Enter task"
            append-icon="mdi-plus-box"
          ></v-text-field>

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
                color="primary"
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
                color="blue darken-3 ">mdi-delete-sweep</v-icon>
              </v-btn>
              <v-btn icon
              @click.stop="deleteTask(task.id)"
              >
              <!--edit-->
              <v-btn icon
              @click="editTask(task.id)"
              >
                <v-icon 
                color="blue darken-3 ">mdi-pencil-circle</v-icon>
              </v-btn>
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
    class="primary--text text-h2 d-flex justify-center align-self-center">
      mdi-check-underline
    </v-icon>
    <div
    class="primary--text text-h4 d-flex justify-center"
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
