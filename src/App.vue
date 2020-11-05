<template>
  <v-app>
    <top-nav></top-nav>
    <div class="main-container">
      <side-bar></side-bar>

      <!-- Sizes your content based upon application components -->
      <v-main id="main">
        <!-- Provides the application the proper gutter -->
        <v-container fluid @>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { bus } from "./main";
// import Sidemenu from './components/SideMenu.vue';
// import NavigationBar from './components/NavigationBar.vue'
import TopNav from "./components/TopNav.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",

  components: {
    // Sidemenu,
    TopNav,
    SideBar,
    //NavigationBar
  },

  data: () => ({
    //
  }),
  methods: {
    testing() {
      console.log("Hi desde app");
    },
  },
};
</script>
<style>
:root {
  --color-palette1: #011f4b;
  --color-palette2: #03396c;
  --color-palette3: #005b96;
  --color-palette4: #6497b1;
  --color-palette5: #b3cde0;
}

* {
  box-sizing: border-box;
}
v-app {
  height: 100vh !important;
}
#main {
  background: var(--color-palette5);
}

.main-container {
  display: flex;
  flex-direction: row;
}

.nav-div {
  display: flex;
  flex-direction: row;
}

router-link {
  text-decoration: none;
}
</style>