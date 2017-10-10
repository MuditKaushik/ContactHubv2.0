export module HttpResponseModel {
    export interface ResponseModel<T> {
        status: number;
        result: T;
    }
}