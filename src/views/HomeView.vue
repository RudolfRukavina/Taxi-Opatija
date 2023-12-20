

<template>
  <img class="hero-photo h-1/3 sm:h-56" src="../assets/imgs/opatijamainphoto.jpeg" alt="">
  <div class="flex justify-center -mt-5">
    <div class="hero-hours">
      <p class="m-0 mx-1 p-1 px-12 text-lg fw-bold">0 - 24</p>
    </div>
  </div>
  <div class="bg-white">
    <div class="relative isolate px-6 lg:px-8">
      <div class="absolute inset-x-0 -top-1/3 sm:-top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8088ff] to-[#89e7fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl pt-10">
        <div class='flex justify-center'>
          <img src="../assets/imgs/grbopatije.png" alt="" class="-mt-5 object-cover w-3/12 sm:w-24" />
        </div>
        <div class="text-center">
          <h1 class="text-6xl font-bold tracking-tight text-gray-900">Taxi Opatija</h1>
          <h2 class="text-xl font-bold tracking-tight text-gray-900">Naša brza i pouzdana taxi služba.</h2>
          <div class="mt-10 flex items-center justify-center gap-x-6">

            <a id="callLink" href="tel:+38598491369" class="inline-block w-50">
              <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg">
                Pozovi prijevoz
              </button>
            </a>

          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-1/3 sm:top-[40%] -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8097ff] to-[#89e1fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
  <footer class="py-2 footer-border bg-gray-200 fixed bottom-0">
    <div class="mx-auto flex flex-col items-center justify-center text-gray-700">

      <div class='w-full grid grid-cols-3'>
        <div class='text-[8px]'>Vl. Ante Rukavina</div>
        <div class="font-bold text-xs">Taxi Opatija d.o.o.</div>
        <div class='text-[8px]'>Dr. Ante Mandića 2</div>
        <div class='text-[8px]'>OIB: 12352123435235</div>
        <a class='text-[10px]' href="tel:+38598491369">+385 98 491 369</a>
        <div class='text-[8px]'>51410 Opatija, Croatia</div>
      </div>
      <!-- <div class='text-[8px]'>Dr. Ante Mandića 2, Opatija</div>
      <div class='text-[8px]'>51410 Opatija</div>
      <div class='text-[8px]'>OIB: 234563425454365</div> -->
    </div>
  </footer>
</template>


<script setup>
  window.addEventListener('load', () => {
    const callLink = document.getElementById('callLink');
    callLink.click();
  });
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
}

button {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px, rgba(0, 0, 0, 0.3) 0px 4px 8px -2px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
}
</style>