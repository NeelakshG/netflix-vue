<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import TitleCard from "@/components/TitleCard/TitleCard.vue";
import Footer from "@/components/Footer/Footer.vue";

import hero_banner from "@/assets/hero_banner.jpg";
import hero_title from "@/assets/hero_title.png";
import play_icon from "@/assets/play_icon.png";
import info_icon from "@/assets/info_icon.png";
</script>

<template>
  <div class="home">
    <Navbar />

    <div class="hero">
      <img :src="hero_banner" alt="" class="banner-img" />

      <div class="hero-caption">
        <img :src="hero_title" alt="" class="caption-img" />

        <p>
          Discovering his ties to a secret ancient order, a young man living
          in modern Istanbul embarks on a quest to save the city from an
          immortal enemy.
        </p>

        <div class="hero-btns">
          <button class="btns">
            <img :src="play_icon" alt="" />
            Play
          </button>

          <button class="btns dark-btn">
            <img :src="info_icon" alt="" />
            More Info
          </button>
        </div>

        <!-- default TitleCard (Popular on Netflix) -->
        <TitleCard />
      </div>
    </div>

    <!-- additional movie categories -->
    <div class="more-cards">
      <TitleCard category="top_rated" title="BlockBuster Movies" />
      <TitleCard category="popular" title="Only on Netflix" />
      <TitleCard category="upcoming" title="Upcoming" />
      <TitleCard category="now_playing" title="Top Pics for You" />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
}

.banner-img {
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 75%);
}

.hero-caption {
  position: absolute;
  width: 100%;
  padding-left: 6%;
  bottom: 0;
}

.caption-img {
  width: 90%;
  max-width: 420px;
  margin-bottom: 30px;
}

.hero-caption p {
  max-width: 700px;
  font-size: 17px;
  margin-bottom: 10px;
}

.hero-btns {
  display: flex;
  margin-bottom: 50px;
  gap: 10px;
}

.hero-btns .btns img {
  width: 25px;
}

.hero-btns .btns {
  border: 0;
  outline: 0;
  padding: 8px 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.hero-btns .btns.dark-btn {
  color: #fff;
  background-color: #6d6d6eb3;
}

.hero-btns .btns:hover {
  background-color: #ffffffbf;
}

.hero-btns .btns.dark-btn:hover {
  background-color: #6d6d6e66;
}

.more-cards {
  padding-left: 6%;
}
</style>
