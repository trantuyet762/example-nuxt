<template>
  <footer class="bg-[#212429] text-gray-300 py-10">
    <div class="max-w-7xl mx-auto px-6 flex gap-20 max-h-96">
      <div class="w-1/3">
        <img
          src="https://www.geelark.com/wp-content/uploads/2024/03/白字.png"
          alt="GeeLark Logo"
          class="w-52 mx-auto md:mx-0"
        />
        <p class="mt-2">Connect with us</p>
        <a
          href="mailto:support@geelark.com"
          class="text-blue-400 hover:underline"
          >support@geelark.com</a
        >
        <div class="flex space-x-3 mt-4">
          <TelegramIcon class="text-xl" />
          <InstagramIcon class="text-xl" />
          <TwitterIcon class="text-xl" />
          <FacebookIcon class="text-xl" />
          <LinkInIcon class="text-xl" />
        </div>
      </div>
      <div class="flex flex-col gap-8 flex-wrap">
        <div v-for="(category, index) in categories" :key="index">
          <h3 class="text-white font-semibold">{{ category.title }}</h3>
          <ul class="mt-2 space-y-4">
            <li v-for="(item, i) in category.items" :key="i">
              <a href="#" class="hover:underline text-[#eceff1] text-base">{{
                item
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-gray-700 mt-20 pt-6 text-center">
      <div class="mt-4 space-x-4 mb-7">
        <a href="#" class="hover:underline">Privacy policy</a>
        <a href="#" class="hover:underline">Terms of use</a>
        <a href="#" class="hover:underline">Refund policy</a>
      </div>
      <p>© 2025 42 STUDIO PTE. LTD. All rights reserved.</p>
      <p>Built with ❤️ and ☕ in SG</p>
    </div>
  </footer>
</template>

<script>
import {
  AkTelegramFill,
  AkInstagramFill,
  AkTwitterFill,
  AkFacebookFill,
  AkLinkedinBoxFill,
} from "@kalimahapps/vue-icons";

export default {
  components: {
    TelegramIcon: AkTelegramFill,
    InstagramIcon: AkInstagramFill,
    TwitterIcon: AkTwitterFill,
    FacebookIcon: AkFacebookFill,
    LinkInIcon: AkLinkedinBoxFill,
  },
  data() {
    return {
      categories: [
        {
          title: "Antidetect Platform",
          items: [
            "Android antidetect",
            "Antidetect phone",
            "Antidetect browser for Android",
            "Android emulator",
          ],
        },
        {
          title: "Multi-account management",
          items: [
            "Create multiple TikTok accounts",
            "Create multiple Telegram accounts",
            "Create multiple Gmail accounts",
            "Create multiple Instagram accounts",
          ],
        },
        {
          title: "Product",
          items: ["Sign up", "Download"],
        },
        {
          title: "Resources",
          items: ["Blog", "Affiliate Program", "Contacts", "Glossary"],
        },
        {
          title: "Support",
          items: ["Documentation", "Support in Telegram", "Online chat"],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
