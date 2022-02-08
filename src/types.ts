
export type ChannelType = 'AIRBNB' | 'HOLIDU' | 'BOOKINGCOM';

export type ReviewType = {
    headline: string,
    comment: string,
    author: string,
    positiveFeedback: string | null,
    negativeFeedback: string | null,
    score: number,
    channel: ChannelType,
    publishedAt: string
}

export type GetReviewsParamsType = Partial<{
    channel: ChannelType[],
    score: number[],
    _page: number,
    _limit: number
}>

export type GetReviewsResponseType = ReviewType[]

export type ApiParamsType = Record<string, undefined | number | string | (number | string)[]>