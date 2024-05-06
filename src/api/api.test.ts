import * as axios from "axios";
import { InvestorAPI } from "./api";
import { Investor } from "../models/types";
import { create } from "domain";

// jest.mock("axios");
// jest.mock("axios" , () => {
//     return {
//         get: getMock,
//         create: jest.fn()
//     };
// }); 

describe("API Tests", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch investors successfully", async () => {
        // const mockInvestors: Investor[] = [
        //     {
        //         firm_id: 1, firm_name: "John Doe", AUM: 0, date_added: "", last_updated: "", established_at: "",
        //         firm_type: "",
        //         city: "",
        //         country: "",
        //         address: "",
        //         postal_code: ""
        //     },
        //     {
        //         firm_id: 2, firm_name: "Jane Smith", AUM: 0, date_added: "", last_updated: "", established_at: "",
        //         firm_type: "",
        //         city: "",
        //         country: "",
        //         address: "",
        //         postal_code: ""
        //     },
        // ];

        // const axiosResponse = {
        //     data: mockInvestors,
        // };

        // getMock.mockResolvedValue(axiosResponse);

        // const result = await getInvestors();

        // const wait = ''; 

        // expect(result).toEqual(mockInvestors);
       // expect(getMock).toHaveBeenCalledTimes(1);
       // expect(getMock).toHaveBeenCalledWith("api/investors");
    });
});