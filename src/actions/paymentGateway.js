
import { APIService } from "../helpers/apiConfig";

export const fetchAllowedGateway = async() => {
    try{
       const gateways= await APIService.get('payment/gateways');
       return { success: true, data: gateways.data.data.content}
    }catch(error){
        return { success: false}
    }

}