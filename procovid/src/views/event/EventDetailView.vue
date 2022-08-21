<template>
  <p id="info">
    Name: {{ event.title }} <br />
    Surname: {{ event.surname }} <br />
    Age: {{ event.age }} <br />
    Address: {{ event.location }}
  </p>
</template>

<script>
export default {
  props: ["id", "event"],
};
</script>
<style>
#info {
  background-color: #fff;
  padding: 1rem;
  width: 550px;
  text-align: center;
  margin: 0 auto;
  border-radius: 25px;
  letter-spacing: 2px;
}
</style>
