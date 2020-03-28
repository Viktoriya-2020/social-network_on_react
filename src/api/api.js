import * as axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "dbdcb455-9b15-47d9-98a6-c740f12e99ce",
    } 
});

export const usersAPI = {
    getUsers (count, currentPage){
        return instance.get(`users?count=${count}&page=${currentPage}`)
        .then(response =>{
         return response.data
      })
     },
     unfollowUser (userId){
     return instance.delete(`follow/${userId}`)
     },   
     followUser (userId){
        return instance.post(`follow/${userId}`,{})
        },  
    
     getAuthUserData (){
         return instance.get(`auth/me`)
     }                  
}
export const profileAPI = {
    
     getUserData(userId){
         return instance.get(`profile/`+ userId)
     }
}
