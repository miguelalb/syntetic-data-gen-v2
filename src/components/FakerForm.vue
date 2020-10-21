<template>
  <div>
    <v-dialog
    v-model="dialog"
    width="500"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Begin Here!
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="mb-3">
          <span>Faker Data Playground</span>
        </v-card-title>
        <v-form>
          <v-subheader class="font-weight-bold">Select Fields:</v-subheader>
          <v-card-text class="mb-2">
            <v-select
              v-model="payload.selectedColumns"
              :items="columns"
              multiple
              chips
              hint="Pick the columns for your dataset"
              persistent-hint
            ></v-select>
          </v-card-text>
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
          <v-card-text>
            <v-btn 
            color="success"
            class="mr-4"
            @click="generateData;dialog = false;"
            >
              Generate Data
            </v-btn>
            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
            <v-btn
            color="warning"
            @click="dialog = false"
            >
                Cancel
            </v-btn>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "FakerForm",
  data() {
    return {
        dialog: false,
        columns: ["Fist Name", "Last Name", "Title", "Company", "Phone Number"],
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
    },
  },
  computed: {
    addTable() {
      return;
    },
  },
};
</script>