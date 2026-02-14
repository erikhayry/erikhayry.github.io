<script lang="ts">
    import {i18n} from "../../../../i18n/i18n";
    import {TEXT} from "../../../../i18n/ui";
    import {getImageSrc} from "$core/getImageSrc";
    import {ImageVariant} from "@library/types";
    import ResponsiveImage from "../../../../components/Page/components/ResponsiveImage.svelte";

    let {data} = $props();
    let {panels, slug, style} = $derived(data);
</script>

<h1>
    {i18n(TEXT.reference)}
</h1>

{#each panels as panel (panel.slug)}
    <h2 id={panel.id}>Panel {panel.id}</h2>
    <ResponsiveImage alt={i18n(panel.description)} id={panel.id} {slug} {style}/>

    {#if panel.reference.link}
        <a href={panel.reference.link.url}>{i18n(panel.reference.link.title)}</a>
    {/if}
    
    {#if panel.reference.image?.included}
        <img src={getImageSrc(slug, panel.id, style, ImageVariant.Reference)} alt={panel.reference.image.alt}/>
        {#if panel.reference.image.link}
            <a href={panel.reference.image.link.url}>{i18n(panel.reference.image.link.title)}</a>
        {/if}
    {/if}

    {#if panel.reference.description}
        <p>{i18n(panel.reference.description)}</p>
    {/if}

    {#if panel.reference.place}
        <p>{i18n(panel.reference.place.name)}</p>
        <p>{panel.reference.place.coordinates.lat} - {panel.reference.place.coordinates.lon}</p>
    {/if}
{/each}

