<template>
  <div class="max-w-4xl mx-auto text-center py-16 px-4">
    <!-- Tiêu đề -->
    <h2 class="text-4xl font-bold text-blue-600 mb-16">Payment methods</h2>

    <!-- Danh sách phương thức thanh toán -->
    <div class="flex flex-wrap justify-center gap-6 mt-6">
      <img
        v-for="(method, index) in paymentMethods"
        :key="index"
        :src="method"
        alt="Payment Method"
        class="h-16"
      />
    </div>
  </div>
</template>

<script setup>
import paymentMethodsData from "../../assets/data/PricingScreen/pricing-paymentmethod.json";
const paymentMethods = paymentMethodsData.paymentMethods;
</script>
