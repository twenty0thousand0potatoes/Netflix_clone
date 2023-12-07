const dataUser = {
   data:0
 }
 
 export const UserData = (state = dataUser, action) => {
     switch (action.type) {
         case "userData":
             return ({ ...state, data: action.data });
         default:
             return state;
     }
 
 }