"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (username === "admin" && password === "password") {
            // Simpan token di cookie
            document.cookie = "token=my-auth-token; path=/;";
            // Redirect ke dashboard
            router.push("/dashboard");
        } else {
            alert("Username atau password salah");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f4f7f6",
                backgroundImage: "url('https://example.com/clean-background.png')", // Gambar latar belakang kebersihan
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexDirection: "column",
                gap: "2rem",
            }}
        >
            <div
                style={{
                    backgroundColor: "#ffffff",
                    padding: "3rem",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    maxWidth: "400px",
                    width: "100%",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        color: "#2c3e50",
                        fontFamily: "Arial, sans-serif",
                        marginBottom: "1rem",
                    }}
                >
                    Login
                </h1>
                <form
                    onSubmit={handleLogin}
                    style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >

                    <Input type="string" id="username" placeholder="username" value={username}onChange={(e) => setUsername(e.target.value)}required />
                    <Input type="string" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <Button >
                        Login
                    </Button>
                </form>
            </div>

            <p
                style={{
                    textAlign: "center",
                    color: "#7f8c8d",
                    fontSize: "0.9rem",
                }}
            >
                Belum punya akun? <a href="/register" style={{ color: "#3498db" }}>Daftar</a>
            </p>
        </div>
    );
}
