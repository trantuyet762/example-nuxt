<script setup>
import plansData from "../../assets/data/PricingScreen/pricing-cloudphonecharges.json";
const plans = plansData.plans;
</script>

<template>
  <div class="container mx-auto py-10 max-w-5xl">
    <h2 class="text-4xl font-bold text-center text-blue-600">
      Cloud phone charges
    </h2>
    <p class="text-gray-600 text-center mt-2 text-sm">
      GeeLark provides a range of cloud phones tailored to diverse business
      needs.
      <br />
      Our flexible billing system charges in 1-minute increments, with
      <strong class="text-black">no fees for non-use</strong>.
    </p>

    <div class="overflow-x-auto mt-6">
      <table class="min-w-full text-sm">
        <thead class="">
          <tr>
            <th class="p-2 text-left"></th>
            <th v-for="plan in plans" :key="plan.version" class="p-2 text-left">
              {{ plan.version }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100">
            <td class="p-2 font-semibold">Basics</td>
            <td v-for="plan in plans" :key="plan.version" class="p-2">
              {{ plan.basics }}
            </td>
          </tr>
          <tr>
            <td class="p-2 font-semibold">Performance</td>
            <td v-for="plan in plans" :key="plan.version" class="p-2">
              {{ plan.performance }}
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="p-2 font-semibold">Recommended use scenarios</td>
            <td v-for="plan in plans" :key="plan.version" class="p-2">
              {{ plan.scenarios }}
            </td>
          </tr>
          <tr>
            <td class="p-2 font-semibold">Upload Applications</td>
            <td
              v-for="plan in plans"
              :key="plan.version"
              class="p-2 text-center"
            >
              <span v-if="plan.upload">✔</span>
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="p-2 font-semibold text-blue-500">Time add-on</td>
            <td
              v-for="plan in plans"
              :key="plan.version"
              class="p-2 text-center"
            >
              <span v-if="plan.timeAddon">✔</span>
            </td>
          </tr>
          <tr>
            <td class="p-2 font-semibold">Charges</td>
            <td v-for="plan in plans" :key="plan.version" class="p-2">
              {{ plan.charges }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
