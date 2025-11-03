import { OUTPUT_FOLDER } from "../../constants.ts";

export function getOutputFilePath(folderPath: string, fileName: string) {
  return `${folderPath}/${OUTPUT_FOLDER}/${fileName}`;
}
