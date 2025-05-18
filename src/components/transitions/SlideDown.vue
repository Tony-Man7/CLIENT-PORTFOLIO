<script setup>
import useInView from '@/components/composables/useInView.js'

const props = defineProps({
  delay: { type: Number, default: 0 },
  duration: { type: Number, default: 1000 },
})

const { element, isVisible } = useInView()
</script>

<template>
  <div ref="element">
    <transition
      appear
      :enter-active-class="`transition-all duration-[${props.duration}ms] ease-in-out`"
      enter-from-class="opacity-0 -translate-y-8 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
    >
      <div
        v-if="isVisible"
        :style="{ transitionDelay: `${props.delay}ms` }"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
