import baseUrl from "../Api/baseURL";

const useUpdatetDataWithImage= async(url,params)=>{
    const config={
      header:{"Content-Type":"multipart/form-data"}
    }
    const res= await baseUrl.put(url,params,config)
    return res
}

const useUpdateData= async(url,params)=>{
    const res= await baseUrl.put(url,params)
    return res
}

export {useUpdatetDataWithImage,useUpdateData}
