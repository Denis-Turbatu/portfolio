<script>
    import { store } from '../../store';

    export default {
        name: 'AppProjectDetails',
        computed: {
            project() {
                return store.selectedProject;
            }
        },
        created() {
            if (!this.project) {
                console.error('Dati del progetto non trovati');
                this.$router.push('/');
            }
        }
    }
</script>


<template>
    <div v-if="project" class="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-between">
        <h1
            class="text-3xl font-bold mb-6 bg-gradient-to-br from-ceris from-40% to-lavanda to-100% text-transparent bg-clip-text">
            {{ project.name }}</h1>

        <div class="mb-8">
            <p class="text-lg mb-4">{{ project.description }}</p>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Tecnologie Utilizzate</h2>
            <ul class="list-disc list-inside">
                <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
            </ul>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4">Link al Progetto</h2>
            <template v-if="Array.isArray(project.github)">
                <a v-for="(link, index) in project.github" :key="index" :href="link" target="_blank"
                    rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 underline block mb-2">
                    GitHub Repository {{ index + 1 }}
                </a>
            </template>
            <a v-else :href="project.github" target="_blank" rel="noopener noreferrer"
                class="text-blue-500 hover:text-blue-700 underline">
                GitHub Repository
            </a>
        </div>

        <router-link :to="{ path: '/', hash: '#progetti' }"
            class="bg-ceris hover:bg-lavanda text-white font-bold py-2 px-4 rounded transition duration-300 max-w-44 text-center">
            Torna alla Home
        </router-link>
    </div>
</template>

<style scoped>
    /* Puoi aggiungere stili specifici qui se necessario */
</style>