<template>
  <p class="ppp">
    Vaccine: {{ event.vaccine1 }} <br />
    Date: {{ event.date }} <br />
    Time: {{ event.time }} <br />
  </p>
  <p class="pppp">
    Vaccine: {{ event.vaccine2 }} <br />
    Date: {{ event.date }} <br />
    Time: {{ event.time }} <br />
  </p>
</template>

<script>
export default {
  props: ["id", "event"],
  inject: ["GStore"],
  methods: {
    register() {
      this.GStore.flashMessage = "The data has been updated" + this.event.title;
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      this.$router.push({
        name: "EventDetails",
        params: { id: this.event.id },
      });
    },
  },
};
</script>
<style>
.ppp {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.pppp {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
</style>
