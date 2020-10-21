<template>
  <v-container class="d-flex justify-center"> 
    <div class="col-sm-5">
    <v-row>
      <v-col >
        <faker-form></faker-form><br>
      <v-card>
        <tables  :headers="selectedColumns"></tables>
      </v-card>
      <!-- <button @click="columnsSelected">Hola</button> -->
      <br><br>
      <v-btn
      @click="fakeTest"
      >Test Faker</v-btn>
      </v-col>
    </v-row></div>
  </v-container>
</template>
<script>
import FakerForm from "../components/FakerForm.vue"
import Tables from "../components/Table.vue"
import { bus } from '../main';

export default {
  name: "Generator",
  components:{
    FakerForm,
    Tabless
  },
  data(){
      return {
          dialog: false,
          selectedColumns: []
      }
  },
  methods: {
    fakeTest(){
      console.log(this.$faker().name.firstName());
    }
  }
};
</script>