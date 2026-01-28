<script lang="ts">
    import {resolve} from '$app/paths';
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
    import {Language} from "@library/types";

    let {data} = $props();
    let {title} = $derived(data);
</script>

<h1>{title}</h1>

<ol>
    <li><a href="{resolve('/se')}">{i18n(TEXT.language, Language.SE)}</a></li>
    <li><a href="{resolve('/en')}">{i18n(TEXT.language, Language.EN)}</a></li>
</ol>
