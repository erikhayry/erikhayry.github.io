<script lang="ts">
    import {getImageSrc} from "$core/getImageSrc";
    import {type ComicStyleType, ImageVariant} from "@library/types";

    interface Props {
        slug: string;
        id: string
        style: ComicStyleType
        alt: string
    }

    let {slug, id, style, alt}: Props = $props();
</script>

<style>
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

<picture>
    <source media="(orientation: portrait)"
            srcset={getImageSrc(slug, id, style, ImageVariant.Portrait)}/>
    <img alt={alt} class="image" height="auto" src={getImageSrc(slug, id, style, ImageVariant.Landscape)}
         width="100%"/>
</picture>