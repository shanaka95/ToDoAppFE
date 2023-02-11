export interface HTTPResponse {
    success: boolean; // If request is successfull or not
    data: object; // Request Data
    message: string; // Success or Error message related to the request
}
