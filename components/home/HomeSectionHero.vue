<template>
  <div class="px-10 pb-10">
    <img
      id="logo"
      class="px-2 max-w-sm mx-auto"
      src="~/assets/img/eduvault-logo.png"
      alt="EDUVAULT logo"
    />
    <h1 class="text-center">EDUVAULT</h1>
    <h2 class="text-center">YOUR DATA</h2>
    <h2 class="text-center">YOUR EDUCATION</h2>
    <h2 class="text-center">ANYWHERE</h2>
    <p
      class="bg-orange text-center text-white py-1 px-2 mt-2 w-32 rounded mx-auto cursor-pointer"
      @click="scroll('try-now')"
    >
      TRY NOW
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    const logo = document.getElementById('logo')
    const bounds = logo!.getBoundingClientRect()
    function rotateLogo(e: any) {
      const centerX = bounds.left + bounds.width / 2 - window.pageXOffset
      const centerY = bounds.top + bounds.height / 2 - window.pageYOffset
      const radians = Math.atan2(e.clientX - centerX, e.clientY - centerY)
      const degree = radians * (180 / Math.PI) * -1 + 180
      logo!.style.transform = 'rotate(' + degree + 'deg)'
    }
    window.addEventListener('mousemove', rotateLogo)
  },
  methods: {
    scroll: (anchor: string) => {
      const element = document.querySelector('#' + anchor)
      const topPos = element!.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      })
    },
  },
})
</script>
<style scoped></style>
