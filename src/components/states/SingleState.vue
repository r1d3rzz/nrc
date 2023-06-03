<template>
  <th scope="row">{{ state.code }}</th>
  <td>{{ state.number.en }}</td>
  <td>{{ state.name.en }}</td>
  <td>
    <router-link
      :to="{
        name: 'nrcTownShips',
        params: { id: state.id, name: state.name.en },
      }"
      class="btn btn-sm btn-primary"
      >Detail</router-link
    >
  </td>
</template>
<script>
export default {
  props: ["state"],
};
</script>
<style></style>
