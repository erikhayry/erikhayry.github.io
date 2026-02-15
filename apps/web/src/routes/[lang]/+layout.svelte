<script lang="ts">
    import {langStore} from '$lib/stores/lang.store';
    import {i18n} from "../../i18n/i18n";
    import {TEXT} from "../../i18n/ui";

    let {children, data} = $props();

    langStore.set(data.lang);
</script>

<svelte:head>
    <title>{i18n(TEXT.comicsHeading)}</title>
</svelte:head>


{@render children?.()}