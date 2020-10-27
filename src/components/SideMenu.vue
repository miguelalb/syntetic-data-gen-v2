<template>
  <v-card>
    <v-navigation-drawer app 
    permanent
    id="nav-menu" 
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="../assets/anomuser.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Miguel Acevedo
            </v-list-item-title>
            <v-list-item-subtitle>@miguelacevedo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <br />

      <v-list nav dense>
        <router-link to="/" tag="button">
        <v-list-item link class="mb-4">
          <v-btn class="menu-btn" color="success" x-small fab>
            <v-icon>home</v-icon>
          </v-btn>
          <div tag="button" class="title pl-2"
            >Home</div>
        </v-list-item></router-link>
        
        <router-link to="/generator" tag="button">
          <v-list-item link class="mb-4">
          <v-btn class="menu-btn" color="success" x-small fab>
            <v-icon>mdi-database-refresh</v-icon>
          </v-btn>
          <div tag="button" class="title pl-2"
            >Generate Data</div></v-list-item>
        </router-link>

        <router-link to="/text-editor" tag="button">
        <v-list-item link class="mb-4">
          <v-btn class="menu-btn" color="success" x-small fab>
            <v-icon>text_format</v-icon>
          </v-btn>
          <div class="title pl-2"
            >Create Document</div>
        </v-list-item></router-link>
      </v-list>
      <!-- -->
    </v-navigation-drawer>
  </v-card>
</template>
<script>


export default {
  name: "Sidemenu",
  data() {
    return {

    };
  },
  methods: {},
};
</script>
<style>
  #nav-menu {
    background: linear-gradient(to bottom, #9bc693, #939bc6);
  }

  
</style>