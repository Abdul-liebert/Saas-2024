"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Label } from "@/components/ui/label";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const router = useRouter();

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      document.cookie = "token=my-auth-token; path=/;";
      router.push("/dashboard");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* FlickeringGrid as Background */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <FlickeringGrid
          className="absolute inset-0 -z-10"
          squareSize={4}
          gridGap={6}
          color="#333333"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={dimensions.height}
          width={dimensions.width}
        />
      )}

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="container relative mx-auto my-8 flex max-w-4xl flex-col items-center justify-center gap-6 rounded-lg bg-white p-6 shadow-lg lg:grid lg:h-auto lg:max-w-4xl lg:grid-cols-2 lg:px-5">
          <div className="relative hidden h-full flex-col rounded-l-lg bg-white p-10 text-white lg:flex">
            <div className="absolute inset-0 bg-zinc-800 rounded-lg" />
            <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src={"/img/logo.png"} alt="logo" width={24} height={24} className="mr-2"/>
              Manajemen Piket
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;Lebih baik terlihat cupu, daripada jadi tukang
                  cepu&rdquo;
                </p>
                <span>~ Quotes of the day</span>
              </blockquote>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-r-lg bg-white p-8">
            <div className="mx-auto w-full max-w-sm space-y-6">
              <div className="flex flex-col space-y-2 text-center justify-center items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight">Login Form</h1>
                <p className="text-md text-muted-foreground ">
                  Enter your email & password below to enter the next page!!
                </p>
                <form
                  action=""
                  onSubmit={handleLogin}
                  className="flex flex-col w-full gap-4"
                >
                  <div className="w-full">
                    <Label className="flex justify-start mb-2">Username</Label>
                    <Input
                      type="string"
                      placeholder="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label className="flex justify-start mb-2">Password</Label>
                    <Input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <ShimmerButton>Login</ShimmerButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
