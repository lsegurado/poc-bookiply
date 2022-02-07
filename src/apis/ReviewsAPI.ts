import { ReviewType } from "../types";
import { APIHelper } from "./APIHelper";

export class ReviewsAPI extends APIHelper {
    constructor() {
        super('https://interview-task-api.bookiply.io')
    }
    getReviews() {
        return super.get<ReviewType[]>('/reviews')
    }
}