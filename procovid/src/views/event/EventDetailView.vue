<template>
  <p>
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
