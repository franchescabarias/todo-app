<template>
  <v-app id="inspire">

    <!--toolbar-->
    <v-app-bar app color="#fcb69f" dark flat clipped-left prominent class="blue darken-4  elevation-10" src="/forest.jpg"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="font-weight-bold">TODO</v-app-bar-title>
      <v-app-bar-title>App</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    
    <!--navigation drawer-->
    <v-navigation-drawer 
    app 
    v-model="drawer" 
    clipped 
    class="white rounded-tl-0 elevation-10">
    
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title" :to='item.to'
          link
        >
          <v-list-item-icon>
            <v-icon class="text--dark">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text--dark">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--routing-->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null, 
      items: [
          { title: 'Today', icon: 'mdi-brightness-5', to: '/'},
          { title: 'Important', icon: 'mdi-bookmark-multiple-outline'},
          { title: 'Completed', icon: 'mdi-checkbox-multiple-marked'},
          { title: 'About', icon: 'mdi-help-box', to: '/about'},
        ],
    }),
  }
</script>