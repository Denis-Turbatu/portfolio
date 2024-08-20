<script>
    export default {
        data() {
            return {
                projects: [
                    {
                        name: "BoolFlix",
                        url: ["https://github.com/Denis-Turbatu/vite-boolflix"],
                        description: [
                            "BoolFlix è una piattaforma di streaming sviluppata per offrire un'esperienza simile a Netflix, con un'interfaccia intuitiva e user-friendly. Il sito presenta un vasto catalogo di film e serie TV, permettendo agli utenti di esplorare i contenuti più popolari attraverso due slider principali. Grazie a una barra di ricerca testuale, gli utenti possono cercare facilmente titoli specifici, con risultati accuratamente filtrati in base alla tipologia di contenuto selezionato (film o serie TV). Le pagine dedicate ai film e alle serie TV offrono una navigazione mirata, visualizzando esclusivamente i risultati pertinenti alla categoria scelta. L'architettura del sito sfrutta Vue.js e Vite.js per garantire un'esperienza fluida e reattiva, mentre Vue-router gestisce la navigazione tra le pagine in modo efficiente."
                        ],
                        path_img: "boolflix.png",
                    },
                    {
                        name: "BoolPress",
                        url: ["https://github.com/Denis-Turbatu/laravel-api"],
                        description: [
                            "BoolPress è una dashboard di amministrazione progettata per gestire progetti con diverse tecnologie. A differenza di piattaforme specializzate come WordPress o Figma, BoolPress offre una soluzione flessibile per l'organizzazione e la gestione di progetti senza essere vincolata a una tipologia specifica di contenuto. Grazie a Laravel e MySQL, il backend è robusto e scalabile, mentre Bootstrap garantisce un'interfaccia moderna e accessibile. Laravel Breeze è stato utilizzato per implementare l'autenticazione e gestire le sessioni utente, assicurando una gestione sicura e intuitiva dei dati."
                        ],
                        path_img: "boolpress.png",
                    },
                    {
                        name: "Deliveboo",
                        url: [
                            "https://github.com/Denis-Turbatu/vite-vue-deliveboo",
                            "https://github.com/OmarThierno/laravel-deliveboo",
                        ],
                        description: [
                            "Deliveboo è un'applicazione completa di food delivery, ispirata a Deliveroo, che combina un frontend reattivo con un backend potente per offrire un'esperienza utente fluida e sicura. Sul frontend, gli utenti possono filtrare i ristoranti tramite filtri testuali o a pulsanti, e usufruire di un assistente virtuale basato sull'API di OpenAI (ChatGPT) per ricevere consigli personalizzati.",
                            "Il backend offre una dashboard di amministrazione completa, dove i proprietari dei ristoranti possono creare e gestire menu, monitorare gli ordini in arrivo, e ottenere report dettagliati grazie all'integrazione con Chart.js."
                        ],
                        path_img: "deliveboo-front.png",
                    },
                ],
                expandedDescription: {},
            };
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/projects-img/${name}`, import.meta.url).href;
            },
            toggleDescription(index) {
                this.expandedDescription[index] = !this.expandedDescription[index];
            },
            isDescriptionExpanded(index) {
                return !!this.expandedDescription[index];
            },
        },
    };
</script>

<template>
    <div class="p-2">
        <h2 class="inline-block bg-gradient-to-br from-ceris from-40% to-lavanda to-100% text-transparent bg-clip-text text-4xl font-sans font-semibold"
            id="progetti">
            Progetti
        </h2>
        <div v-for="(project, index) in projects" :key="project.name"
            class="flex-center flex-col border-raisin dark:border-platinum border-2 rounded-lg shadow w-full lg:flex-row mx-auto hover:bg-slate-40 my-3">
            <div class="w-full md:w-12/12 lg:w-6/12 rounded-lg">
                <img class="object-cover object-center w-full rounded-t-md size-60 md:w-full h-96"
                    :src="getImageUrl(project.path_img)" :alt="project.path_img" />
            </div>

            <div class="flex flex-col justify-between p-4 leading-normal w-full md:w-9/12 lg:w-6/12 [&>*:not(:first-child)]:mb-4">
                <h5
                    class="mb-6 text-2xl font-semibold font-sans leading-6 tracking-tight inline-block bg-gradient-to-br from-orange from-10% to-lavanda to to-100% text-transparent bg-clip-text">
                    {{ project.name }}
                </h5>
                <div class="relative overflow-hidden transition-height transition-opacity" :class="{'max-h-20': !isDescriptionExpanded(index)}">
                    <div class="absolute inset-0 bg-gradient-to-t from-platinum from-10% dark:from-raisin dark:from-10% to-transparent pointer-events-none"
                        v-if="!isDescriptionExpanded(index)"></div>
                    <p class="font-display text-lg leading-[1.4rem] text-raisin dark:text-platinum mb-6"
                        v-for="desc in project.description">
                        {{ desc }}
                    </p>
                </div>
                <button @click="toggleDescription(index)"
                    class="font-display text-lg leading-[1.4rem] italic font-semibold text-blue-500 hover:underline">
                    {{ isDescriptionExpanded(index) ? "Mostra meno" : "Leggi di più" }}
                </button>
                <div>
                    <h4 class="font-sans text-xl font-semibold">Vai ai progetti:</h4>
                </div>
                <a v-for="url in project.url" :href="url" target="_blank"
                    class="font-display text-lg leading-[1.4rem] italic font-semibold text-gray-700 dark:text-gray-400">{{
                    url }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>