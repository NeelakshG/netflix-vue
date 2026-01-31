<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import back_arrow_icon from "@/assets/back_arrow_icon.png";

const route = useRoute();      // access route params
const router = useRouter();    // programmatic navigation
const id = route.params.id;   // movie id from URL

// state for fetched video data
const apiData = ref({
  name: "",
  key: "",
  published_at: "",
  type: "",
});

onMounted(() => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGM1MWVmNDRjYzAyYTlmMmE0YTA3NjM5Mzg1NDVkZSIsIm5iZiI6MTc0NzQ2MDc5Ni4yNjIsInN1YiI6IjY4MjgyMmJjYzVhNWJiNTA1NDBiY2NlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I7v0njb6mcxFXFMOQi3Gl6FNOJW8s0myyJADbt5nApI",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  )
    .then((res) => res.json())
    .then((res) => {
      apiData.value = res.results?.[0] || apiData.value;
    })
    .catch((err) => console.error(err));
});
</script>

<template>
  <div class="player">
    <!-- back button -->
    <img
      :src="back_arrow_icon"
      alt=""
      @click="router.push('/home')"
    />

    <!-- video player -->
    <iframe
      width="90%"
      height="90%"
      :src="`https://www.youtube.com/embed/${apiData.key}`"
      title="trailer"
      allowfullscreen
    ></iframe>

    <!-- video metadata -->
    <div class="player-info">
      <p>{{ apiData.published_at?.slice(0, 10) }}</p>
      <p>{{ apiData.name }}</p>
      <p>{{ apiData.type }}</p>
    </div>
  </div>
</template>

<style scoped>
.player {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.player img {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  cursor: pointer;
}

.player-iframe {
  border-radius: 10px;
}

.player-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
</style>
