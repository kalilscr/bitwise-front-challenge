<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-fuchsia-950 text-white py-16 px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-16 mb-16">
        <div class="flex-1">
          <div class="flex flex-col lg:flex-row gap-16 items-center">
            <img
              src="/src/assets/logo_footer.png"
              alt="Bitwise Logo"
              class="h-10 mt-8 mb-6 max-w-28"
            />

            <p class="text-sm leading-relaxed text-fuchsia-200 max-w-xs">
              Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital
              exerce sobre a sociedade, mudando o rumo dia a dia, facilitando atividades comuns e
              acelerando os negócios.
            </p>
          </div>
        </div>

        <div>
          <div class="flex flex-col lg:flex-row gap-16">
            <div>
              <h3 class="text-xs font-bold mb-4 text-fuchsia-200">BRASIL</h3>
              <p class="text-sm leading-relaxed text-fuchsia-200">R. Raphael Dias da Silva, 75</p>
              <p class="text-sm leading-relaxed text-fuchsia-200">3º andar - Sala 306 e 308</p>
              <p class="text-sm leading-relaxed text-fuchsia-200">Campinas - Sorocaba/SP</p>
            </div>

            <div>
              <h3 class="text-xs font-bold mb-4 text-fuchsia-200">CANADÁ</h3>
              <p class="text-sm leading-relaxed text-fuchsia-200">870 Av. Ernest-Gagnon</p>
              <p class="text-sm leading-relaxed text-fuchsia-200">Bureau 315, Sala 609</p>
              <p class="text-sm leading-relaxed text-fuchsia-200">Quebec</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="border-t border-fuchsia-200 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4"
      >
        <p class="text-sm text-fuchsia-200">Todos os direitos reservados - {{ currentYear }}</p>
        <div class="flex gap-4">
          <a href="#" class="hover:opacity-100 transition-opacity">
            <img src="/src/assets/medium.png" alt="Medium" class="h-5" />
          </a>
          <a href="#" class="hover:opacity-100 transition-opacity">
            <img src="/src/assets/linkedin.png" alt="LinkedIn" class="h-5" />
          </a>
          <a href="#" class="hover:opacity-100 transition-opacity">
            <img src="/src/assets/instagram.png" alt="Instagram" class="h-5" />
          </a>
        </div>
        <a href="#top" class="text-sm text-fuchsia-200 hover:text-white transition-colors">
          VOLTAR AO TOPO
        </a>
      </div>
    </div>
  </footer>
</template>
