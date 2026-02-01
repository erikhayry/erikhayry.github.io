<script lang="ts">
    import {resolve} from '$app/paths';
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {Language} from "@library/types";

    let {data} = $props();
    let {title} = $derived(data);
</script>

<style>
    .language-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-touch-safe);
    }

</style>

<div class="content">
    <h1>{title}</h1>

    <ol class="language-list">
        <li><a href="{resolve('/se')}">{i18n(TEXT.language, Language.SE)}</a></li>
        <li><a href="{resolve('/en')}">{i18n(TEXT.language, Language.EN)}</a></li>
    </ol>
</div>
