<script setup>
  import databiz from "../assets/client-databiz.svg"
  import audiophile from "../assets/client-audiophile.svg"
  import meet from "../assets/client-meet.svg"
  import maker from "../assets/client-maker.svg"
  import heroImg from "../assets/image-hero-desktop.png"
  const imgs = [
    {
      index:1,
      img:databiz,
      alt:"client-databiz"
    },
    {
      index:1,
      img:audiophile,
      alt:"client-audiophile"
    },
    {
      index:1,
      img:meet,
      alt:"client-meet"
    },
    {
      index:1,
      img:maker,
      alt:"client-maker"
    },
  ]
</script>

<template>
  <main class="px-[13rem] flex items-center justify-center mt-[-7rem] gap-[26rem]">
    <section class="grid gap-[3rem]">
      <h1 class="font-Bold text-[85px] leading-[6rem] w-[35rem] z-[1]">
        Make remote work
      </h1>
      <p class="font-Med text-gray text-[20px] w-[30rem]">
        Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
      </p>
      <button class="bg-black text-white h-[3.9rem] pt-[0.25rem] w-[10rem] text-[17px] font-Bold rounded-[13px] mt-[1rem] border-[0.134rem] hover:border-black hover:bg-transparent hover:text-black">
        Learn more
      </button>
      <div class="flex gap-[3rem] mt-[3rem]">
        <img v-for="img in imgs" :key="img.index" :src="img.img" :alt="img.alt"/>
      </div>
    </section>
    <img :src="heroImg" alt="hero-image" width="525"/>
  </main>
</template>

<style>
  img{
    height: fit-content;
  }
</style>