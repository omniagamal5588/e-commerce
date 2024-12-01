import baseUrl from "../Api/baseURL";

const useInsertDataWithImage= async(url,params)=>{
    const config={
      header:{"Content-Type":"multipart/form-data"}
    }
    const res= await baseUrl.post(url,params,config)
    return res
}

// useInsertData 

const useInsertData=async(url,params)=>{
    const res = await baseUrl.post(url,params)
    return res
}

export {useInsertData,useInsertDataWithImage}