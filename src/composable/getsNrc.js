import { ref } from "vue";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let nrc = ref([]);
let error = ref(null);

let getsNrc = () => {
  let load = async (type) => {
    try {
      let res = await fetch(
        `https://nrc-data.onrender.com/nrc${capitalizeFirstLetter(type)}`
      );
      if (res.status === 404) {
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

export default getsNrc;
