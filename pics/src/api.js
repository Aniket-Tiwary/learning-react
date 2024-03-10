import axios from 'axios';

const UNSPLASH_API_URL = "https://api.unsplash.com";

const searchImages = async (searchParam) => {
    try{
        const response = await axios.get(UNSPLASH_API_URL + "/search/photos",{
            headers : {
                "Authorization":"Client-ID 26JYARZ2enLkZ0WaQC1oPsOMR5qj63tw_EF-AeB7g-I"
            },
            params : {
                "query" : searchParam
            }
        });
        console.log(response.data.results);
        return response.data.results;
    }catch(err){
        console.log(err);
    }
}

export {searchImages};