<script lang="ts">
  const currentTime = new Date();
  const currenthour = currentTime.getHours();

  let greeting = "";

  if (currenthour < 12) {
    greeting = "¡Buenos días!";
  } else if (currenthour < 18) {
    greeting = "¡Buenas tardes!";
  } else {
    greeting = "¡Buenas noches!";
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
