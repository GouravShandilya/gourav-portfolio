<template>
  <div
    :class="{
      'animate-swipe': isAnimated,
    }"
    class="glass absolute z-[3000] left-3 top-2 p-2 flex items-center justify-center overflow-hidden transition-all duration-300"
  >
    <svg
      v-if="changesSaved"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-shrink-0"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 3a6 6 0 0 0-5.99 5.661A5.627 5.627 0 0 0 7 19.5v.001h10v-.001a5.625 5.625 0 0 0 2.67-10.506l-1.114 1.114a4.126 4.126 0 0 1-1.806 7.891V18h-9.5v-.002a4.125 4.125 0 0 1-.681-8.21 4.5 4.5 0 0 1 8.549-2.606l1.116-1.117A5.998 5.998 0 0 0 11 3Zm7.631 4.91a.75.75 0 1 0-1.053-1.068L10.67 13.75l-1.93-1.93a.75.75 0 1 0-1.088 1.03l-.001.002 2.444 2.445a.748.748 0 0 0 1.11.037v.001l7.425-7.424Z"
        fill="currentColor"
      ></path>
    </svg>
    <svg
      v-else
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="currentColor"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.208 3.5c-2.82 0-5.2 2.14-5.474 4.938a.191.191 0 0 1-.119.157 5.884 5.884 0 0 0-3.865 5.523C1.75 17.368 4.392 20 7.646 20h8.708c3.254 0 5.896-2.631 5.896-5.882 0-3.071-2.392-5.634-5.418-5.867a.24.24 0 0 1-.202-.19A5.5 5.5 0 0 0 11.208 3.5ZM7.227 8.584C7.425 6.563 9.15 5 11.208 5a4 4 0 0 1 3.944 3.314c.13.767.779 1.372 1.565 1.433 2.245.172 4.033 2.084 4.033 4.371a4.389 4.389 0 0 1-4.396 4.382H7.646a4.389 4.389 0 0 1-4.396-4.382 4.384 4.384 0 0 1 2.88-4.114 1.69 1.69 0 0 0 1.097-1.42Z"
        fill="currentColor"
      ></path>
    </svg>
    <div
      :class="{ 'animate-text-slide': isAnimated }"
      class="text-container whitespace-nowrap"
    >
      <p class="font-light text-sm ml-2">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Changes Saved",
  },
  isAnimated: {
    type: Boolean,
    default: false,
  },
  changesSaved: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.text-container {
  max-width: 0;
  overflow: hidden;
  transition: max-width 0.3s ease-in-out;
  white-space: nowrap;
}

.animate-text-slide {
  animation: textSlideInOut 4s ease-in-out forwards;
}

.animate-swipe {
  .text-container {
    max-width: 200px; // Adjust based on your content
  }
}

@keyframes textSlideInOut {
  0% {
    max-width: 0;
    opacity: 0;
  }
  15% {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    max-width: 200px;
    opacity: 1;
  }
  85% {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    max-width: 200px;
    opacity: 1;
  }
  100% {
    max-width: 0;
    opacity: 0;
  }
}
</style>
