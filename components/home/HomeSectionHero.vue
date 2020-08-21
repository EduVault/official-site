<template>
  <div class="px-10 pb-10">
    <img
      id="logo"
      class="px-2 md:max-w-sm max-w-xs max-w-full mx-auto"
      src="~/assets/img/eduvault-logo.png"
      alt="EDUVAULT logo"
    />
    <h1 class="text-center">EDUVAULT</h1>
    <h2 class="text-center">YOUR DATA</h2>
    <h2 class="text-center">YOUR EDUCATION</h2>
    <h2 class="text-center">ANYWHERE</h2>
    <p
      class="bg-orange text-center text-white py-1 px-2 mt-2 w-32 rounded mx-auto cursor-pointer"
      @click="scrolltoEl('try-now')"
    >
      TRY NOW
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { anyInView } from '../../helpers/isInView'

export default Vue.extend({
  mounted() {
    const logo = document.getElementById('logo')
    const bounds = logo!.getBoundingClientRect()
    let prevScrollY = window.scrollY
    let prevDegree = 0
    let scrolling: boolean = false

    function rotateLogo(e: MouseEvent) {
      if (!scrolling) {
        const centerX = bounds.left + bounds.width / 2 - window.pageXOffset
        const centerY = bounds.top + bounds.height / 2 - window.pageYOffset
        const radians = Math.atan2(e.clientX - centerX, e.clientY - centerY)
        const degree = radians * (180 / Math.PI) * -1 + 180
        logo!.style.transform = `rotate(${degree}deg)`
      }
    }
    function rotateOnScroll() {
      scrolling = true
      const degree = window.scrollY - prevScrollY
      logo!.style.transform = `rotate(${
        prevDegree ? prevDegree + degree : degree
      }deg)`
      prevScrollY = window.scrollY
      prevDegree = prevDegree ? prevDegree + degree : degree
      scrolling = false
    }
    window.addEventListener('mousemove', rotateLogo)
    window.onscroll = () => {
      if (anyInView(logo!)) rotateOnScroll()
    }
  },
  methods: {
    scrollToEl: (anchor: string) => {
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
