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

<svelte:head>
  <title>{$_('title.about')}</title>
</svelte:head>

<div>
  <h1>{$_('about_this_site')}</h1>
  <p>{$_('about_content.0')}</p>
</div>
