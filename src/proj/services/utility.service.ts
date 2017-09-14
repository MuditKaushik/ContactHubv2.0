export module Utility {
    export class StylingandTemplateService {
        private folder: string;
        constructor(folder: string) {
            this.folder = folder;
        }
        getfile(file: string): string {
            return `./src/proj/templates/${this.folder.toLowerCase()}/${file.toLowerCase()}`;
        }
    }
}