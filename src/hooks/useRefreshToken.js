import { useDispatch, useSelector } from 'react-redux';
import axios from '../api/axios';
import { setAccessToken, setRefreshToken } from '../redux/slices/TokenReducer';

const useRefreshToken = () => {
    const dispatch = useDispatch();
    const refreshToken = useSelector((state)=> state.token.refreshToken)

    const refresh = async () => {
        const response = await axios.post('/api/auth/refresh-token', {
            refreshToken: refreshToken
        });

        dispatch(setAccessToken(response?.data?.accessToken))
        dispatch(setRefreshToken(response?.data?.refreshToken))

        return response?.data?.accessToken;
    }
    return refresh;
};

export default useRefreshToken;