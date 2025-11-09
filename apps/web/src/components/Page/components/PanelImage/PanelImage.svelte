<script lang="ts">
    import {getSrc} from "./utils/getSrc";
    import type {Panel} from "@library/types";

    interface Props {
        slug: string;
        panel: Panel
        alt: string;
    }

    let {slug, panel, alt}: Props = $props();
    const src = getSrc(slug, panel.id)
</script>

<style>
    .panel-image {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>

<img {alt} class="panel-image" height="auto" {src} width="100%"/>
