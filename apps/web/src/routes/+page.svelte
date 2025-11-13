<script lang="ts">
    import {resolve} from '$app/paths';
    import {getComics} from "$core/getComics";
</script>

<ul>
    {#each getComics() as comic (comic)}
        <li>
            <a href={resolve(`/${comic.slug}/0`)}>{comic.slug}</a>
        </li>
    {/each}
</ul>
