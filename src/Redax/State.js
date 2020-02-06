let rerenderEntireTree = () => {
    console.log('State changed');
}


let state = {

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
}
window.state = state;

export const addNewPost = () =>{
    let newPost = {
        id:5, 
        messeges: state.profilePage.newPostText,
        likesCount:0,
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export const addNewMessage = (Message) => {
    let newMessage = {
        id:8,
        messeges: Message,
    }
    state.dialogsPage.messeges.push(newMessage);
    rerenderEntireTree(state)
}

export const  subscribe = (observer) =>{
    rerenderEntireTree = observer;
}
export  let upDatePostText = (newText) => {
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export default state;