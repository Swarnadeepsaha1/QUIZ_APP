"use client";
import Link from "next/link";
import {Button,
  Image,
  Menu
} from "semantic-ui-react";
import { useRouter } from 'next/navigation'




const NavBar = () => {

  
  const router = useRouter()
  const logout = () => {
      localStorage.setItem('isLoggedIn', false);
      router.push("/login");
    }

 
  
 return(  <Menu fixed="top" inverted>
    <>
      <Menu.Item header>
        <Link href={"/"}>
          <Image size="mini" src="/som.png" style={{ marginRight: "1.5em" }} />
          Exam App
        </Link>
      </Menu.Item>

      {/* <Menu.Item header>
        <Link href={"/add-question"}>Add Question</Link>
      </Menu.Item> */}
      {/* <Menu.Item header>
        <Link href={"/login"}>Logout</Link>
      </Menu.Item> */}
      <div className="logout">
      <Button color="red" onClick={logout} >LOGOUT</Button>
      </div>

      {/* <Menu.Item header>
        <Link href={"/login"} >Logout</Link>
      </Menu.Item> */}
    </>
  </Menu>



   ) }

export default NavBar;
