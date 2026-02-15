<script lang="ts">
    import {getImageSrc} from "$core/getImageSrc";
    import {type ComicStyleType, ImageVariant, type PanelInfo, type ReferenceImage} from "@library/types";
    import {i18n} from "../../../../../i18n/i18n";

    interface Props {
        slug: string;
        style: ComicStyleType
        image: ReferenceImage
        panel: PanelInfo
    }

    let {slug, style, image, panel}: Props = $props();
</script>

<style>
    .images {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2x);
    }

    @media (min-width: 60rem) {
        .images {
            flex-direction: row;
            gap: var(--spacing-4x);
        }
    }

    .image {
        flex: 1;
    }

</style>

<div class="images">
    <div class="image">
        <img alt={i18n(panel.description)} src={getImageSrc(slug, panel.id, style, ImageVariant.Landscape)}/>
    </div>
    <div class="image">
        <img alt={i18n(image.description)} src={getImageSrc(slug, panel.id, style, ImageVariant.Reference)}/>
    </div>
</div>

{#if image.link}
    <a href={image.link.url}>{i18n(image.link.title)}</a>
{/if}