import React from 'react'
import { useRouter } from 'next/navigation'



const Logout = () => {
    const router = useRouter()
    const logout = () => {
        localStorage.setItem('isLoggedIn', false);
        router.push("/login");
      };
      useEffect(() => {
        if(localStorage.getItem('isLoggedIn')){
          console.log(pathname)
        }
        else{
          redirect("/login") 
        }
      }, [])
    
  return (
    <div>
    <button class="Logout"  onClick={logout} >LOGOUT</button>
    </div>
  )
}

export default Logout
