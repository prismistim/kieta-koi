<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'

const formState = ref({
  email: '',
  password: ''
})

const nuxtApp = useNuxtApp()
const provider = new GoogleAuthProvider()

const submitForm = async () => {
  try {
    // await createUserWithEmailAndPassword(nuxtApp.$auth, formState.value.email, formState.value.password)
    const res = await signInWithPopup(nuxtApp.$auth, provider)

    if (res.user) {
      console.log('user signed in')
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  try {
    const result = await getRedirectResult(nuxtApp.$auth)
  
    if (result.user) {
      console.log('user signed in')
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div>
    <NuxtWelcome />
    <form>
      <input type="email" v-model="formState.email">
      <input type="password" v-model="formState.password">
    </form>
    <button @click="submitForm">submit</button>
  </div>
</template>
