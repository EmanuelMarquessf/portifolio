# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Icones

Use o componente global `AppIcon` com os nomes definidos em `src/icons/index.js`:

```vue
<AppIcon name="github" class="w-6 h-6" />
<AppIcon name="vue" variant="logo" class="w-12 h-12" />
```

A variante padrao usa `oh-vue-icons` e aceita `color`. A variante `logo` usa o SVG
colorido cadastrado; quando nao existe SVG, usa o icone da biblioteca.
Os icones sao decorativos: botoes que so contem icones precisam de `aria-label`.

Para adicionar um icone, importe-o e inclua uma entrada no catalogo. O registro
na biblioteca e automatico. Para adicionar um logo colorido, coloque o SVG em
`public/icons` e informe `logo: 'icons/arquivo.svg'` nessa mesma entrada.
Nas listas de tecnologias, use o mesmo nome simples no campo `icon`.
