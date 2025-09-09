import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const login = {
  title: "Login",
  description: "Enter your email below to login to your account",
  register: "Don't have an account?",
  link: "Sign up",
};

const register = {
  title: "Register",
  description: "Enter your email below to create your account",
  login: "Already have an account?",
  link: "Sign in",
};

export function AuthForm({ isLoginPage, className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{isLoginPage ? login.title : register.title}</CardTitle>
          <CardDescription>
            {isLoginPage ? login.description : register.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              {isLoginPage ? (
                <>
                  {/* Login */}
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </>
              ) : (
                <>
                  {/* Register */}
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="username">Username</Label>
                    </div>
                    <Input id="username" type="text" required />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="phone">Phone Number</Label>
                    </div>
                    <Input id="phone" type="number" required />
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </>
              )}
              <div className="flex flex-col gap-3">
                {isLoginPage ? (
                  <Button type="submit" className="w-full">
                    {login.title}
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    {register.title}
                  </Button>
                )}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {isLoginPage ? login.register : register.login}{" "}
              {isLoginPage ? (
                <Link to="/register" className="underline underline-offset-4">
                  {login.link}
                </Link>
              ) : (
                <Link to="/" className="underline underline-offset-4">
                  {register.link}
                </Link>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
