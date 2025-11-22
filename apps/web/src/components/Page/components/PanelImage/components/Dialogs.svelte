<script lang="ts">
    import type {Dialog} from "@library/types";
    import {getDialog} from "./utils/getDialog";

    interface Props {
        id: string
        dialogs: Dialog[];
    }

    let {id, dialogs}: Props = $props();
</script>

<style>
    .dialog {
        position: absolute;
        width: fit-content;
        background-color: white;
        padding: 4px;
        top: 4px;
        left: 4px;
        border: 2px solid black
    }
</style>

<div id={`${id}-dialog`}>
    {#each dialogs as dialog (dialog)}
        <p class="dialog">{getDialog(dialog)}</p>
    {/each}
</div>
