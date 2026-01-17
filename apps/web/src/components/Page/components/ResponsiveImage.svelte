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

<picture>
    <source media="(orientation: portrait)"
            srcset={getImageSrc(slug, id, style, ImageVariant.Portrait)}/>
    <img alt={alt} height="auto" src={getImageSrc(slug, id, style, ImageVariant.Landscape)}
         width="100%"/>
</picture>