export module ContactModel {
    export interface ContactViewModel {
        firstName: string;
        middleName?: string;
        lastName: string;
        email: string;
        dob?: Date;
        gender: string;
        dial_code: string;
        phone: number;
        avatar?: any
    }
    export interface Password {
        password: string;
        cnfpassword: string;
    }
    export interface RegisterViewModel extends ContactViewModel {
        username: string;
    }
    export interface User extends RegisterViewModel {
        Id: string
    }
    export interface SearchCriteria {
        filter: string;
        value: number;
    }
    export interface ContactSearch {
        criteria: string;
        searchTerm: string
    }
}