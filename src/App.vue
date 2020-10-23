<template>
  <v-app>
    <Sidemenu></Sidemenu>
    <navigation-bar></navigation-bar>

    <!-- Sizes your content based upon application components -->
    <v-main style="background: linear-gradient(to bottom, #81D4FA, #E0F2F1)">
      <!-- Provides the application the proper gutter -->
      <v-container fluid @>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { bus } from './main';
import Sidemenu from './components/SideMenu.vue';
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: "App",

  components: {
    Sidemenu,
    NavigationBar
  },

  data: () => ({
    //
  }),
  methods: {
    testing(){
      console.log("Hi desde app")
    }
  }
};
</script>
<style>

</style>