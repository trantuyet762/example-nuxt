<template>
  <div class="flex flex-col items-center py-12 bg-gray-50 mb-16">
    <h2 class="text-3xl font-bold text-gray-900">Pricing</h2>
    <p class="text-gray-600 mt-2 text-center max-w-2xl">
      We offer customized pricing plans tailored to your needs, whether you’re a
      beginner or a professional team. Our solutions are designed to efficiently
      scale your multi-account management.
    </p>
    <div class="grid md:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
      <div
        class="bg-[#f7f9fd] pt-10 pb-20 px-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)]"
      >
        <h3 class="text-sm text-left mb-8">Free</h3>
        <p class="text-gray-500 text-sm text-left">Ideal for beginners</p>
        <p class="text-3xl font-bold mt-8 text-left text-slate-700">$0/month</p>
        <p class="text-gray-600 text-sm text-left py-2">
          Profiles & <a href="#" class="text-blue-700">Total free minutes:</a>
        </p>
        <p class="text-gray-400 text-left text-sm">
          2 <a href="#" class="text-md underline">(60 Minites)</a>
        </p>
        <p class="text-gray-800 text-base my-2 text-left">Additional seats:</p>
        <p class="text-gray-400 font-medium text-left text-sm my-5">1</p>
        <button
          class="bg-orange-500 text-white px-4 py-2 rounded mt-6 hover:bg-orange-600 w-full text-center"
        >
          Get Started
        </button>
      </div>

      <div
        class="bg-[#f7f9fd] pt-10 pb-20 px-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)]"
      >
        <h3 class="text-sm text-left mb-8">Base</h3>
        <p class="text-gray-500 text-sm text-left">Ideal for small teams</p>
        <p class="text-3xl font-bold mt-8 text-left text-slate-700">
          $19/month
        </p>
        <p class="text-gray-600 text-sm text-left py-2">
          Profiles & <a href="#" class="text-blue-700">Total free minutes:</a>
        </p>
        <div class="relative w-full">
          <Menu as="div" class="relative inline-block w-full text-left">
            <!-- Nút chọn -->
            <MenuButton
              class="w-full flex justify-between items-center p-2 border border-gray-300 bg-white text-gray-700 text-sm rounded-lg shadow-sm"
            >
              {{ selected }}
              <AkChevronDownSmall
                class="w-5 h-5 text-gray-500 transition-transform duration-200"
                :class="{ 'rotate-180': isOpen }"
              />
            </MenuButton>

            <!-- Danh sách Option -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <MenuItems
                class="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
              >
                <MenuItem
                  v-for="(item, index) in options"
                  :key="index"
                  v-slot="{ active }"
                >
                  <button
                    @click="selectOptionBase(item)"
                    class="w-full text-left p-2 text-sm"
                    :class="active ? 'bg-blue-100' : 'bg-white'"
                  >
                    {{ item }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <p class="text-gray-800 text-base my-2 text-left">Additional seats:</p>
        <p class="text-gray-400 text-left text-sm my-5">Unlimited</p>
        <button
          class="bg-orange-500 text-white px-4 py-2 rounded mt-6 hover:bg-orange-600 w-full text-center"
        >
          Subscribe Now
        </button>
        <ul class="text-left mt-6 text-gray-700 text-sm space-y-5">
          <p class="my-6">Including:</p>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">Automation</p>
          </li>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">ADB (Android Debug Bridge)</p>
          </li>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">Free minutes</p>
          </li>
        </ul>
      </div>

      <div
        class="bg-[#f7f9fd] pt-10 pb-20 px-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)]"
      >
        <h3 class="text-sm text-left mb-8 flex items-center">
          Pro
          <img
            src="https://www.geelark.com/wp-content/uploads/2024/07/pro-1.png"
            alt="icon"
            class="w-4 h-4 ml-1 mb-1"
          />
        </h3>
        <p class="text-gray-500 text-sm text-left">
          Ideal for professional teams
        </p>
        <p class="text-3xl font-bold mt-8 text-left text-slate-700">
          $29/month
        </p>
        <p class="text-gray-600 text-sm text-left py-2">
          Profiles & <a href="#" class="text-blue-700">Total free minutes:</a>
        </p>
        <div class="relative w-full">
          <Menu as="div" class="relative inline-block w-full text-left">
            <!-- Nút chọn -->
            <MenuButton
              class="w-full flex justify-between items-center p-2 border border-gray-300 bg-white text-gray-700 text-sm rounded-lg shadow-sm"
            >
              {{ selectedPro }}
              <AkChevronDownSmall
                class="w-5 h-5 text-gray-500 transition-transform duration-200"
                :class="{ 'rotate-180': isOpen }"
              />
            </MenuButton>

            <!-- Danh sách Option -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <MenuItems
                class="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
              >
                <MenuItem
                  v-for="(item, index) in optionsPro"
                  :key="index"
                  v-slot="{ active }"
                >
                  <button
                    @click="selectOptionPro(item)"
                    class="w-full text-left p-2 text-sm"
                    :class="active ? 'bg-blue-100' : 'bg-white'"
                  >
                    {{ item }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <p class="text-gray-800 text-base my-2 text-left">Additional seats:</p>
        <p class="text-gray-400 text-left text-sm my-5">Unlimited</p>
        <button
          class="bg-orange-500 text-white px-4 py-2 rounded mt-6 hover:bg-orange-600 w-full text-center"
        >
          Subscribe Now
        </button>
        <ul class="text-left mt-6 text-gray-700 text-sm space-y-5">
          <p class="my-6">Including:</p>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">Quick/Bulk profile creation</p>
          </li>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">
              TikTok Automation(bulk publishing video/analytics)
            </p>
          </li>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">Synchronizer</p>
          </li>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">AI editing</p>
          </li>
        </ul>
      </div>

      <div
        class="bg-[#f7f9fd] pt-10 pb-20 px-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)]"
      >
        <h3 class="text-sm text-left mb-8">Custom</h3>
        <p class="text-gray-500 text-sm text-left">Customize your plan</p>
        <p class="text-3xl font-bold mt-8 text-left text-slate-700">
          Let’s Talk
        </p>

        <button
          class="bg-orange-500 text-white px-4 py-2 rounded mt-6 hover:bg-orange-600 w-full text-center"
        >
          Contact us
        </button>
        <ul class="text-left mt-6 text-gray-700 text-sm space-y-5">
          <p>All features, plus:</p>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">
              Creation of more than 10000 profiles
            </p>
          </li>
          <li class="flex items-center gap-2 max-w-sm">
            <span>
              <CaCheckmarkOutline class="w-4 h-4 ml-2 text-gray-600" />
            </span>
            <p class="text-sm text-gray-900">Customized features</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CaCheckmarkOutline, AkChevronDownSmall } from "@kalimahapps/vue-icons";
import { ref } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import data from "../../../assets/data/PricingScreen/pricing-introducepricing.json";

const options = ref(data.options);
const optionsPro = ref(data.optionsPro);

const selected = ref(options.value[0]);
const selectedPro = ref(optionsPro.value[0]);

const selectOptionBase = (item) => {
  selected.value = item;
};

const selectOptionPro = (item) => {
  selectedPro.value = item;
};
</script>

<style scoped></style>
