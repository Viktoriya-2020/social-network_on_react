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
    },
    _collSubscriber()  {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._collSubscriber = observer;
    },

    

    dispatch(action) {
        if(action.type === "ADD-POST"){
            let newPost = {
                id:5, 
                messeges: this._state.profilePage.newPostText,
                likesCount:0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._collSubscriber(this._state)
        }
        else if(action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText;
            this._collSubscriber(this._state)
        }
        else if(action.type === "ADD-NEW-MESSAGE"){
            let newMessage = {
                id:8,
                messeges: action.newMessages,
            }
            this._state.dialogsPage.messeges.push(newMessage);
            this._collSubscriber(this._state)
        }
    }
    
}


window.store = store;


export default store;