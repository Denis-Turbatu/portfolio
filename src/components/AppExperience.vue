<script>
    export default {
        data() {
            return {
                experiences: [
                    {
                        main: 'Junior Full Stack Web Developer Trainee',
                        date: 'Febbraio 2024 - Luglio 2024',
                        entity: 'Boolean',
                        tag: 'esperienza',
                    },
                    {
                        main: 'Operaio',
                        date: 'Luglio 2023 - Gennaio 2024',
                        entity: 'Gruppo STAND',
                        tag: 'esperienza',
                    },
                    {
                        main: 'Front-end Developer (Alter. Scuola-Lavoro)',
                        date: 'Marzo 2023 - Aprile 2023',
                        entity: 'Università La Sapienza - Dip. Archeologia',
                        tag: 'esperienza',
                    },
                    {
                        main: 'Front-end Developer (Alter. Scuola-Lavoro)',
                        date: 'Marzo 2022 - Aprile 2022',
                        entity: 'Università La Sapienza - Dip. Archeologia',
                        tag: 'esperienza',
                    }
                ],
                trainings: [
                    {
                        main: 'Master Full Stack Web Developer',
                        date: 'Febbraio 2024 - Luglio 2024',
                        entity: 'Boolean',
                        tag: 'formazione',
                    },
                    {
                        main: 'Diploma Informatica e Telecomunicazioni',
                        date: 'Settembre 2017 - Giugno 2023',
                        entity: 'Istituto Superiore U. Midossi',
                        tag: 'formazione',
                    }
                ],
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
        <h2 class="inline-block bg-gradient-to-br from-ceris from-40% to-lavanda to to-100% text-transparent bg-clip-text text-4xl font-sans font-semibold ms-2" id="esperienze-e-formazione">Esperienze e Formazione</h2>

        <div class="flex flex-col md:flex-row [&>div]:flex-col [&>div]:md:w-6/12 [&>div]:p-2 [&>div]:space-y-4">
            <div>
                <div class="w-full relative rounded-lg ms-card border-2 border-raisin dark:border-platinum p-2"
                    v-for="experience in experiences">
                    <!-- <div class="size-12">
                        <img :src="getImageUrl(competence.path)" alt="" draggable="false">
                    </div> -->
                    <section class="[&>p]:text-lg [&>p]:font-display p-4">
                        <h3 class="text-2xl font-semibold font-sans">{{experience.main}}</h3>
                        <p>{{experience.entity}}</p>
                        <p>{{experience.date}}</p>
                    </section>
                    <span class="absolute right-2 bottom-2 bg-gradient-to-br from-orange from-50% to-lavanda to to-100% text-raisin dark:text-platinum p-1 rounded-full font-semibold">{{experience.tag}}</span>
                </div>
            </div>
            <div>
                <div class="w-full relative rounded-lg ms-card border-2 border-raisin dark:border-platinum p-2"
                    v-for="training in trainings">
                    <!-- <div class="size-12">
                        <img :src="getImageUrl(competence.path)" alt="" draggable="false">
                    </div> -->
                    <section class="[&>p]:text-lg [&>p]:font-display p-4">
                        <h3 class="text-2xl font-semibold font-sans">{{training.main}}</h3>
                        <p>{{training.entity}}</p>
                        <p>{{training.date}}</p>
                    </section>
                    <span class="absolute right-2 bottom-2 bg-gradient-to-br from-orange from-50% to-lavanda to to-100% text-raisin dark:text-platinum p-1 rounded-full font-semibold">{{training.tag}}</span>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">

</style>