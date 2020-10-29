<template>
  <div class="pa-5" id="solution">
    <h2 class="text-center pa-5">WEEKLY CONTEST-405</h2>
    <v-divider inset> </v-divider>
    <v-card class="pa-5 solution-card mr-5" outlined justify-space-between>
      <v-row no-gutters xs6>
        <v-col cols="3">
          <v-flex class="ma-2 row" justify-center xs12>
            <h3>Verdict :</h3>
            <v-chip tick color="green" outlined>
              <v-icon left> mdi-check </v-icon> AC
            </v-chip>
          </v-flex>
        </v-col>
        <v-col cols="3">
          <v-flex class="ma-2 row" justify-center xs12>
            <h3>Lang :</h3>
            <h3 class="text-decoration-underline primary--text">C++</h3>
          </v-flex>
        </v-col>
        <v-col cols="3">
          <v-flex class="ma-2 row" justify-center xs12>
            <h3>Problem :</h3>
            <h3 class="text-decoration-underline primary--text">RATIONKL</h3>
          </v-flex>
        </v-col>
        <v-col cols="3">
          <v-flex class="ma-2 row" justify-center xs12>
            <h3>User :</h3>
            <h3 class="text-decoration-underline primary--text">HarryBajiya</h3>
          </v-flex>
        </v-col>
      </v-row>
    </v-card>
    <div class="pa-5">
      <codemirror
        ref="myCm"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
      >
      </codemirror>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/clike/clike.js";
export default {
  name: "solution",
  components: {
    codemirror,
  },
  data() {
    return {
      code:
        '#include<stdio.h> \nint main() \n{ \n  int A, B, sum = 0;\n  printf("Enter two numbers A and B : "); \n  scanf("%d%d", &A, &B);\n  sum = A + B;\n  printf("Sum of A and B is: %d", sum);\n  return 0;\n}',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "clike",
        theme: "dracula",
        lineNumbers: true,
      },
    };
  },
};
</script>


<style scoped>
</style>
