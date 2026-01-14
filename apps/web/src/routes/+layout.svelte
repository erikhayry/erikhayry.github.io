<script lang="ts">
    import '$lib/assets/css/normalize.css'
    import '$lib/assets/css/style.css'

    import favicon from '$lib/assets/favicon.png';
    import manifest from '$lib/assets/manifest.webmanifest';

    let {children} = $props();
</script>

<svelte:head>
    <link href={favicon} rel="icon"/>
    <link href="{manifest}" rel="manifest"/>
</svelte:head>

{@render children?.()}