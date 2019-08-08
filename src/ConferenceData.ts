import { StringLiteral } from "@babel/types";

export interface IConference {
    city: string;
    confEndDate: string;
    confName: string;
    confRegUrl: string;
    confStartDate: string;
    confUrl: string;
    conference_id: number;
    country: string;
    emailId?: string;
    entryType: string;
    imageURL: string;
    keywordSupport: string;
    lat: string;
    long: string
    searchTerms: string;
    state: string;
    twitter_handle: string;
    user_id: string;
    venue: string;
}

export default IConference;