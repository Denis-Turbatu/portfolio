<script>
    import 'flowbite';
    import { useDark, useToggle } from "@vueuse/core";

    export default {
        data() {
            return {
                navLinks: [
                    {
                        name: 'Chi Sono',
                        id: 'chi-sono',
                    },
                    {
                        name: 'Esperienze e Formazione',
                        id: 'esperienze-e-formazione',
                    },
                    {
                        name: 'Competenze',
                        id: 'competenze',
                    },
                    {
                        name: 'Progetti',
                        id: 'progetti',
                    },
                    {
                        name: 'Contattami',
                        id: 'contattami',
                    },
                ],
                isSticky: false,
            }
        },
        setup() {
            const isDark = useDark({
                selector: "body",
                attribute: "class",
                valueDark: "dark",
                valueLight: ""
            });
            const toggleDark = useToggle(isDark);

            return { isDark, toggleDark };
        },
        methods: {
            handleScroll() {
                const stickyOffset = 120;
                
                this.isSticky = window.pageYOffset > stickyOffset;
            },
            getImageUrl(name) {
                return new URL(`../assets/${name}`, import.meta.url).href;
            },
            scrollToSection(event, id) {
                event.preventDefault();
                const target = document.getElementById(id);
                const offset = 150;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - offset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<template>
    <nav :class="[
      'bg-platinum border-b-2 border-raisin dark:border-b-2 dark:border-platinum dark:bg-raisin flex-center',
      { 'fixed top-0 left-0 right-0 mx-auto shadow-2xl border-2 lg:w-6/12': isSticky }
    ]" ref="header">
        <div :class="['container flex justify-between items-center flex-wrap mx-4 my-4 transition-all duration-300 bg-platinum text-raisin dark:bg-raisin dark:text-platinum',
        { 'rounded-lg mx-4 my-2 [&>ul>li]:flex justify-center items-center': isSticky }
      ]">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img :src="getImageUrl(isDark ? 'logo-light.png' : 'logo.png')"
                    class="h-8 transition-all duration-300" alt="logo" />
                <span v-if="!isSticky"
                    class="self-center text-2xl font-semibold whitespace-nowrap dark:text-platinum transition-all duration-300">
                    Denis Turbatu
                </span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Apri menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-3xl bg-platinum lg:flex-row lg:space-x-2 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-platinum dark:bg-raisin lg:dark:bg-raisin dark:border-gray-700">
                    <li v-for="link in navLinks" :key="link.name" class="flex-center">
                        <a :href="`#${link.id}`" 
                           @click="scrollToSection($event, link.id)" 
                           class="block text-center py-2 px-3 text-raisin dark:text-platinum rounded transition duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-ceris hover:to-orange dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:bg-gradient-to-br dark:hover:from-ceris dark:hover:to-orange">
                            {{ link.name }}
                        </a>
                    </li>
                    <li @click="toggleDark()"
                        class="flex-center size-10 flexpy-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-700 lg:p-0 dark:text-platinum lg:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                        <font-awesome-icon :icon="isDark ? ['fas', 'moon'] : ['fas', 'sun']" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    .fixed {
        top: 10px;
        z-index: 50;
        width: 65%;
        border-radius: 50px;
        padding: 5px 0px;
        background-color: #e5e6e8;
        transition: all 0.3s ease;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fixed .rounded-lg {
        border-radius: 0.5rem;
    }

    .shadow-md {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
</style>
