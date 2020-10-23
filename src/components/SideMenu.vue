<template>
  <v-card>
    <v-navigation-drawer app 
    permanent 
    style="background: linear-gradient(to bottom, #01579B, #26A69A)"
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
        <v-list-item link class="mb-4">
          <v-btn color="success" x-small fab>
            <v-icon>home</v-icon>
          </v-btn>
          <router-link to="/" tag="button" class="title pl-2"
            >Home</router-link
          >
        </v-list-item>
        
        <v-list-item link class="mb-4">
          <v-btn color="success" x-small fab>
            <v-icon>mdi-database-refresh</v-icon>
          </v-btn>
          <router-link to="/generator" tag="button" class="title pl-2"
            >Generate Data</router-link
          >
        </v-list-item>

        <v-list-item link class="mb-4">
          <v-btn color="success" x-small fab>
            <v-icon>text_format</v-icon>
          </v-btn>
          <router-link to="textEditor" tag="button" class="title pl-2"
            >Create Document</router-link
          >
        </v-list-item>
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