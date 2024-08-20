<script>

    export default {
        data() {
            return {
                texts: ["Denis Turbatu", "Jr Full Stack Developer"], // Assicurati che l'array sia definito qui
                currentIndex: 0,
            };
        },
        mounted() {
            this.startTextRotation();
        },
        methods: {
            startTextRotation() {
                if (this.texts && this.texts.length > 0) {
                    setInterval(() => {
                        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
                    }, 4000); // Cambia testo ogni 4 secondi
                }
            },
        },
    }
</script>

<template>
    <div class="flex flex-col md:justify-center items-center md:flex-row">
        <div class="mb-4">
            <img src="../assets/about-img/immagine-profilo-bg-1.jpg" alt="img_profilo" draggable="false"
                class="ovale object-cover ms-border">
        </div>

        <!-- sezione con paragrafo -->
        <section class="md:w-6/12 p-2 md:ps-6">
            <div class="w-max">
                <h1 v-for="(text, index) in texts" :key="index" v-show="index === currentIndex" class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-raisin dark:border-r-platinum pr-2 mb-4 text-2xl md:text-3xl lg:text-5xl text-raisin dark:text-platinum font-bold">{{ text }}</h1>
            </div>

            <p class="mb-8 text-lg md:text-xl lg:text-2xl leading-6 font-display">Sono un junior web developer con un approccio diretto e una
                forte determinazione a risolvere problemi. Ogni sfida è un'opportunità per crescere e affinare le mie
                competenze. Se c'è un ostacolo, trovo il modo di superarlo. Esplora il mio portfolio per scoprire come
                trasformo la mia passione in progetti concreti.</p>
            <div class="space-x-4">
                <a class="font-sans text-lg font-semibold py-2 px-4 bg-raisin text-platinum dark:bg-platinum dark:text-raisin rounded-md transition duration-500 ease-in-out hover:bg-gradient-to-br hover:from-ceris hover:via-orange hover:to-lavanda dark:hover:text-platinum hover:text-raisin"
                    href="/DENIS_TURBATU_CV.pdf" download id="CV" alt="Curriculum Vitae">Scarica il
                    CV</a>

                <a class="font-sans text-lg font-semibold py-2 px-4 rounded-md transition duration-500 ease-in-out bg-gradient-to-br from-ceris via-orange to-lavanda hover:bg-gradient-to-br hover:from-raisin hover:to-raisin hover:text-platinum dark:hover:from-platinum dark:hover:to-platinum hover:dark:text-raisin"
                    href="#Contattami">Contattami</a>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
    .ovale {
        width: 300px;
        height: 450px;
        border-radius: 150px / 150px;
        background-color: #f0f0f0;
    }

    .ms-border {
        border: solid 3px #111111;
    }

    .dark .ms-border {
        border: solid 3px #e5e6e8;
    }
</style>