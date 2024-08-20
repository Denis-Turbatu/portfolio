<script>
    export default {
        data() {
            return {
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
            }
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/competence-logos/${name}`, import.meta.url).href
            }
        }
    }
</script>

<template>
    <div>
        <h2 class="text-red-500 text-3xl ms-2" id="competenze">Competenze</h2>

        <div class="flex justify-evenly flex-wrap">                <div class="size-12">
                    <img :src="getImageUrl(competence.path)" alt="" draggable="false">
                </div>
                <span>{{competence.name}}</span>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">

</style>