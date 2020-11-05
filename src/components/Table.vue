<template>
  <div>
    <!-- DATA TABLE -->
    <v-card >
      <div v-if="render">
        <v-btn
      icon
      class="float-right"
      
      >
        <vue-json-to-csv 
      :json-data="items"
      > <v-icon>cloud_download</v-icon>
      </vue-json-to-csv>
      </v-btn>
      <v-btn
      icon
      class="float-right"
      @click="refreshTable"
      ><v-icon>refresh</v-icon></v-btn>
      </div>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1 mb-5"
      ></v-data-table>

      
    </v-card>
  </div>
</template>

<script>
import { bus } from "../main";
import VueJsonToCsv from 'vue-json-to-csv'

export default {
  name: "tables",
  data() {
    return {
      columns: [],
      items: [],
      nRows: 0,
      headers: [],
      render: false,
    }
  },
  components: {
    VueJsonToCsv
  },
  created() {
    bus.$on("selected-columns", (data) => {
      this.columns = data.selectedColumns;
      console.log("Received Data from parent!...");
      console.log("columns: ");
      console.log(this.columns);
      this.nRows = data.numRows;
      console.log("rows: ");
      console.log(this.nRows);
      console.log("Current Items:");
      console.log(this.items);
      this.items = this.checkColumn(this.columns, this.nRows);
      this.render = true;
      console.log("Finally, the items are:");
      console.log(this.items);
      console.log("And the headers...");
      this.headers = [];
      for (let i = 0; i < this.columns.length; i++) {
        var col = this.columns[i];
        this.headers.push({
          text: col,
          align: "start",
          sortable: true,
          value: col,
        });
      }
      console.log(this.headers);
    });
  },
  methods: {
    refreshTable (){
      this.headers = [],
      this.items = []
    },
    checkColumn(columns, n) {
      console.log("Entered Check Columns...");
      let ls = [];
      for (let i = 0; i < columns.length; i++) {
        let col = columns[i];
        col = col.trim().toLowerCase();

        if (col.includes("first")) {
          if (ls.length > 0) {
            for (let j = 0; j < n; j++) {
              var ob = ls[j];
              ob["First Name"] = this.$faker().name.firstName();
            }
          } else {
            for (let j = 0; j < n; j++) {
              var ini = {};
              ini["First Name"] = this.$faker().name.firstName();
              ls.push(ini);
            }
          }
        } else if (col.includes("last")) {
          if (ls.length > 0) {
            for (let j = 0; j < n; j++) {
              var ob = ls[j];
              ob["Last Name"] = this.$faker().name.lastName();
            }
          } else {
            for (let j = 0; j < n; j++) {
              var ini = {};
              ini["Last Name"] = this.$faker().name.lastName();
              ls.push(ini);
            }
          }
        } else if (col.includes("title")) {
          if (ls.length > 0) {
            for (let j = 0; j < n; j++) {
              var ob = ls[j];
              ob["Title"] = this.$faker().name.jobTitle();
            }
          } else {
            for (let j = 0; j < n; j++) {
              var ini = {};
              ini["Title"] = this.$faker().name.jobTitle();
              ls.push(ini);
            }
          }
        } else if (col.includes("company")) {
          if (ls.length > 0) {
            for (let j = 0; j < n; j++) {
              var ob = ls[j];
              ob["Company"] = this.$faker().company.companyName();
            }
          } else {
            for (let j = 0; j < n; j++) {
              var ini = {};
              ini["Company"] = this.$faker().company.companyName();
              ls.push(ini);
            }
          }
        } else if (col.includes("phone")) {
          if (ls.length > 0) {
            for (let j = 0; j < n; j++) {
              var ob = ls[j];
              ob["Phone Number"] = this.$faker().phone.phoneNumber();
            }
          } else {
            for (let j = 0; j < n; j++) {
              var ini = {};
              ini["Phone Number"] = this.$faker().phone.phoneNumber();
              ls.push(ini);
            }
          }
        }
      }
      console.log("Finished Check Columns");
      return ls;
    },
  },
};
</script>
