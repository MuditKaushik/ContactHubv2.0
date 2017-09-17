export module ContactModel {
    export interface ContactViewModel {
        firstName: string;
        middleName: string;
        lastName: string;
        emails: Array<string>;
        gender: string;
        username: string;
    }
}