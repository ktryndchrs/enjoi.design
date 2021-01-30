<script>
  import { _, locale, locales } from 'svelte-i18n';
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: flex-end;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a,
  .a {
    cursor: pointer;
    text-decoration: none;
    padding: 1em .5em .25em .5em;
    display: block;
  }
</style>

<nav>
  <!--
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">{$_('nav.home')}</a>
    </li>
    <li>
      <a class:selected={segment === 'about'} href="about">{$_('nav.about')}</a>
    </li>
    <li>
      <a class:selected={segment === 'blog'} href="blog">{$_('nav.blog')}</a>
    </li>
  </ul>
  -->
  <ul class="lang">
    {#each $locales as item}
      <li>
        <span
          class="a"
          class:selected={$locale.includes(item)}
          href={`#!${item}`}
          on:click={() => ($locale = item)}>
          {$_('languages.' + item.replace('-', '_'))}
        </span>
      </li>
    {/each}
  </ul>
</nav>
