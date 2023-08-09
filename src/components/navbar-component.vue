<script setup>
  import logo from "../assets/logo.svg"
  import "../assets/index.css"
  import { ref } from 'vue';
  import calender from "../assets/icon-calendar.svg"
  import planning from "../assets/icon-planning.svg"
  import todo from "../assets/icon-todo.svg"
  import reminders from "../assets/icon-reminders.svg"

  const toggleDropdown = ref(false)
  const setToggleDropdown = () => {
    toggleDropdown.value = !toggleDropdown.value;
  }
  const toggleDropdown2 = ref(false)
  const setToggleDropdown2 = () => {
    toggleDropdown2.value = !toggleDropdown2.value;
  }
  const dropdownContent = [
    {
      index:1,
      content:"Todo list",
      imgSrc:todo,
      alt:"todo-icon"
    },
    {
      index:2,
      content:"Calender",
      imgSrc:calender,
      alt:"calender-icon"
    },
    {
      index:3,
      content:"Reminders",
      imgSrc:reminders,
      alt:"reminders-icon"
    },
    {
      index:4,
      content:"Planning",
      imgSrc:planning,
      alt:"planning-icon"
    },
    {
      index:5,
      content:"History"
    },
    {
      index:6,
      content:"Our team"
    },
    {
      index:7,
      content:"Blog"
    },
  ]
  const dropdownOneClass = "flex items-center justify-start gap-[1.1rem] font-Med text-gray cursor-pointer"
  const dropdownTwoClass = "flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer"
  const firstDropDownClass = "grid gap-[0.5rem] bg-white p-[1.25rem] rounded-[10px] dropdown z-[2]"
</script>

<template>
  <nav class="flex items-start justify-between list-none p-[2rem]">
    <div class="flex items-start justify-between gap-[2rem]">
      <img :src="logo" alt="website-logo" class="self-start"/>
      <div class="gap-[0.75rem] grid">
        <li aria-label="nav-item-features" class="flex text-gray hover:text-black items-center justify-end font-Med gap-[10px] cursor-pointer hover:stroke-black" id="link" @click="setToggleDropdown()">
          Features
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" :class="toggleDropdown ? 'rotate' : 'rotate-alt'">
            <path d="m1 5 4-4 4 4" stroke="#686868" stroke-width="1.5" fill="none" class="arrow"/>
          </svg>
        </li>
        <ul aria-label="dropdown-menu" :class="[toggleDropdown.valueOf() == false ? 'invisible' : 'visible',firstDropDownClass,]">
          <li v-for="content in dropdownContent.slice(0,4)" :key="content.index" :class="dropdownOneClass">
            <img :src="content.imgSrc" :alt="content.alt"/>
            {{ content.content }}
          </li>
        </ul>
      </div>
      <div class="gap-[0.75rem] grid">
        <li aria-label="nav-item-company" class="flex text-gray features2 hover:text-black items-center justify-start font-Med gap-[10px] cursor-pointer" id="link" @click="setToggleDropdown2()">
          Company
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" :class="toggleDropdown2 ? 'rotate' : 'rotate-alt'">
            <path d="m1 5 4-4 4 4" stroke="#686868" stroke-width="1.5" fill="none" class="arrow"/>
          </svg>
        </li>
        <ul aria-label="dropdown-menu" :class="[toggleDropdown2.valueOf() == false ? 'invisible' : 'visible',firstDropDownClass,]">
          <li aria-label="dropdown-item" v-for="content in dropdownContent.slice(4,7)" :key="content.index" :class="dropdownTwoClass">
            <img :src="content.imgSrc" :alt="content.alt"/>
            {{ content.content }}
          </li>
        </ul>
      </div>
      <li aria-label="nav-item-careers" class="font-Med ml-[-1.75rem] cursor-pointer text-gray hover:text-black">
        Careers
      </li>
      <li aria-label="nav-item-about" class="font-Med text-gray cursor-pointer hover:text-black">
        About
      </li>
    </div>
    <div class="flex gap-[2rem]">
      <button class="font-Med">
        Login
      </button>
      <button class="font-Med bg-transparent border-[.134rem] hover:border-black px-[1.25rem] py-[0.6rem] rounded-[15px] border-gray text-gray hover:text-black">
        Register
      </button>
    </div>
  </nav>
</template>

<style>
  img{
    align-self: center;
  }
  .dropdown{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
  .rotate {
    animation: rotate 0.3s forwards;
  }
  .rotate-alt {
    animation: rotate-alt 0.3s forwards;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  @keyframes rotate-alt {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
</style>