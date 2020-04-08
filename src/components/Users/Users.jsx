import React from 'react';
import style from './Users.module.css';
import userThoto from '../../assets/images/gambar-user-png-5.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../../common/Pagination/Paginator';

const Users = (props) => {
     return (
        <div className={style.users}>
            {props.users.map(u =>
                <div key={u.id} className={style.user}>
                    <div className={style.user_grid}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userThoto} />
                            </NavLink>
                        </div>
                        <div>
                            <p>{u.name}</p>
                            <p> {'u.user_location.country'} ({'u.user_location.city'})</p>
                        </div>
                        <div>{u.status}...</div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.unfollow(u.id)
                                }
                                }>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.follow(u.id)

                                }}>follow</button>
                            }
                        </div>
                    </div>
                </div>)
            }
            <div className={style.numbersPages}>
                <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged} count={props.count} />
            </div>
        </div>
    );
}

export default Users;