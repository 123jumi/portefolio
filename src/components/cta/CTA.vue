<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
const onSubmit = (event: Event) => {
  event.preventDefault()
  console.log(form.value)
}
const onReset = () => {
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<template>
  <BContainer>
    <BRow>
      <h2>Contact Us</h2>
      <p>Fill out the form below to get in touch with us.</p>
    </BRow>
    <BRow>
      <BForm @submit="onSubmit" @reset="onReset" class="form">
        <div>
          <BFormFloatingLabel for="name">Name:</BFormFloatingLabel>
          <BFormInput
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <BFormFloatingLabel for="email">Email:</BFormFloatingLabel>
          <BFormInput
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <BFormFloatingLabel for="message">Message:</BFormFloatingLabel>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Enter your message"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="btn-wrap">
          <BButton type="submit" variant="primary">Submit</BButton>
          <BButton type="reset" variant="danger">Reset</BButton>
        </div>
      </BForm>
    </BRow>
  </BContainer>
</template>

<style scoped lang="sass">
.form
  display: grid
  gap: 1rem
  max-width: 300px
  margin: 0 auto

  div
    display: grid
    gap: 0.5rem

  BFormFloatingLabel
    font-weight: bold

  BFormInput,
  BFormTextarea
    width: 100%
    padding: 0.5rem
    border: 1px solid #ccc
    border-radius: 0.25rem

  .btn-wrap
    display: flex
    gap: 1rem
    justify-content: space-around

  button
    padding: 0.5rem 1rem
    border: none
    border-radius: 0.25rem
    color: white
    cursor: pointer
    transition: background-color 0.3s

    &:hover
      background-color: #0056b3
</style>
