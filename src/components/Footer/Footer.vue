<script setup>
import youtube_icon from "@/assets/youtube_icon.png";
import twitter_icon from "@/assets/twitter_icon.png";
import instagram_icon from "@/assets/instagram_icon.png";
import facebook_icon from "@/assets/facebook_icon.png";
// Drew out the footer notes
</script>

<template>
  <div class="footer">
    <div class="footer-icons">
      <img :src="facebook_icon" alt="" />
      <img :src="instagram_icon" alt="" />
      <img :src="twitter_icon" alt="" />
      <img :src="youtube_icon" alt="" />
    </div>

    <ul>
      <li>Audio Description</li>
      <li>Help Centre</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>

    <p class="copyright-text">© 1997–2023 Netflix, Inc.</p>
  </div>
</template>

<style scoped>
.footer {
  padding: 30px 4%;
  max-width: 1000px;
  margin: 0 auto;
}

.footer-icons {
  display: flex;
  gap: 20px;
  margin: 40px 0;
}

.footer-icons img {
  width: 30px;
  cursor: pointer;
}

.footer ul {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  gap: 15px;
  margin-bottom: 30px;
  list-style: none;
}

.copyright-text {
  color: grey;
  font-size: 14px;
}
</style>
