
import { JSX } from "react";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import ProfileDetail from "@/components/profile/ProfileDetail";
import { GetAccountDetailResponse } from "@/schema/response";
import { RestConfiguration } from "@/schema/entity";
import { getHTTPPropsWithToken } from "@/util/httpUtil";

const getAccountDetail = async (): Promise<GetAccountDetailResponse> => {

    const restConfiguration: RestConfiguration = await getHTTPPropsWithToken()
    const endpoint:string = `${restConfiguration.apiCoreHost}/api/v1/account/detail`;

    let headers: object = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${restConfiguration.coreAccessToken}`
    }

    const agent: AxiosInstance = axios.create({
        baseURL: endpoint,
        headers: headers
    })

    let response: AxiosResponse<GetAccountDetailResponse> = await agent.get(endpoint);

    return response.data;

}

const Profile = async():Promise<JSX.Element> => {

    const response: GetAccountDetailResponse = await getAccountDetail()
    const { account } = response.data;

    return <ProfileDetail account={account} />
}

export default Profile;