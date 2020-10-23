<template>
    <v-container class="d-flex justify-center">
        <div class="col-sm-8">
            <v-row>
                <v-col>
                    <v-card>
                        <editor />
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
import Editor from "@/components/Editor.vue"

export default {
  components: {
    Editor,
  },
  data() {
    return {
    }
  },
}
</script>