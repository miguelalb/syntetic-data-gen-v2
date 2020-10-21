<template>
  <v-container color="blue">
    <v-row justify="center">
      <faker-form></faker-form>
    </v-row>
  </v-container>
</template>
<script>
import FakerForm from "../components/FakerForm.vue"

export default {
  name: "Generator",
  components:{
    FakerForm
  },
  data(){
      return {
          dialog: false
      }
  }
};
</script>