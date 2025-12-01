<script lang="ts">
    import '$lib/assets/css/normalize.css'
    import '$lib/assets/css/style.css'

    import favicon from '$lib/assets/favicon.svg';

    let {children} = $props();
</script>

<svelte:head>
    <link href={favicon} rel="icon"/>
</svelte:head>

{@render children?.()}