<script setup>

import { ErrorMessage, Field, Form } from 'vee-validate'
import { formLogin } from '@/common/form.content.js'


import { ref } from 'vue';

// Reactive state for password visibility
const showPassword = ref(false);

// Toggle password visibility function
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
}

const schemaRule = {
  [formLogin.nik.name] : formLogin.nik.rule,
  [formLogin.password.name] : formLogin.password.rule
}

</script>

<template>
  <!--  <section class="section-full-w"> -->
  <div class="relative h-screen">
    <!-- Background overlay -->
    <div class="absolute z-10 inset-0 bg-white h-full w-full p-0"></div>
    <div class="relative z-20">
      <div class="grid grid-cols-2">
        <!-- Form -->
        <div class="flex justify-center items-center">
          <div class="max-w-xs">
            <div class="flex flex-col items-center justify-center space-y-2">
              <img src="../assets/img/logo-ad1forflow.png" alt="">
              <span class="text-xl font-bold">AD1FORFLOW</span>
              <p class="text-sm">Silahkan masuk dengan NIK yang terdaftar pada sistem Adira</p>
            </div>

            <Form class="text-sm pt-5" :validation-schema="schemaRule" @submit.prevent="">
              <div class="space-y-2">
                <div class="space-y-1">
                  <label :for="formLogin.nik.name" class="font-bold text-xs"> NIK </label>
                  <div>
                    <Field :id="formLogin.nik.name" :name="formLogin.nik.name" class="input-basic w-full " />
                  </div>
                  <ErrorMessage class="italic text-red-500 text-xs" :name="formLogin.nik.name" />
                </div>
                <div class="space-y-1">
                  <label :for="formLogin.password.label" class="font-bold text-xs"> Kata Sandi </label>
                  <div class="flex rounded border-2 ">
                    <Field :id="formLogin.password.name" :name="formLogin.password.name" class="input-invisible w-full" />
                    <button type="button" class="px-2"><i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" class="text-gray-400" @click="togglePasswordVisibility"></i></button>
                  </div>
                  <ErrorMessage class="italic text-red-500 text-xs" :name="formLogin.password.name" />

                </div>
                <button class="text-sm button-long">Masuk</button>
              </div>
            </Form>
          </div>

        </div>
        <div class="relative flex justify-center bg-amber-400 h-screen">
          <img src="../assets/img/ilustration-people.png" alt="Logo" class="absolute h-screen object-cover">
          <img src="../assets/img/logo-admf.png" alt="Logo" class="absolute object-cover right-0 pr-10 pt-5">
        </div>
      </div>

    </div>
  </div>
  <!--  </section>-->
</template>

<style scoped>

</style>