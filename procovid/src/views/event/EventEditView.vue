<template>
  <p v-if="event.vaccine[0] != null" class="vaccine1">
    Vaccine: {{ event.vaccine[0] }} <br />
    Date: {{ event.date[0] }} <br />
    Time: {{ event.time[0] }} <br />
  </p>
  <p v-if="event.vaccine[1] != null" class="vaccine2">
    Vaccine: {{ event.vaccine[1] }} <br />
    Date: {{ event.date[1] }} <br />
    Time: {{ event.time[1] }} <br />
  </p>
  <p v-if="event.vaccine[2] != null" class="vaccine3">
    Vaccine: {{ event.vaccine[2] }} <br />
    Date: {{ event.date[2] }} <br />
    Time: {{ event.time[2] }} <br />
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
.vaccine1 {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.vaccine2 {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
.vaccine3 {
  padding: 20px;
  /* border: 1px solid #39495c; */
  margin-bottom: 18px;
}
</style>
