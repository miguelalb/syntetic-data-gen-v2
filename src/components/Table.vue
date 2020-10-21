<template>
  <div>
    <div>
      <v-data-table
        :headers="colums"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>
<script>
import { bus } from '../main';

export default {
  name: "tables",
  props: {
      headers: Array,
      n: Number
  },
  data() {
      return  {
          columns: [],
          items: []
      }
  },
  created() {
      bus.$on('selected-columns', (data)=>{
        data.selectedColumns.forEach(ele => {
            this.columns.push({text:ele, align: 'start', sortable: true, value: ele});
        data.items.forEach()
        });
        console.log(data);
        console.log(this.fromEvent);
      })
  }
};
</script>