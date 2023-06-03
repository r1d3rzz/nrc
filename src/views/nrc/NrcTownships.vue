<template>
  <div class="row">
    <div class="col-md-10 mx-auto">
      <div class="card">
        <div class="card-body">
          <div v-if="nrc.length">
            <NrcTownshipsLists :nrcTownShips="nrc" :id="id" :name="name" />
          </div>
          <div v-else>
            <div>loading...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NrcTownshipsLists from "../../components/townships/NrcTownshipsLists";
import getNrcTownships from "@/composable/getNrcTownships";

export default {
  components: { NrcTownshipsLists },
  props: ["id", "name"],

  setup(props) {
    let { nrc, load, error } = getNrcTownships();

    load(props.id);

    return { nrc, error };
  },
};
</script>
<style></style>
