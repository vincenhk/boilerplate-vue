<script setup>

import { Field, Form } from 'vee-validate'
</script>

<template>
  <!--  <section class="section-full-w bg-amber-500">-->
  <div class="">
    <Form>
      <div class="">
        <label for="username"> username</label>
        <Field id="username" name="username" class="border-2"/>
      </div>
    </Form>
  </div>
  <!--  </section>-->
</template>

<style scoped>

</style>