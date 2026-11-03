<script setup>
import { computed } from 'vue';
import { OhVueIcon } from 'oh-vue-icons';
import { icons } from '../icons';

const props = defineProps({
  name: { type: String, required: true, validator: (name) => Object.hasOwn(icons, name) },
  variant: { type: String, default: 'icon', validator: (value) => ['icon', 'logo'].includes(value) },
});

const entry = computed(() => Object.hasOwn(icons, props.name) ? icons[props.name] : undefined);
const logoUrl = computed(() => entry.value?.logo ? `${import.meta.env.BASE_URL}${entry.value.logo}` : undefined);
</script>

<template>
  <img v-if="variant === 'logo' && logoUrl" :src="logoUrl" alt="" aria-hidden="true" />
  <OhVueIcon v-else-if="entry" :name="entry.icon.name" aria-hidden="true" />
</template>
