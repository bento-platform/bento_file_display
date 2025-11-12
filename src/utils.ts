import { VIEWABLE_FILE_EXTENSIONS } from "./constants";

// noinspection JSUnusedGlobalSymbols
export const fileHasViewableExtension = (filename: string) =>
  !!VIEWABLE_FILE_EXTENSIONS.find((ext) => filename.toLowerCase().endsWith(ext));
