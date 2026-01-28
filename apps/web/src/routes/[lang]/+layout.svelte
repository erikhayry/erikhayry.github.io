<script lang="ts">
    import {langStore} from '$lib/stores/lang.store';

    let {children, data} = $props();
    
    langStore.set(data.lang);
</script>

{@render children?.()}