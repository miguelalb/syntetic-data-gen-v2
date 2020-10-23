<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary " dark v-bind="attrs" v-on="on">
          Begin Here!
        </v-btn>
      </template>
      <v-stepper v-model="e13" vertical>
        <v-stepper-step step="1" :complete="e13 > 1">
          Select the Columns for your table
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card :elevation="0">
            <v-form>
              <v-subheader class="font-weight-bold">Select Fields:</v-subheader>
              <v-card-text class="mb-6">
                <v-select
                  v-model="payload.selectedColumns"
                  :items="$store.getters.columns"
                  multiple
                  chips
                  hint="Pick the columns for your dataset"
                  persistent-hint
                ></v-select>
              </v-card-text>
            </v-form>
          </v-card>
          <v-btn color="primary" @click="e13 = 2"> Continue </v-btn>
          <v-btn text @click="cancel"> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step step="2" :complete="e13 > 2">
          Select the number of rows for your table
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-card class="mb-6" :elevation="0">
            <v-form>
              <v-subheader class="font-weight-bold"
                >Select the number of rows:</v-subheader
              >
              <v-card-text>
                <v-slider
                  v-model="payload.numRows"
                  step="10"
                  max="200"
                  class=""
                  thumb-color="orange darken-3"
                  thumb-label
                ></v-slider>
              </v-card-text>
            </v-form>
          </v-card>
          <v-btn 
            color="success"
            class="mr-4"
            @click="addColumnLocal"
            >
              Generate Data
            </v-btn>
            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
            <v-btn
            color="warning"
            @click="cancel"
            >
                Cancel
            </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-dialog>
  </div>
</template>
<script>
import { bus } from "../main";

export default {
  name: "FakerForm",
  data() {
    return {
      dialog: false,
      e13: 1,
      payload: {
        selectedColumns: [],
        numRows: 10,
      },
    };
  },
  methods: {
    reset() {
      this.payload.selectedColumns = [];
      this.payload.numRows = 10;
      this.e13 = 1;
    },
    cancel() {
      this.payload.selectedColumns = [];
      this.payload.numRows = 10;
      this.e13 = 1;
      this.dialog = false;
    },
    addColumnLocal() {
      bus.$emit("selected-columns", this.payload);
      this.dialog = false;
      this.e13 = 1;
      this.payload.selectedColumns = [];
      this.payload.numRows = 10;
    },
  },
};
</script>