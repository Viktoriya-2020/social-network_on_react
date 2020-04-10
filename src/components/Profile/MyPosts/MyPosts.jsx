import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validator';
import { Textarea } from '../../../common/FormsControls';

const MyPosts = React.memo(props => {

  let addPost = (values) => {

    props.addPost(values.newPost);
  }

  let postsElements = props.posts.map(p => <Post key={p.id} messege={p.messeges} likesCount={p.likesCount} />)
  return (
    <div className={s.inform}>
      <div className={s.postForm}><PostReduxForm onSubmit={addPost} /></div>
      <h3>My posts</h3>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  );
});
const maxLength15 = maxLengthCreator(15);
let PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name='newPost' placeholder='enter your post' validate={[required, maxLength15]} />
      <button>Add</button>
    </form>
  )
}
let PostReduxForm = reduxForm({ form: 'post' })(PostForm)

export default MyPosts;