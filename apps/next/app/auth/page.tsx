"use client";
import { Code2Icon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const INITIAL_FORMDATA = { name: "", email: "", password: "" };
export default function SignIn() {
  const [formState, setFormState] = useState<"signin" | "signup">("signin");
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      toast.success("Already signed in!!");
      router.push("/dashboard");
    }
  }, [session.status]);
  console.log(session);
  function handleFormDataChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  async function handleFormSubmit() {
    console.log(formData);
    if (formState === "signin") {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });
        console.log(result);

        if (result?.error) toast.error(result.error);
        else {
          toast.success("Signed In");
          setFormData(INITIAL_FORMDATA);
          router.push("/dashboard");
        }
      } catch (error) {
        toast.error(error as string);
      }
    } else {
      try {
        const result = await axios.post("/api/user", formData);
        if (result.status === 200) {
          toast.success("User created");
          setFormData(INITIAL_FORMDATA);
          setFormState("signin");
        }
      } catch (error) {
        console.log("Error");
      }
    }
  }
  console.log(formData);
  return (
    <div className=" bg-gradient-to-b h-full from-blue-50 to-white flex flex-col justify-between bg-yellow-500 w-full">
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Code2Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {formState == "signin" ? "Sign in to CODEX" : "Sign up to CODEX"}
            </h1>
            <p className="text-gray-600">
              {formState == "signin"
                ? "Enter your details to access your account"
                : "Enter your details to create your account"}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                inputMode="numeric"
                placeholder="name@example.com"
                onChange={handleFormDataChange}
              />
            </div>
            {formState === "signup" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  onChange={handleFormDataChange}
                />
              </div>
            )}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                onChange={handleFormDataChange}
              />
            </div>

            <div>
              <button
                onClick={handleFormSubmit}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {formState === "signin" ? "Sign in" : "Sign up"}
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            {formState === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
              onClick={() => {
                if (formState === "signin") setFormState("signup");
                else setFormState("signin");
              }}
            >
              {formState === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
