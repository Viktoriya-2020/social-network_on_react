import profileReducer from "./profile-reduser";
import sideBarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
     _state: {

        profilePage: {
     posts : [
        { id:1, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed. Duis ac lacinia elit. Nullam mattis, nunc quis dapibus porttitor, urna justo rutrum magna, ac lacinia nisl justo sed felis. Sed laoreet, turpis sit amet varius volutpat, est massa dapibus ante, eu iaculis tortor leo et ligula. Duis mollis ipsum lectus, ac vehicula risus luctus quis.",  likesCount:"15"},
        {id:2, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed. Duis ac lacinia elit. Nullam mattis, nunc quis dapibus porttitor, urna justo rutrum magna, ac lacinia nisl justo sed felis. Sed laoreet, turpis sit amet varius volutpat, est massa dapibus ante, eu iaculis tortor leo et ligula. Duis mollis ipsum lectus, ac vehicula risus luctus quis.",  likesCount:"8"},
        { id:3, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lacus, sed eleifend nibh dignissim sed.", likesCount:"22"},
        { id:4, messeges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", likesCount:"12"},
        ],
        newPostText: "Post",
    },
        dialogsPage: {
       dialogs: [
        {id:1, name: 'Gevorg'},
        {id:2, name: 'Isahak'},
        {id:3, name: 'Mery'},
        {id:4, name: 'Hovsep'},
        {id:5, name: 'Pavel'},
        {id:6, name: 'Ruslan'}
      ],
       messeges: [
        {id:1, messeges: 'Hi!!!'},
        {id:2, messeges: 'Hi, how are you?'},
        {id:3, messeges: 'I am nice'},
        {id:4, messeges: 'Where are you?'},
        {id:5, messeges: 'I am here.'},
        {id:6, messeges: 'What are you doing?'},
        {id:7, messeges: 'I am sleeping.'}
       ]
        },
        sideBar:  {
    friendsInfo: [
                {id:1, name: 'Gevorg'},
                {id:1, name: 'Mery'},
                {id:1, name: 'Isahak'},
                {id:1, name: 'Hovsep'},
                {id:1, name: 'Ruslan'},
                {id:1, name: 'Pavel'},
              ]
        },
        usersPage:{
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
    },
    _callSubscriber()  {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sideBar = sideBarReducer(this._state.sideBar,action);

        this._callSubscriber(this._state);

    }
    
}

window.store = store;


export default store;