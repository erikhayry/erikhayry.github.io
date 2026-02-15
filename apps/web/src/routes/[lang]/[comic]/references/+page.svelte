<script lang="ts">
    import {i18n} from "../../../../i18n/i18n";
    import {TEXT} from "../../../../i18n/ui";
    import ReferenceImage from "./components/ReferenceImage.svelte";

    let {data} = $props();
    let {indexedPanelsInfoWithReference, slug, style, title} = $derived(data);
</script>
<svelte:head>
    <title>{i18n(TEXT.referenceLabel)} - {i18n(title)}</title>
</svelte:head>


<style>
    .page {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4x);
        padding: var(--safe-top-unit-4x) var(--safe-right-unit-4x) var(--safe-bottom-unit-4x) var(--safe-left-unit-4x);
    }

    .panel {
        gap: var(--spacing-4x);
        display: flex;
        flex-direction: column;
        max-width: 100rem;
    }

</style>

<div class="page">
    <h1>
        {i18n(TEXT.referenceLabel)}
    </h1>

    <div class="panel">
        {#each indexedPanelsInfoWithReference as {panel, index} (index)}
            <h2 id={panel.id}>Panel {index}</h2>

            {#if panel.reference.image?.included}
                <ReferenceImage panel={panel} {slug} {style} image={panel.reference.image}/>
            {/if}

            {#if panel.reference.link}
                <a href={panel.reference.link.url}>{i18n(panel.reference.link.title)}</a>
            {/if}


            {#if panel.reference.description}
                <p>{i18n(panel.reference.description)}</p>
            {/if}

            {#if panel.reference.place}
                <p>{i18n(panel.reference.place.name)}</p>
                <p>{panel.reference.place.coordinates.lat} - {panel.reference.place.coordinates.lon}</p>
            {/if}
        {/each}
    </div>

</div>
