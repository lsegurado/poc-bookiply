export type ReviewType = {
    headline: string,
    comment: string,
    author: string,
    positiveFeedback: string | null,
    negativeFeedback: string | null,
    score: number,
    channel: 'AIRBNB' | 'HOLIDU' | 'BOOKINGCOM',
    publishedAt: string
}