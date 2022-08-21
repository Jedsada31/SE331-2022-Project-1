<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.patient }}</h1>
    <div id="nav">
      <router-link class="list" :to="{ name: 'EventDetails' }"
        >Patient Details</router-link
      >
      |
      <router-link class="list" :to="{ name: 'EventRegister' }"
        >Doctor Recommendation</router-link
      >
      |
      <router-link class="list" :to="{ name: 'EventEdit' }"
        >Vaccine Certificate</router-link
      >
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
// import EventService from '@/services/EventService.js'
export default {
  //   props: ['id'],
  //   data() {
  //     return {
  //       event: null
  //     }
  //   },
  //   created() {
  //     EventService.getEvent(this.id)
  //       .then((response) => {
  //         this.event = response.data
  //       })
  //       .catch((error) => {
  //         if (error.response && error.response.status == 404) {
  //           this.$router.push({
  //             name: '404Resource',
  //             params: { resource: 'event' }
  //           })
  //         } else {
  //           this.$router.push({ name: 'NetworkError' })
  //         }
  //       })
  //   }
  inject: ["GStore"],
};
</script>
<style>
#nav {
  margin: 1rem;
  padding: 1rem;
  background-color: none;
  width: 100%;
}
#nav a {
  text-decoration: none;
  cursor: pointer;
}

.list {
  padding: 1rem;
  background-color: none;
  border-radius: 25px;
  background-color: #9fe2bf;
  color: black;
}
.list:hover {
  background-color: #40e0d0;
  transition: 0.5s;
  color: #fff;
}
</style>
