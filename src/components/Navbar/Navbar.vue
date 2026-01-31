<script setup>
import logo from "@/assets/logo.png";
import search_icon from "@/assets/search_icon.svg";
import bell_icon from "@/assets/bell_icon.svg";
import profile_img from "@/assets/profile_img.png";
import caret_icon from "@/assets/caret_icon.svg";
import { useRouter } from "vue-router";
import { logout } from "@/firebase";

const router = useRouter();

const handleLogout = async () => {
  try {
    await logout();
    router.push("/login"); 
  } catch (err) {
    alert(err.message);
  }
};


// UI for the navbar, separated into two sections: right side and left side
</script>

<template>
  <div class="navbar">
    <div class="navbar-left">
      <img :src="logo" alt="" />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse By Language</li>
      </ul>
    </div>

    <div class="navbar-right">
      <img :src="search_icon" alt="" class="icons" />
      <p>children</p>
      <img :src="bell_icon" alt="" class="icons" />

      <div class="navbar-profile">
        <img :src="profile_img" class="profile" />
        <img :src="caret_icon" />

        <div class="dropdown">
          <p @click="handleLogout">
            Sign out of Netflix
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  padding: 20px 6%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  font-size: 14px;
  color: #e5e5e5;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
  z-index: 1;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 50px;
}

.navbar-left img {
  width: 90px;
}

.navbar-left ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

.navbar-left ul li {
  cursor: pointer;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar-right .icons {
  width: 20px;
  cursor: pointer;
}

.navbar-right .profile {
  border-radius: 4px;
  width: 35px;
}

.navbar-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
}

.navbar .dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  background: #191919;
  padding: 18px 22px;
  border-radius: 2px;
  text-decoration: underline;
  z-index: 1;
  display: none;
}

.navbar .dropdown p {
  font-size: 13px;
  cursor: pointer;
}

.navbar-profile:hover .dropdown {
  display: block;
}
</style>
