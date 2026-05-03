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

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data, error });

    if (!error) {
      router.push('/');
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5 bg-purple-50 border-purple-200 shadow-md">
      <h1 className="text-center text-2xl font-bold text-purple-700">
        Sign Up
      </h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label className="text-purple-700">Name</Label>
          <Input className="focus:ring-purple-400" placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label className="text-purple-700">Image URL</Label>
          <Input className="focus:ring-purple-400" placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-purple-700">Email</Label>
          <Input className="focus:ring-purple-400" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="text-purple-700">Password</Label>
          <Input className="focus:ring-purple-400" placeholder="Enter your password" />
          <Description className="text-purple-500">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button className="bg-purple-600 text-white hover:bg-purple-700" type="submit">
            <Check />
            Submit
          </Button>

          <Button type="reset" variant="secondary" className="border-purple-300 text-purple-700">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}