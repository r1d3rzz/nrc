import { ref } from "vue";

let nrc = ref([]);
let error = ref(null);

let getNrcTownships = () => {
  let load = async (townshipId) => {
    try {
      let res = await fetch(
        `https://nrc-data.onrender.com/nrcTownships?stateId=${townshipId}`
      );
      if (res.status == 404) {
        throw new Error("API NOT FOUND");
      }
      let data = await res.json();
      nrc.value = data;
    } catch (err) {
      error.value = err.message;
      console.log(err);
    }
  };

  return { nrc, load, error };
};

export default getNrcTownships;
