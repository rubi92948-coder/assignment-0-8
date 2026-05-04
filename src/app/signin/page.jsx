"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import { useState } from "react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ data, error });

    // ✅ FIX: store user for navbar avatar
    localStorage.setItem("token", "user-token");

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: data?.user?.email || email,
        image: data?.user?.image || null,
      })
    );

    window.dispatchEvent(new Event("storage"));
  };

  const handleGoogleSignIn = async () => {
    const res = await authClient.signIn.social({
      provider: "google",
    });

    console.log(res);

    localStorage.setItem("token", "google-user");

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: res?.user?.email,
        image: res?.user?.image,
      })
    );

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 px-4">

      <Card className="w-full max-w-md py-10 rounded-2xl border border-purple-200 bg-white/70 backdrop-blur-xl shadow-md">

        <h1 className="text-center text-3xl font-bold text-purple-700 mb-6">
          Welcome Back
        </h1>

        <Form className="flex w-full px-6 flex-col gap-4" onSubmit={onSubmit}>

          {/* EMAIL */}
          <TextField isRequired>
            <Label className="text-purple-700">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="bg-white/80 border border-purple-200 focus:border-purple-400"
            />
            <FieldError />
          </TextField>

          {/* PASSWORD */}
          <TextField isRequired>
            <Label className="text-purple-700">Password</Label>

            <div style={{ position: "relative" }}>
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-white/80 border border-purple-200 focus:border-purple-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#6b21a8",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <Description className="text-purple-500">
              Enter your account password
            </Description>

            <FieldError />
          </TextField>

          {/* BUTTONS */}
          <div className="flex gap-2 mt-2">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white w-full"
            >
              <Check /> Sign In
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full border border-purple-300 text-purple-700"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* OR */}
        <p className="text-center text-purple-400 my-4">OR</p>

        {/* GOOGLE */}
        <div className="px-6">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center gap-2"
          >
            <GrGoogle /> Sign In with Google
          </Button>
        </div>

      </Card>
    </div>
  );
}