"use client";
import Link from "next/link";
import { useState,useEffect } from "react";
import {
  Button,
  Form,
  Grid,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { useRouter } from 'next/navigation'
import { redirect, usePathname } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  
  //  const pathname = usePathname();
  //  useEffect(() => {

  //    if(localStorage.getItem('isLoggedIn')){
  //      redirect("/") 
  //    }
  //    else{
  //      redirect("/login") 
  //    }
  //  }, [])  
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // const isValid = validateEmailAndPassword(email, password);

    try {
      let response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:email, password }),
      });
      response=await response.json();
      if (response.message) 
      {
        setErrorMessage("Please provide a valid email and password");
      }
      else{
        setErrorMessage("")
        localStorage.setItem("isLoggedIn", true);
        router.push('/ins');
      }
    } catch (error) {
      console.log(error)
      setErrorMessage("Please Try Again");
    }
  };

  // const validateEmailAndPassword = (email, password) => {
  //   return email.length >= 3 && password.length >= 3;
  // };

  return (
    <div>
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <div>
              <Image
                size="small"
                src="/som.png"
                style={{
                  margin: "auto",
                  marginBottom: 10,
                }}
              />
            </div>

            <Form size="large" onSubmit={handleLogin}>
              <Segment>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {errorMessage && (
                  <Message negative>
                    <Message.Header>{errorMessage}</Message.Header>
                  </Message>
                )}

                <Button inverted color="green" type="submit">
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
