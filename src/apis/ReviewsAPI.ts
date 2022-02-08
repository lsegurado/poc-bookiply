import { GetReviewsParamsType, GetReviewsResponseType } from "../types";
import { APIHelper } from "./APIHelper";

export class ReviewsAPI extends APIHelper {
    constructor() {
        super('https://interview-task-api.bookiply.io')
    }
    getReviews(params?: GetReviewsParamsType) {
        return super.get<GetReviewsResponseType, GetReviewsParamsType>('/reviews', params)
    }
}