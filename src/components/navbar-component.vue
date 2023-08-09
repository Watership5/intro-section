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
  const navContents = [
    {
      index:1,
      content:"Features",
      func:setToggleDropdown
    },
    {
      index:2,
      content:"Company",
      func:setToggleDropdown2
    },
    {
      index:3,
      content:"Careers",
      func:null
    },
    {
      index:4,
      content:"About",
      func:null
    },
  ]
</script>

<template>
  <nav class="flex items-start justify-between list-none p-[2rem]">
    <div class="flex items-start justify-between gap-[2rem]">
      <img :src="logo" alt="website-logo" class="self-start"/>
      <div v-for="content in navContents" :key="content.index" class="gap-[0.75rem] flex flex-col">
        <li v-if="content.index == 1" aria-label="nav-item-features" class="flex text-gray hover:text-black items-center justify-end font-Med gap-[10px] cursor-pointer hover:stroke-black" id="link" @click="setToggleDropdown()">
          {{ content.content }}
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" :class="toggleDropdown ? 'rotate' : 'rotate-alt'">
            <path d="m1 5 4-4 4 4" stroke="#686868" stroke-width="1.5" fill="none" class="arrow"/>
          </svg>
        </li>
        <ul v-if="content.index == 1" aria-label="dropdown-menu" :class="[toggleDropdown.valueOf() == false ? 'invisible' : 'visible','grid gap-[0.5rem] bg-white p-[1.25rem] rounded-[10px] dropdown z-[2]',]">
          <li aria-label="dropdown-menu-todo" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
            <img :src="todo" alt="todo-icon"/>
            Todo list
          </li>
          <li aria-label="dropdown-menu-calander" class="flex items-center justify-start gap-[1.1rem] font-Med text-gray cursor-pointer">
            <img :src="calender" alt="calender-icon"/>
            Calender
          </li>
          <li aria-label="dropdown-menu-reminders" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
            <img :src="reminders" alt="reminders-icon"/>
            Reminders
          </li>
          <li aria-label="dropdown-menu-planning" class="flex items-center justify-start gap-[1.1rem] font-Med text-gray cursor-pointer">
            <img :src="planning" alt="planning-icon"/>
            Planning
          </li>
        </ul>
        <li v-if="content.index == 2" aria-label="nav-item-company" class="flex text-gray features2 hover:text-black items-center justify-start font-Med gap-[10px] cursor-pointer" id="link" @click="setToggleDropdown2()">
          {{ content.content }}
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" :class="toggleDropdown2 ? 'rotate' : 'rotate-alt'">
            <path d="m1 5 4-4 4 4" stroke="#686868" stroke-width="1.5" fill="none" class="arrow"/>
          </svg>
        </li>
        <ul v-if="content.index == 2" aria-label="dropdown-menu" :class="[toggleDropdown2.valueOf() == false ? 'invisible' : 'visible','grid gap-[0.5rem] bg-white p-[1.25rem] rounded-[10px] dropdown',]">
          <li aria-label="dropdown-menu-history" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
            History
          </li>
          <li aria-label="dropdown-menu-team" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
            Are team
          </li>
          <li aria-label="dropdown-menu-blog" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
            Blog
          </li>
        </ul>
        <li v-else-if="content.index != 1 && content.index != 2" :class="[content.index == 3 ? 'ml-[-1rem]' : 'ml-0', 'font-Med text-gray cursor-pointer hover:text-black mt-[.05rem]']">
          {{ content.content }}
        </li>
      </div>
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
  @keyframes slide-in{
    from{
      opacity: 0;
      transform: translate(-100px);
    }
    to{
      opacity: 1;
      transform: translate(0px);
    }
  }
</style>
  <!-- <div class="gap-[0.75rem] grid">
    <li aria-label="nav-item-company" class="flex text-gray features2 hover:text-black items-center justify-start font-Med gap-[10px] cursor-pointer" id="link" @click="setToggleDropdown2()">
      Company
      <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" :class="toggleDropdown2 ? 'rotate' : 'rotate-alt'">
        <path d="m1 5 4-4 4 4" stroke="#686868" stroke-width="1.5" fill="none" class="arrow"/>
      </svg>
    </li>
    <ul aria-label="dropdown-menu" :class="[toggleDropdown2.valueOf() == false ? 'invisible' : 'visible','grid gap-[0.5rem] bg-white p-[1.25rem] rounded-[10px] dropdown',]">
      <li aria-label="dropdown-menu-history" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
        History
      </li>
      <li aria-label="dropdown-menu-team" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
        Are team
      </li>
      <li aria-label="dropdown-menu-blog" class="flex items-center justify-start gap-[1.25rem] font-Med text-gray cursor-pointer">
        Blog
      </li>
    </ul>
  </div> -->
  <!-- <li aria-label="nav-item-careers" class="font-Med ml-[-0.75rem] cursor-pointer text-gray hover:text-black">
    Careers
  </li>
  <li aria-label="nav-item-about" class="font-Med text-gray cursor-pointer hover:text-black">
    About
  </li> -->