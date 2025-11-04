import {getOutputJSONS} from "../../files/getOutputJSONS.ts";

export function getPanelOutputs(folderPath: string) {
    return getOutputJSONS(folderPath);
}
