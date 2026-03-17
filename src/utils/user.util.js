// Local Modules
import UserActions from "@/store/user.slice.js"

export async function createLocalUser (dispatch, data) {
    if (!data) return null;

    dispatch(UserActions.SET_USER(data))
}