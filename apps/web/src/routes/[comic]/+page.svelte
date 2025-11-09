<script lang="ts">
    import {resolve} from '$app/paths';

    let {data} = $props();
    const {slug, pages} = data
</script>

<h1>{slug}</h1>

<ul>
    {#each pages as page, index (page)}
        <li>
            <a href={resolve(`/${slug}/${index}`)}>{index}</a>
        </li>
    {/each}
</ul>

<a href={resolve("/")}>Back</a>