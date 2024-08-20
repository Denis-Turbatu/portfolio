<script>
    import emailjs from '@emailjs/browser';

    export default {
        methods: {
            sendEmail() {
                emailjs
                    .sendForm(
                        import.meta.env.VUE_APP_EMAILJS_SERVICE_ID,
                        import.meta.env.VUE_APP_EMAILJS_TEMPLATE_ID,
                        this.$refs.form,
                        {
                            publicKey: import.meta.env.VUE_APP_EMAILJS_RECEIVER_EMAIL,
                        }
                    )
                    .then(
                        () => {
                            console.log('SUCCESS!');
                        },
                        (error) => {
                            console.log('FAILED...', error.text);
                        },
                    );
            }
        },
    };
</script>

<template>
    <div class="p-2">
        <div class="flex-center flex-col w-full lg:flex-row px-2 space-y-12">
            <div class="lg:w-6/12 flex flex-col justify-between space-y-20">
                <h2 id="contattami"
                    class="text-center lg:text-left inline-block bg-gradient-to-br from-ceris from-40% to-lavanda to to-100% text-transparent bg-clip-text text-4xl font-sans font-semibold text-ceris">
                    <p>Pronto a dare vita alle tue idee?</p>
                    <p>Contattami qui!</p>
                </h2>

                <dl class="max-w-md text-gray-900 divide-y divide-gray-800 dark:divide-gray-400  dark:text-white">
                    <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-platinum md:text-lg dark:text-gray-400">Email</dt>
                        <dd class="text-lg font-semibold">turbatudenis34@gmail.com</dd>
                    </div>
                    <div class="flex flex-col py-3">
                        <dt class="mb-1 text-platinum md:text-lg dark:text-gray-400">Città</dt>
                        <dd class="text-lg font-semibold">Civita Castellana, Viterbo, Lazio</dd>
                    </div>
                    <div class="flex flex-col pt-3">
                        <dt class="mb-1 text-platinum md:text-lg dark:text-gray-400">Cellulare</dt>
                        <dd class="text-lg font-semibold">+39 380 7837 609</dd>
                    </div>
                </dl>

                <div class="flex gap-5">
                    <a href="https://www.linkedin.com/in/denis-turbatu-573388303/" target="_blank">
                        <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                            class="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                            <span class="[&>svg]:h-4 [&>svg]:w-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                    <path
                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </span>
                        </button>
                    </a>
                    <a href="https://github.com/Denis-Turbatu" target="_blank">
                        <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                            class="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                            <span class="[&>svg]:h-4 [&>svg]:w-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </span>
                        </button>
                    </a>
                    <a href="https://x.com/d_turbatu" target="_blank">
                        <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
                            class="mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                            <span class="[&>svg]:h-4 [&>svg]:w-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path
                                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            <div
                class="w-10/12 lg:w-6/12 flex-center border-2 border-raisin dark:border-platinum rounded-lg bg-raisin dark:bg-[#d7d9da] py-16">
                <form class="w-10/12 space-y-8" ref="form" @submit.prevent="sendEmail">
                    <!-- email -->
                    <div>
                        <label for="email-address-icon"
                            class="block mb-2 text-sm font-medium text-platinum dark:text-raisin">Email</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-4 h-4 text-raisin dark:text-platinum" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path
                                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path
                                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input type="text" id="email-address-icon"
                                class="bg-gray-50 border border-gray-300 text-raisin dark:text-platinum text-lg font-display italic rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-raisin dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="email@esempio.com" name="user_email">
                        </div>
                    </div>
                    <!-- messaggio -->
                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-platinum dark:text-raisin"
                            name="user_name">Il tuo messaggio</label>
                        <textarea id="message" rows="4"
                            class="block p-2.5 w-full text-raisin dark:text-platinum bg-gray-50 rounded-lg border text-lg font-display italic  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-raisin dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Lascia un commento..."></textarea>
                    </div>
                    <!-- invia -->
                    <button type="submit"
                        class="font-sans text-lg font-semibold py-2 px-4 bg-platinum text-raisin dark:bg-raisin dark:text-platinum rounded-md transition duration-500 ease-in-out hover:bg-gradient-to-br hover:from-ceris hover:via-orange hover:to-lavanda dark:hover:text-raisin hover:text-platinum"
                        value="Send">Invia</button>
                </form>
            </div>
        </div>
    </div>
</template>