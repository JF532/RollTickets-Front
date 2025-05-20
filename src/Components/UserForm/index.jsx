import { useState } from "react";
import API from "@Controllers/api";

export default function useForm(defaultObject = {}){

    const [data,setData] = useState({});
    const [error,setError] = useState({});
    const[processing,setProcessing] = useState(false);


    const set = (key, value) => {
        setData({...data,[key]:value});
    }

    const submit = async (method,url,options) => {

        setProcessing(true);
        setError({});

        try{
            const response = await API ({

                method,
                url,
                data : data,
                ... options

            });

            return response;
        } catch (error){

            if(error.response && error.response.data && error.response.data.message){
                setError(error.response.data.message);
            }else {
                setError({message: "Ocorreu um erro inesperado"});
            }

        }finally {

            setProcessing(false);
        }

    }

    return {
        data,
        setData: set,
        error,
        processing,
        post: (url,options) => submit("POST", url, options),
        get: (url,options) => submit("GET", url, options),
        put: (url,options) => submit("PUT", url, options),
        patch: (url,options) => submit("PATCH", url, options),
        delete: (url,options) => submit("DELETE", url, options),

    }

}