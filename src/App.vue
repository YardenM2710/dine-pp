<template>
  <div class="nav">
    <Header></Header>
    <Cards></Cards>
    <Menu></Menu>
    <Reservation></Reservation>
    <Footer></Footer>
  </div>
  <router-view />
</template>

<script>
import Header from './components/Header.vue';
import Cards from './components/Cards.vue';
import Menu from './components/Menu.vue';
import Reservation from './components/Reservation.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Cards,
    Menu,
    Reservation,
    Footer,
  },
};
</script>

<style></style>
