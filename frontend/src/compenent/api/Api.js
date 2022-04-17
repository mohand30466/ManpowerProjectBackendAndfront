export class Api{
    static RegesterUser(body){

        return  fetch(`http://127.0.0.1:8000/dj-rest-auth/registration/`,{
                   method:"POST",
                   headers:{
                         'Content-Type':'application/json',
                        },
                   body:JSON.stringify( body )

                }).then(res=>res.json())
                
        }
        

   static SignInUser(body){

        return  fetch(`http://127.0.0.1:8000/dj-rest-auth/login/`,{
    
                method:"POST",
                headers:{
                      'Content-Type':'application/json',
                        },
                body:JSON.stringify( body )
                 }).then(res=>res.json())
            }        
    }