<template>
  <div class="mb-3">
    <div class="fs-4 text-primary">
      NRC States <br />
      <small class="text-muted">Total ({{ nrcStates.length }})</small>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">State Code</th>
        <th scope="col">Name</th>
        <th scope="col">Detail</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="state in nrcStates" :key="state.id">
        <SingleState :state="state" />
      </tr>
    </tbody>
  </table>
</template>
<script>
import SingleState from "./SingleState";
export default {
  components: { SingleState },
  props: ["nrcStates"],
};
</script>
<style></style>
