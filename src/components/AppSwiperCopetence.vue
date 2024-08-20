<template>
  <swiper :slides-per-view="5" :spaceBetween="30" :centeredSlides="true" :loop="true" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :breakpoints="{
      360: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }" :modules="modules" class="mySwiper container">
    <swiper-slide v-for="competence in competences">
      <section class="flex-center flex-col">
        <img class="size-20" :src="getImageUrl(competence.path)" :alt="competence.name">
        <span class="font-display text-lg leading-5">{{competence.name}}</span>
      </section>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  // import 'swiper/css/pagination';
  // import 'swiper/css/navigation';

  // import required modules
  import { Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
        competences: [
          {
            name: "Html5",
            path: "html5.svg",
          },
          {
            name: "Css3",
            path: "css3.svg",
          },
          {
            name: "Bootstrap",
            path: "bootstrap.svg",
          },
          {
            name: "Sass",
            path: "sass.svg",
          },
          {
            name: "JavaScript",
            path: "javascript.svg",
          },
          {
            name: "Vue.js",
            path: "vuejs.svg",
          },
          {
            name: "Vite",
            path: "vitejs.svg",
          },
          {
            name: "Php",
            path: "php.svg",
          },
          {
            name: "MySQL",
            path: "mysql.svg",
          },
          {
            name: "Laravel",
            path: "laravel.svg",
          },
        ]
      };
    },
    methods: {
      getImageUrl(name) {
        return new URL(`../assets/competence-logos/${name}`, import.meta.url).href
      }
    }
  };
</script>
<style scoped lang="scss">
  .swiper-slide {
    color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dark .swiper-slide {
    color: #e5e6e8;
  }

  .swiper {
    height: 300px;
  }
</style>