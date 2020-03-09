const SET_USERS = "SET-USERS";
const  FOLLOW =  "FOLLOW"
const  UNFOLLOW =  "UNFOLLOW"


let initialState = {
    users: [
        {id:1,
        user_fullName: Gevorg,
        user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
        user_location:{user_country: Russia, user_city: Moscow },
        followed:true,
        status:'I am boss'
        },
        {id:2,
        user_fullName: Hovsep,
        user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
        user_location:{user_country: Armenia, user_city: Erevan },
        followed:false,
        status:'I am teacher'
        },
        {id:3,
        user_fullName: Mery,
        user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
        user_location:{user_country: USA, user_city: Vashington },
        followed:false,
        status:'I am student'
        },
        {id:4,
        user_fullName: Isahak,
        user_url: 'https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png',
        user_location:{user_country: China, user_city: Pecin },
        followed:true,
        status:'I am happy'
        },

    ]
}



const usersReducer = (state = initialState,action) => {
     
    
    switch(action.type){
        case SET_USERS:
           return{
               ...state,
               users:[...state.users, ...action.users]
           } 
       
        
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u=> {
                    if(u.id === action.userId){
                        return{...u, followed:true}
                    }
                    return u;
                })
            }
       
             
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u=> {
                    if(u.id === action.userId){
                        return{...u, followed: false}
                    }
                    return u;
                })
            }
            
        default:
                return state;
      }  
}



export const setUsersAC = (users) => {
    return {type:SET_USERS, users }
 }  
 export const followAC = (userId) =>{
    return {type: FOLLOW, userId}
 }
 export const unfollowAC = (userId) =>{
    return {type: UNFOLLOW, userId}
 }
export default usersReducer;