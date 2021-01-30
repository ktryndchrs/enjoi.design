<script context="module">
  import { register, waitLocale } from 'svelte-i18n';

  register('en', () => import('./_locales/en.json'));
  register('fr', () => import('./_locales/fr.json'));

  export function preload() {
    return waitLocale();
  }
</script>

<script>
  import { _ } from 'svelte-i18n';
</script>

<style>
	
</style>

<svelte:head>
  <title>{$_('title')}</title>
</svelte:head>

<h1>{$_('heading')}</h1>

<p>{$_('body')}</p>