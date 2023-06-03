<template>
  <div v-if="nrcTownShips[0].stateId == id">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <div class="fs-4 text-primary">
          Townships :
          <small class="text-danger" v-if="stateName">{{ stateName }}</small>
        </div>
        <div class="text-muted">Total ({{ nrcTownShips.length }})</div>
      </div>
      <div class="btn btn-sm btn-primary" @click="$router.go(-1)">Back</div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Short</th>
          <th scope="col">Name</th>
          <th scope="col">State Code</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nrcTownShip in nrcTownShips" :key="nrcTownShip.id">
          <SingleTownships
            :nrc="nrcTownShip"
            v-if="nrcTownShip.stateId == id"
          />
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <div>loading...</div>
  </div>
</template>
<script>
import { ref } from "vue";
import SingleTownships from "./SingleTownships";
export default {
  components: { SingleTownships },
  props: ["nrcTownShips", "id", "name"],
  setup(props) {
    let stateName = ref("");
    stateName.value = props.name;

    return { stateName };
  },
};
</script>
<style></style>
