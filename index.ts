import {bundle} from "./apps/bundler/src/bundler/bundle.ts";

bundle({
    web: {
        folder: "apps/web/src/lib/assets",
        file: "website.json",
    },
    comics: {
        folder: "comics/slaget-vid-jutas/output"
    },
    type: {
        folder: 'library/types/schemas',
        schemas: {
            panel: 'panelSchema.json',
            panelOutput: 'panelOutputSchema.json'
        }
    }
});