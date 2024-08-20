<script>
  import { useDark, useToggle } from "@vueuse/core";
  import AppHeader from "./components/AppHeader.vue";
  import AppHero from "./components/AppHero.vue";
  import AppAboutMe from "./components/AppAboutMe.vue";
  import AppExperience from "./components/AppExperience.vue";
  import AppSwiperCopetence from './components/AppSwiperCopetence.vue';
  import AppProjects from "./components/AppProjects.vue";
  import AppCTA from "./components/AppCTA.vue";

  export default {
    components: {
      AppHeader,
      AppHero,
      AppAboutMe,
      AppExperience,
      AppSwiperCopetence,
      AppProjects,
      AppCTA
    },
  };
</script>

<template>
  <!-- container su tutta la pagina -->
  <div class="ms-bg md:space-y-32 bg-platinum text-raisin dark:bg-raisin dark:text-platinum [&>div:not(:first-child)]:py-24">
    <!-- header -->
    <div>
      <AppHeader />
    </div>

    <!-- hero -->
    <div>
      <AppHero id="Chi sono" />
    </div>

    <!-- informazioni personali -->
    <div class="container">
      <AppAboutMe />
    </div>

    <!-- esperienze e formazione -->
    <div class="container">
      <AppExperience />
    </div>

    <!-- competenze swiper -->
    <div id="competenze" class="bg-stone-300 dark:bg-[#212121]">
      <AppSwiperCopetence />
    </div>

    <!-- progetti -->
    <div class="container">
      <AppProjects id="Progetti" />
    </div>

    <!-- CTA -->
    <div class="container">
      <AppCTA id="Contattami"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  body {
    transition: background-color 2s;
  }

  .ms-bg{
    background: #e5e6e8;
    background-image: radial-gradient(#a0a1a1 1px, transparent 0);
    background-size:50px 50px;
    background-position: -19px -19px;
  }

  .dark .ms-bg{
    background: #111111;
    background-image: radial-gradient(#222936 1px, transparent 0);
    background-size: 40px 40px;
    background-position: -19px -19px;
  }

  #Competenze {
    background: linear-gradient(135deg, #dbdcdf, #d1d5db);
  }

  .dark #Competenze {
    background: linear-gradient(60deg, #1c1d1f 0%, #303941 100%);
  }
</style>