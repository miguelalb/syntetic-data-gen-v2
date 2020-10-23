<template>
  <v-container class="d-flex justify-center"> 
    <div class="col-sm-6">
      <v-row>
        <v-col>
          <faker-form></faker-form>
          <br>
          <tables></tables>
        </v-col>
      </v-row>
    </div>
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
    Tables
  },
  data(){
      return {
      }
  }
  
};
</script>