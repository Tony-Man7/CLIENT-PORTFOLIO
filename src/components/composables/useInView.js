import { ref, onMounted, onUnmounted } from 'vue'

export default function useInView() {
  const isVisible = ref(false)
  const element = ref(null)

  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    if (observer && element.value) {
      observer.unobserve(element.value)
    }
  })

  return { element, isVisible }
}
