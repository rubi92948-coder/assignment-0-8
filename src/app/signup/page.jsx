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
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const password = (formData.get("password") || "").toString();

    console.log("SUBMIT DATA:", { name, email, password });

    try {
      const { data, error } = await authClient.signUp.email({
        name: name || undefined,
        email,
        password,
      });

      console.log("AUTH RESPONSE:", { data, error });

      if (error) {
        console.log("SIGNUP ERROR DETAILS:", JSON.stringify(error, null, 2));
        return;
      }

      router.push("/");
    } catch (err) {
      console.log("REQUEST FAILED:", err);
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5 bg-purple-50 border-purple-200 shadow-md">
      <h1 className="text-center text-2xl font-bold text-purple-700">
        Sign Up
      </h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        
        {/* NAME */}
        <TextField isRequired>
          <Label className="text-purple-700">Name</Label>
          <Input name="name" placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* EMAIL */}
        <TextField isRequired>
          <Label className="text-purple-700">Email</Label>
          <Input name="email" type="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* PASSWORD */}
        <TextField isRequired>
          <Label className="text-purple-700">Password</Label>
          <Input name="password" type="password" placeholder="Enter password" />

          <Description className="text-purple-500">
            Must be 8+ characters with uppercase + number
          </Description>

          <FieldError />
        </TextField>

        {/* BUTTONS */}
        <div className="flex gap-2">
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700"
            type="submit"
          >
            <Check />
            Submit
          </Button>

          <Button
            type="reset"
            variant="secondary"
            className="border-purple-300 text-purple-700"
          >
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}