<template>
  <th scope="row">{{ nrc.code }}</th>
  <td>{{ nrc.short.en }} / {{ nrc.short.mm }}</td>
  <td>{{ nrc.name.en }}</td>
  <td>{{ nrc.stateCode }}</td>
</template>

<script>
export default {
  props: ["nrc"],
};
</script>
<style></style>
