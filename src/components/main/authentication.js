import { useDispatch } from 'react-redux';
import users from '../../storege/accountInfoBase'



const getInformation = (param) => {


    console.log(param);
    users.forEach(element => {
        if (element.email == param.email) {
            if (element.password == param.password) {

            }
            else {
               Error()
            }
        }
        else{
            Error();
        }
    });


}

const Error = () =>{

    const dispatch = useDispatch();
    dispatch({ type: 'error', data: true });
    setTimeout(() => {
        dispatch({ type: 'error', data: true });
    }, 2000);

}

export default getInformation;