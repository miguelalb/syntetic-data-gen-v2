<template>
  <v-app>
    <Sidemenu></Sidemenu>
    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
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

export default {
  name: "App",

  components: {
    Sidemenu
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
