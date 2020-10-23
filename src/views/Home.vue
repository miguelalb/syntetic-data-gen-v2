<template>
  <v-container fluid class="home">
    <v-row justify="center">
      <v-col>
        <!-- LEFT CHART -->
        <v-card class="mx-auto text-center" 
        color= "#26A69A"
        dark
        max-width="500">
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
              :value="value1"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
              >
                <template v-slot:label="item">
                  ${{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="display-1 font-weight-thin">
              Sales Last 24h
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn
            block
            text
            >
              Go to Report
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <!-- RIGHT CHART -->
        <v-card class="mx-auto text-center" 
        color= "#26A69A"
        dark
        max-width="500">
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
              :value="value2"
              :labels="labels"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
              >
                <template v-slot:label="item">
                  {{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="display-1 font-weight-thin">
              User Registrations
            </div>
          </v-card-text>

    

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn
            block
            text
            >
              Go to Report
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <!-- BOTTOM CHART -->
        <v-card 
        class="mx-auto text-center"
        color="#26A69A"
        dark
        max-width="1200"
        >
        <v-card-text>
          <v-sheet
          color="rgba(0, 0, 0, .12)"
          >
          <v-sparkline
          :value="value3"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          color="rgba(255, 255, 255, .7)"
          :stroke-linecap="lineCap"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          show-labels="true"
          auto-draw
          >
          <template v-slot:label="item"
          >
              {{ item.value }}
          </template>
          </v-sparkline>

          </v-sheet>
        </v-card-text>

        <v-card-text>
            <div class="display-1 font-weight-thin">
              Number of Visitors
            </div>
            <div class="display-0 font-weight-thin">
              Performance within the past 30 days
            </div>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn
            block
            text
            >
              Go to Report
            </v-btn>
          </v-card-actions>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]


export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      value1: [423,446,675,510,590,610,760],
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      value3: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value2: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }
  }
}
</script>
