<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "$core/getComics";
    import {i18n} from "../i18n/i18n";
    import {TEXT} from "../i18n/ui";
</script>

<h1>{i18n(TEXT.comicsHeading)}</h1>

<ul>
    {#each getComics() as comic (comic)}
        <li>
            <a href={resolve(`/${comic.slug}/0`)}>{comic.slug}</a>
        </li>
    {/each}
</ul>
