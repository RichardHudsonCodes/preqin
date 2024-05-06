import {AxiosResponse} from "axios";
import axios from "axios";
import { Commitment, Investor } from "../models/types";

const axiosInstance = axios.create({ 
    baseURL: 'http://127.0.0.1:8000/',
     timeout: 10000 
    });
    
const dataCallback = (response: AxiosResponse) => response.data;

const getInvestors = async () : Promise<Investor[]> => {
    return await axiosInstance.get<Investor[]>("/api/investors").then(dataCallback);
}

const getCommitments = async (investorID: string, assetClass: string) : Promise<Commitment[]> => {
    return await axiosInstance.get<Commitment[]>(`/api/investor/commitment/${assetClass}/${investorID}`).then(dataCallback);
}

export const InvestorAPI = {
    getInvestors,
    getCommitments
}



