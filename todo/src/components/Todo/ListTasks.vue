<template>
    <v-list 
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
      
</template>

<script>
export default {

}
</script>

<style>

</style>