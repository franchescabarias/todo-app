<template>
  <div class="home">
    <v-list class="pt-0">

      <v-list-item-group
        v-model="settings"
        multiple
      >
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{'teal lighten-5' : task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
              :class="{ 'text-decoration-line-through' : task.done }"
              >
              {{ task.title }}
            </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>

  export default {
    name: 'HomeView',
    data() {
      return {
        tasks: [
          {
            id: '1',
            title: 'First task',
            done: false
          },
          {
            id: '2',
            title: 'Second task',
            done: false
          },
          {
            id: '3',
            title: 'Third task',
            done: false
          }
        ]
      }
      }, 
      methods: {
        doneTask(id) {
          let task = this.tasks.filter(task => task.id === id)[0]
          task.done = !task.done
        }
      }
    }
</script>
