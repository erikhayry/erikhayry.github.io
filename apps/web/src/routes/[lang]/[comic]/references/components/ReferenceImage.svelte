<script lang="ts">
    import {getImageSrc} from "$core/getImageSrc";
    import {type ComicStyleType, ImageVariant, type ReferenceImage} from "@library/types";
    import {i18n} from "../../../../../i18n/i18n";

    interface Props {
        id: string
        slug: string;
        style: ComicStyleType
        image: ReferenceImage
    }

    let {id, slug, style, image}: Props = $props();
</script>


<img alt={i18n(image.description)} src={getImageSrc(slug, id, style, ImageVariant.Reference)}/>
{#if image.link}
    <a href={image.link.url}>{i18n(image.link.title)}</a>
{/if}