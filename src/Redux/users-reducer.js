import { usersAPI, profileAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOING_PROGRESS = "TOGGLE_IS_FOLLOING_PROGRESS"
const SET_STATUS = "SET_STATUS"
const UPDATE_STATUS = "UPDATE_STATUS"
let initialState = {
    users: [],
    count: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    status: '',
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state, status: action.status
            }

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id = action.userid),
            }

        default:
            return state;
    }
}
const setUsers = (users) => {
    return { type: SET_USERS, users }
}
const followSuccess = (userId) => {
    return { type: FOLLOW, userId }
}
const unfollowSuccess = (userId) => {
    return { type: UNFOLLOW, userId }
}
const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}
const setTotalUsersCount = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
}
const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleIsFollowingProgress = (isFetching, userId) => {
    return { type: TOGGLE_IS_FOLLOING_PROGRESS, isFetching, userId }
}
const setStatus = (status) => {
    return { type: SET_STATUS, status }
}
const updateStatus = (status) => {
    return { type: UPDATE_STATUS, status }
}
export const gettingUsers = (count, currentPage) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))

    let data = await usersAPI.getUsers(count, currentPage);
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await usersAPI.followUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(toggleIsFollowingProgress(false, userId));
        dispatch(followSuccess(userId))
    }
}
export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await usersAPI.unfollowUser(userId);
    if (response.data.resultCode === 0) {
        dispatch(toggleIsFollowingProgress(false, userId));
        dispatch(unfollowSuccess(userId))
    }
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(updateStatus(status));
    }
}

export default usersReducer;