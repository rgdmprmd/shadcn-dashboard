"use server";

export type LoginValues = {
  email: string;
  password: string;
};

export type RegisterValues = {
  name: string;
  email: string;
  password: string;
};

export const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function authenticate(values: LoginValues) {
  const { email, password } = values;

  delay(2000);

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return { success: false, message: data.message || "Login failed", data: null };

    return data;
  } catch (err) {
    console.log(err);
    return { success: false, message: "Invalid Credentials.", data: null };
  }
}

export async function register(values: RegisterValues) {
  const { name, email, password } = values;

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) return { success: false, message: data.message || "Registration failed", data: null };

    return data;
  } catch (err) {
    console.log(`err:`, err);
    return { success: false, message: "Invalid Credentials.", data: null };
  }
}

export async function getCurrentUser(token: string) {
  console.log("getCurrentUser got hit");
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/v1/auth/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) return { success: false, message: data.message || "Unauthenticated user", data: null };

    return data;
  } catch (err) {
    console.log(`err:`, err);
    return { success: false, message: "Invalid Token.", data: null };
  }
}
