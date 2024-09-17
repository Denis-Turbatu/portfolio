<script>
    import { store } from '../../store';

    export default {
        data() {
            return {
                projects: [
                    {
                        name: "BoolFlix",
                        description: "BoolFlix è una piattaforma di streaming sviluppata per offrire un'esperienza simile a Netflix, con un'interfaccia intuitiva e user-friendly. Il sito presenta un vasto catalogo di film e serie TV, permettendo agli utenti di esplorare i contenuti più popolari attraverso due slider principali. Grazie a una barra di ricerca testuale, gli utenti possono cercare facilmente titoli specifici, con risultati accuratamente filtrati in base alla tipologia di contenuto selezionato (film o serie TV). Le pagine dedicate ai film e alle serie TV offrono una navigazione mirata, visualizzando esclusivamente i risultati pertinenti alla categoria scelta. L'architettura del sito sfrutta Vue.js e Vite.js per garantire un'esperienza fluida e reattiva, mentre Vue-router gestisce la navigazione tra le pagine in modo efficiente.",
                        technologies: ["Vue.js", "Vite.js", "Vue Router", "API RESTful"],
                        github: "https://github.com/Denis-Turbatu/vite-boolflix",
                        path_img: "boolflix.png"
                    },
                    {
                        name: "BoolPress",
                        description: "BoolPress è una dashboard di amministrazione progettata per gestire progetti con diverse tecnologie. A differenza di piattaforme specializzate come WordPress o Figma, BoolPress offre una soluzione flessibile per l'organizzazione e la gestione di progetti senza essere vincolata a una tipologia specifica di contenuto. Grazie a Laravel e MySQL, il backend è robusto e scalabile, mentre Bootstrap garantisce un'interfaccia moderna e accessibile. Laravel Breeze è stato utilizzato per implementare l'autenticazione e gestire le sessioni utente, assicurando una gestione sicura e intuitiva dei dati.",
                        technologies: ["Laravel", "MySQL", "Bootstrap", "Laravel Breeze"],
                        github: "https://github.com/Denis-Turbatu/laravel-api",
                        path_img: "boolpress.png"
                    },
                    {
                        name: "Deliveboo",
                        description: "Deliveboo è un'applicazione completa di food delivery, ispirata a Deliveroo, che combina un frontend reattivo con un backend potente per offrire un'esperienza utente fluida e sicura. Sul frontend, gli utenti possono filtrare i ristoranti tramite filtri testuali o a pulsanti, e usufruire di un assistente virtuale basato sull'API di OpenAI (ChatGPT) per ricevere consigli personalizzati. Il backend offre una dashboard di amministrazione completa, dove i proprietari dei ristoranti possono creare e gestire menu, monitorare gli ordini in arrivo, e ottenere report dettagliati grazie all'integrazione con Chart.js.",
                        technologies: ["Vue.js", "Laravel", "MySQL", "OpenAI API", "Chart.js"],
                        github: ["https://github.com/Denis-Turbatu/vite-vue-deliveboo", "https://github.com/OmarThierno/laravel-deliveboo"],
                        path_img: "deliveboo-front.png"
                    }
                ],
            };
        },
        methods: {
            navigateToProject(project) {
                store.selectedProject = project;
                this.$router.push({ 
                    name: 'AppProjectDetails', 
                    params: { name: project.name }
                });
            },
            getImageUrl(name) {
                return new URL(`../assets/projects-img/${name}`, import.meta.url).href;
            }
        },
    };
</script>

<template>
    <div class="p-2">
        <h2 class="inline-block bg-gradient-to-br from-ceris from-40% to-lavanda to-100% text-transparent bg-clip-text text-4xl mb-2 font-sans font-semibold"
            id="progetti">
            Progetti
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="project in projects" :key="project.name"
                 @click="navigateToProject(project)"
                 class="border-raisin dark:border-platinum border-2 rounded-lg shadow hover:bg-slate-40 cursor-pointer transition-all duration-300 hover:shadow-lg">
                <img class="w-full h-48 object-cover rounded-t-lg" :src="getImageUrl(project.path_img)" :alt="project.name" />
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tech in project.technologies" :key="tech" class="text-sm bg-gray-200 dark:bg-gray-700 rounded px-2 py-1">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>