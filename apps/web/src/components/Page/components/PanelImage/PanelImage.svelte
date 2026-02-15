<script lang="ts">
    import {type ComicStyleType, type LanguageType, type Panel} from "@library/types";
    import {i18n} from "../../../../i18n/i18n";
    import ResponsiveImage from "../ResponsiveImage.svelte";
    import {getDialog} from "./utils/getDialog";
    import {DIALOG_BUBBLE_TEST_ID} from "../../constants";
    import {TEXT} from "../../../../i18n/ui";
    import {resolve} from "$app/paths";


    interface Props {
        slug: string;
        panel: Panel
        style: ComicStyleType
        lang: LanguageType
    }

    let {slug, panel, style, lang}: Props = $props();
</script>

<style>
    .root {
        width: 100%;
        height: 100%;
        --bubble-top: var(--safe-top-unit-4x);
        --bubble-bottom: var(--safe-bottom-unit-4x);
    }

    figure {
        width: 100%;
        height: 100%;
        position: relative;
    }

    figcaption a {
        cursor: pointer;
        position: absolute;
        z-index: 1;
        width: var(--click-area);
        height: var(--click-area);
        top: var(--bubble-top);
        right: var(--safe-right-unit-4x);
        background-size: 100% auto;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='160' width='160' version='1.0'%3E%3Cg fill='currentColor'%3E%3Cpath d='m80 15c-35.88 0-65 29.12-65 65s29.12 65 65 65 65-29.12 65-65-29.12-65-65-65zm0 10c30.36 0 55 24.64 55 55s-24.64 55-55 55-55-24.64-55-55 24.64-55 55-55z'/%3E%3Cpath d='m57.373 18.231a9.3834 9.1153 0 1 1 -18.767 0 9.3834 9.1153 0 1 1 18.767 0z' transform='matrix(1.1989 0 0 1.2342 21.214 28.75)'/%3E%3Cpath d='m90.665 110.96c-0.069 2.73 1.211 3.5 4.327 3.82l5.008 0.1v5.12h-39.073v-5.12l5.503-0.1c3.291-0.1 4.082-1.38 4.327-3.82v-30.813c0.035-4.879-6.296-4.113-10.757-3.968v-5.074l30.665-1.105'/%3E%3C/g%3E%3C/svg%3E");
    }

    :global(.panel:not(:first-of-type)) .root {
        --bubble-top: var(--spacing-2x);
    }

    :global(.panel:not(:last-of-type)) .root {
        --bubble-bottom: var(--spacing-2x);
    }

    .bubble {
        border: var(--bubble-border);
        width: fit-content;
        background-color: var(--white);
        color: var(--black);
        padding: var(--spacing);
    }

    .narration.bubble {
        position: absolute;
        top: var(--bubble-top);
        left: var(--safe-left-unit-4x);
        right: var(--safe-right-unit-4x);
        max-width: calc(100% - var(--safe-right-unit-4x) - var(--spacing-4x) - var(--spacing-4x) - var(--click-area));

        &:only-child {
            top: unset;
            bottom: var(--bubble-bottom);
            transform-origin: bottom;
        }
    }

    .dialogs {
        display: flex;
        flex-direction: column;
        gap: var(--spacing);
        position: absolute;
        bottom: var(--bubble-bottom);
        left: var(--safe-left-unit-4x);
        right: var(--safe-right-unit-4x);
        transform-origin: bottom;
    }
</style>

<div class="root">
    <figure>
        <ResponsiveImage alt={i18n(panel.description)} id={panel.id} {slug} {style}/>

        {#if panel.reference}
            <figcaption>
                <a href={resolve(`/${lang}/${slug}/references#${panel.id}`)}><span
                        class="visually-hidden">{i18n(TEXT.reference)}</span></a>
            </figcaption>
        {/if}
    </figure>

    {#if panel.dialogs || panel.narration}
        <div class="text">
            {#if panel.dialogs?.length}
                <div class="dialogs">
                    {#each panel.dialogs as dialog (dialog)}
                        <p class="bubble" data-testid={DIALOG_BUBBLE_TEST_ID}><span
                                class="visually-hidden">{`${getDialog(dialog).person} `}</span>{getDialog(dialog).text}
                        </p>
                    {/each}
                </div>
            {/if}

            {#if panel.narration}
                <p class="narration bubble">{i18n(panel.narration)}</p>
            {/if}
        </div>
    {/if}
</div>