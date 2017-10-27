export module Api {
    const baseUrl = `http://localhost:1810/api`;
    const contactUrl = `${baseUrl}/contact`;
    const fileUrl = `${baseUrl}/file`;
    const commonUrl = `${baseUrl}/common`;

    export function GetUrls() {
        return {
            "GetContactList": `${contactUrl}/`,
            "GetFileList": `${fileUrl}/`,
            "GetGenders": `${commonUrl}/gender`,
            "GetCountries": `${commonUrl}/countries`,
            "GetContactsSearchCriteria": `${commonUrl}/searchcriteria`,
            "FilterContact": `${contactUrl}/filter`
        }
    }
}