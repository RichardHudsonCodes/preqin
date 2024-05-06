export interface Investor {
    firm_id: number;
    firm_name: string;
    AUM: number;
    date_added: Date;
    last_updated: string;
    established_at: string;
    firm_type: string;
    city: string;
    country: string;
    address: string;
    postal_code: string;
};

export interface InvestorDisplay {
    firm_id: number;
    firm_name: string;
    date_added: string;
    firm_type: string;
    address: string;
};

