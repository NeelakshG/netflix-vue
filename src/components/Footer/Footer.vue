<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

/* props passed into the TitleCard component */
const props = defineProps({
  title: String,
  category: String,
});

// useRef updates the page without re-rendering the page
const cardsRef = ref(null);
const apiData = ref([]);

// this is how we get the API data that will be used in the list
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGM1MWVmNDRjYzAyYTlmMmE0YTA3NjM5Mzg1NDVkZSIsIm5iZiI6MTc0NzQ2MDc5Ni4yNjIsInN1YiI6IjY4MjgyMmJjYzVhNWJiNTA1NDBiY2NlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I7v0njb6mcxFXFMOQi3Gl6FNOJW8s0myyJADbt5nApI",
  },
};

// when user scrolls vertically with the mouse, this handle prevents the page from vertically scrolling and instead moves the page horizontally
const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.value.scrollLeft += event.deltaY;
};

// updates the url we fetch depending on the list we are on
onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${
      props.category ? props.category : "now_playing"
    }?language=en-US&page=1`,
    options
  )
    // store that information into res and then update the state of apiData
    .then((res) => res.json())
    .then((res) => {
      apiData.value = res.results;
    })
    .catch((err) => console.error(err));

  // watch out for the scroll
  cardsRef.value.addEventListener("wheel", handleWheel);
});

// remove the event listener when the component unmounts
onBeforeUnmount(() => {
  if (cardsRef.value) {
    cardsRef.value.removeEventListener("wheel", handleWheel);
  }
});
</script>

<template>
  <!-- making each list -->
  <div class="titlecards">
    <!-- first we add the title which is either sent as a prop or forced to be Popular on Netflix -->
    <h2>{{ title ? title : "Popular on Netflix"}}</h2>

    <!-- to imitate the scrolling effect, we use ref instead of reactive state because we dont want the page to re-render -->
    <div class="card-list" ref="cardsRef">
      <!-- then for the list itself, we loop through each movie in the array -->
      <RouterLink
        v-for="(movie, movieIndex) in apiData"
        :key="movieIndex"
        :to="`/player/${movie.id}`"
        class="card"
      >
        <!-- link each movie to its associated player page -->
        <img
          :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
          alt=""
        />
        <!-- print the name of the movie on the thumbnail -->
        <p>{{ movie.original_title }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.titlecards {
  margin-top: 50px;
  margin-bottom: 30px;
}

.titlecards h2 {
  margin-bottom: 8px;
}

.card-list {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
  display: none;
}

.card-list img {
  width: 250px;
  border-radius: 4px;
  cursor: pointer;
}

.card-list .card {
  position: relative;
}

.card-list .card p {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
}
</style>
