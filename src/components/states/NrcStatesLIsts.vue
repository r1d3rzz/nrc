<template>
  <div class="fs-4 mb-3 text-primary">NRC States</div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Number</th>
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
