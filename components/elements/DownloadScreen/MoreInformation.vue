<template>
    <div class="mx-auto py-12">
        <!-- Tiêu đề -->
        <h2 class="text-2xl font-semibold text-center mb-8">For more information</h2>

        <!-- Hàng trên: Contact Us & Help Center -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Contact Us -->
            <div class="bg-gray-100 p-6 rounded-lg shadow">
                <h3 class="text-lg font-bold">Contact Us</h3>
                <p class="text-gray-600 my-6">
                    If you are interested in GeeLark or would like to know how GeeLark can be tailored to fit your
                    business needs, please feel free to contact us at any time.
                </p>
                <a href="#" class="text-blue-500 font-medium mt-2 inline-block underline">Continue →</a>
            </div>

            <!-- Help Center -->
            <div class="bg-gray-100 p-6 rounded-lg shadow">
                <h3 class="text-lg font-bold">Help Center</h3>
                <p class="text-gray-600 my-6">
                    We have prepared comprehensive help documentation for you, which will guide you through setting up
                    your GeeLark.
                </p>
                <a href="#" class="text-blue-500 font-medium mt-2 inline-block underline">Know More →</a>
            </div>
        </div>

        <!-- Hàng dưới: Social Media -->
        <div class="bg-gray-100 px-6 py-16 rounded-lg shadow mt-6 text-center flex">
            <div class="w-1/2">
                <h3 class="text-xl font-bold text-left">Stay up-to-date with GeeLark</h3>
                <p class="text-gray-600 mt-2 text-left">Stay tuned to our social media channels for first-hand news!</p>
            </div>

            <!-- Icons mạng xã hội -->
            <div class="flex justify-center gap-4 mt-4">
                <a href="#" class="text-red-600 text-3xl">
                    <AnFilledYoutube/>
                </a>
                <a href="#" class="text-blue-500 text-3xl">
                    <AkTelegramFill/>
                </a>
                <a href="#" class="text-blue-600 text-3xl">
                    <AkFacebookFill/>
                </a>
                <a href="#" class="text-pink-500 text-3xl">
                    <AkInstagramFill/>
                </a>
                <a href="#" class="text-black text-3xl">
                    <BsTwitterX/>
                </a>
                <a href="#" class="text-blue-700 text-3xl">
                    <AkLinkedinBoxFill/>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AnFilledYoutube, AkTelegramFill, AkFacebookFill, AkInstagramFill, BsTwitterX, AkLinkedinBoxFill } from "@kalimahapps/vue-icons";
</script>