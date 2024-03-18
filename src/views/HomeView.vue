

<template>
  <header>
    <img class="hero-photo h-1/3 sm:h-56 md:h-96" src="../assets/imgs/opatijamainphoto.jpeg" alt="">
    <div class="flex justify-center -mt-5">
      <div class="hero-hours">
        <p class="m-0 mx-1 p-1 px-12 text-xl fw-bold">0 - 24</p>
      </div>
    </div>
  </header>
  <main>
    <div>
      <div class="relative isolate px-6 lg:px-8">
        <div class="mx-auto max-w-2xl pt-10">
          <div class='flex justify-center'>
            <img src="../assets/imgs/grbopatije.png" alt="" class="-mt-5 object-cover w-3/12 sm:w-24" />
          </div>
          <div class="text-center">
            <h1 class="text-6xl font-bold tracking-tight text-gray-900">Taxi Opatija</h1>
            <h2 class="text-xl font-bold tracking-tight text-gray-900">Brza i pouzdana <span class='text-amber-600'>taxi
                služba.</span></h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">

              <a id="callLink" href="tel:+38598491369" class="inline-block w-50 ">
                <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg">
                  Pozovi prijevoz
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <footer class="py-2 footer-border bg-gray-200 fixed bottom-0">
    <div class="mx-auto flex flex-col items-center justify-center text-gray-700">

      <div class='w-full grid grid-cols-3'>
        <div class='text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]'>Vl. Ante Rukavina</div>
        <div class="font-bold text-[10px] sm:text-[14px] lg:text-[18px] xl:text-[22px]">Taxi Opatija d.o.o.
        </div>
        <div class='text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]'>Dr. Ante Mandića 2</div>
        <div class='text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]'>OIB: 12352123435235</div>
        <a class='text-[10px] sm:text-[14px] lg:text-[18px] xl:text-[20px]' href="tel:+38598491369">+385 98 491 369</a>
        <div class='text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[18px]'>51410 Opatija, Croatia</div>
      </div>
    </div>
  </footer> -->




  <footer class="bg-white rounded-lg shadow-2xl dark:bg-gray-900  w-full fixed bottom-0">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-4">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="tel:+38598491369" class="flex justify-between items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <div class='flex justify-center'> <img src="../assets/imgs/grbopatije.png" class="h-8"
              alt="Taxi Opatija Logo" /> <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Taxi Opatija</span></div>

          <span class="self-center text-md font-semibold whitespace-nowrap dark:text-white">+385 98 491
            369</span>

        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Uvjeti korištenja</a>
          </li>

          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privatnost</a>
          </li>
          <span class='absolute top-0 right-0 text-2xl md:text-3xl lg:text-4xl -my-5 p-1 py-2 mx-1 cursor-pointer'
            v-show='!showLegal' @click='showLegal = !showLegal'>ℹ️</span>
          <span class='absolute top-0 right-0 text-2xl md:text-3xl lg:text-4xl -my-5 p-1 py-2 mx-1 cursor-pointer'
            v-show="showLegal" @click='showLegal = !showLegal'>⬇️</span>
        </ul>


      </div>

      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" v-show='showLegal' />

      <p class='text-center text-[17px] my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4' v-show='showLegal'>
        <sub>
          <span class='font-bold'>Naziv tvrtke:</span>
          Taxi Opatija - Obrt za usluge <br>
          <span class='font-bold'> Adresa (sjedište) tvrtke:</span> Ante Mandića 2 <br>
          <span class='font-bold'>E-mail:</span> anterukavina@gmail.com <br>
          <span class='font-bold'>Broj telefona:</span> 098491369 <br>
          <span class='font-bold'>Bankovni račun (IBAN):</span> 245743255463 <br>
          <span class='font-bold'>Poslovna banka:</span> Erste bank <br>
          <span class='font-bold'>OIB:</span> 2463574656345235465 <br>
          <span class='font-bold'>Matični broj:</span> 32546357465352 <br>
          <span class='font-bold'>MBS:</span> 3246574634</sub>
      </p>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 relative">© 2024 <a
          href="tel:+38598491369" class="hover:underline">Taxi Opatija</a>

      </span>

    </div>
  </footer>
</template>

<script setup>
  import { ref } from "vue"
  const showLegal = ref(false);
</script>

<style>
.hero-photo {
  width: 100%;
  object-fit: cover;
  border-radius: 0 0 1000em 1000em / 0 0 100em 100em;
}


.footer-border {
  width: 100%;
  object-fit: cover;
  border-radius: 1000em 1000em 0 0 / 20em 20em 0 0;
  border-top: 0.1px dotted rgba(0, 30, 180, 0.347);
  background: rgb(0, 29, 180);
  background: linear-gradient(0deg, rgba(0, 29, 180, 0.0970982142857143) 0%, rgba(0, 159, 180, 0.09429709383753504) 100%);
}


.hero-hours {
  font-weight: 600;
  color: white;
  background: rgb(0, 153, 180);
  background: linear-gradient(0deg, rgba(0, 153, 180, 0.9990589985994398) 0%, rgba(0, 114, 180, 1) 100%);
  border-radius: 23px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

body {
  overflow-y: hidden;
  background: rgb(58, 59, 180);
  background: linear-gradient(0deg, rgba(58, 59, 180, 0) 0%, rgba(29, 208, 253, 0.0746892507002801) 75%, rgba(147, 69, 252, 0) 100%);
}


button {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px, rgba(0, 0, 0, 0.3) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
}
</style>