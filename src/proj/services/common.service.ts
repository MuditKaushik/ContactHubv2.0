export module CommonServices {
    export enum AlertTypes {
        "Alert_Info" = "info",
        "Alert_Success" = "success",
        "Alert_Warning" = "warning",
        "Alert_Danger" = "danger",
        "Alert_Primary" = "primary",
        "Alert_Secondary" = "secondary",
        "Alert_Light" = "light",
        "Alert_Dark" = "dark"
    }
    export enum AlertMessages {
        "server_error" = "Internal server error",
        "loading" = "loading....",
        "bad_request" = "Bad Request.",
        "not_found" = "No result found."
    }
    export enum Regex {
        "email_regex" = "[(a-zA-Z0-9)(\.)?(a-zA-Z0-9)]*[^\.]@{1}[^\.][a-zA-Z0-9]*[\.][(a-zA-Z0-9\.)]*[^\.]$",
        "only_digit" = "^[0-9]*$",
        "only_alphabets" = "^[a-zA-Z]*$",
        "alpha_numerics" = "^[a-zA-Z0-9]*$",
        "date_regex" = "",
    }
    export enum SearchCriteria {
        "Name" = 1,
        "Email" = 2,
        "Gender" = 3
    }
    export enum Gender {
        "Male" = 1,
        "Female" = 2
    }
}