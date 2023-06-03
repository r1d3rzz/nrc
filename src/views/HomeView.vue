<template>
  <div class="home row">
    <div class="col-md-10 mx-auto">
      <div v-if="nrc.length">
        <div class="card">
          <div class="card-body">
            <NrcStatesLIsts :nrcStates="nrc" />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="card">
          <div class="card-body">
            <div>loading...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NrcStatesLIsts from "../components/states/NrcStatesLIsts";
import getsNrc from "@/composable/getsNrc";

export default {
  components: {
    NrcStatesLIsts,
  },
  setup() {
    let { nrc, load, error } = getsNrc();

    load("states");

    return { nrc, error };
  },
};
</script>
