<template>
  <div id="submissions">
    <h2 class="text-center pa-5">WEEKLY CONTEST-405</h2>
    <v-divider> </v-divider>
    <v-flex justify-center class="pa-2 ma-5" outlined>
      <v-card-title> Custom Filters</v-card-title>
      <v-card class="d-inline-flex pa-2" elevation="0">
        <v-select
          v-model="search"
          :items="lang"
          label="Languages"
          dense
          outlined
        ></v-select>
        <v-spacer style="width: 100px"> </v-spacer>
        <v-select
          v-model="search"
          :items="result"
          label="Result"
          dense
          outlined
        ></v-select>
      </v-card>

      <v-data-table
        :headers="headers"
        :items="submissionTable"
        :search="search"
        :page.sync="page"
        class="pa-5 title table-header"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      >
        <!-- <template v-slot:item="row">
        <tr>
          <td>{{ row.item.submissionID }}</td>
          <td>{{ row.item.submissionTime }}</td>
          <td>{{ row.item.username }}</td>
          <td>{{ row.item.problem }}</td>
          <td>{{ row.item.language }}</td>
          <td>{{ row.item.result }}</td>
          <td>{{ row.item.timeTaken }}</td>
          <td>{{ row.item.memory }}</td>
          <td>
            <v-btn class="pa-2" small> View Solution </v-btn>
          </td>
        </tr>
      </template> -->

        <template v-slot:item.result="{ item }">
          <v-chip :color="getColor(item.result)" class="ma-2 pa-3">
            {{ item.result }}
          </v-chip>
        </template>
        <template v-slot:item.viewSolution="{ item }">
          <v-btn small color="blue-grey darken-1" dark to="/solution">
            {{ item.viewSolution }}
          </v-btn>
        </template>
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-flex>
  </div>
</template>


<script>
import submissionTable from "../data/submissionTable";
export default {
  name: "submissions",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          value: "submissionID",
          class: "title blue-grey lighten-3 font-weight-bold white--text",
        },
        {
          text: "Date/Time",
          value: "submissionTime",
          class: "title blue-grey lighten-3 white--text  font-weight-bold",
        },
        {
          text: "User",
          value: "username",
          class: "title blue-grey lighten-3 white--text  font-weight-bold",
        },
        {
          text: "Problem",
          value: "problem",
          class: "title blue-grey lighten-3 white--text  font-weight-bold",
        },
        {
          text: "Language",
          value: "language",
          sortable: false,
          class: "title blue-grey lighten-3 white--text  font-weight-bold",
        },
        {
          text: "Verdict",
          value: "result",
          sortable: false,
          class: "title blue-grey lighten-3 white--text  font-weight-bold",
        },
        {
          text: "Time",
          value: "timeTaken",
          class: "title blue-grey lighten-3 white--text  font-weight-bold",
        },
        {
          text: "Memory",
          value: "memory",
          class: "title blue-grey lighten-3 white--text font-weight-bold",
        },
        {
          text: "Solution",
          value: "viewSolution",
          sortable: false,
          class: "title blue-grey lighten-3 white--text font-weight-bold",
        },
      ],
      submissionTable,
      lang: ["C++", "Python", "Java", "Kotlin"],
      result: ["AC", "WA", "TLE", "RTE"],
    };
  },
  methods: {
    getColor(result) {
      if (result == "WA") return "red";
      else if (result == "AC") return "green";
      else return "amber";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>