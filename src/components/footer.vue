<template>
  <footer class="bg-[#121214] text-[#A8A8A8] flex flex-col justify-between px-[2rem] md:px-[6.5rem] py-[1.1rem] gap-8 text-center">
    <div class="flex flex-col md:flex-row flex-wrap justify-center xl:justify-between gap-9 items-center">
      <img class="w-[4.5rem] h-[4rem] grayscale" src="../../public/icons/bitCodeLogo.png" alt="">
      <div class="flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-14 lg:gap-28  text-xl font-semibold">
        <a href="#home" class="">Home</a>
        <a href="#sobre" class="hover:text-[#fffff0]">Sobre</a>
        <a href="#servicos" class="hover:text-[#fffff0]">Serviço</a>
        <a href="#portfolio" class="hover:text-[#fffff0]">Portifólio</a>
        <a href="#clientes" class="hover:text-[#fffff0]">Clientes</a>
        <a href="#contato" class="hover:text-[#fffff0]">Contato</a>
      </div>
      <div class="flex flex-row gap-1 justify-center">
        <a href="mailto:contato@bitcodesolucoes.com.br"><img class="w-10 h-10" src="../../public/icons/email.svg" alt=""></a>
        <a target="_blank" href="https://www.instagram.com/bitcodesolucoes/"><img class="w-10 h-10" src="../../public/icons/instagram.svg" alt=""></a>
        <a target="_blank" href="https://wa.me/5512996034859"><img class="w-10 h-10" src="../../public/icons/whatsapp.svg" alt=""></a>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <span class="w-full h-[1px] bg-[#9F9E9E]"></span>
      <div class="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center">
        <span class="text-sm font-normal">© 2024 Bit Code Soluções, Inc. Todos os direitos reservados.</span>
        <a href="#header"><span class="text-sm font-normal uppercase text-base">Voltar para o topo</span></a>
      </div>
    </div>
  </footer>
</template>