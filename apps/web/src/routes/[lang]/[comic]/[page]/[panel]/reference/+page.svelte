<script lang="ts">

    import {i18n} from "../../../../../../i18n/i18n";

    let {data} = $props();
    let {title, panel} = $derived(data);
</script>


<h1 class="visually-hidden">{title}</h1>


{#if panel.reference.link}
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a href={panel.reference.link.url} target="_blank" rel="noopener noreferrer">{i18n(panel.reference.link.title)}</a>
{/if}
