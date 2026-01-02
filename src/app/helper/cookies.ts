import Cookie from "js-cookie";

export const saveToCookie = (key: string, token: string): void => {
  localStorage.setItem(key, token);
  Cookie.set(key, token, {
    sameSite: "Lax",
    expires: 0.25,
    secure: true,
  });
};

export const saveRoleToCookie = (role: string): void => {
  try {
    localStorage.setItem("role", role);
    Cookie.set("role", role, {
      sameSite: "Lax",
      expires: 0.25,
      secure: true,
    });
  } catch (error) {
    console.error("Failed to save role:", error);
    saveToCookie("role", role);
  }
};

export const saveAccessToCookie = (access: string): void => {
  try {
    localStorage.setItem("access", access);
    Cookie.set("access", access, {
      sameSite: "Lax",
      expires: 0.25,
      secure: true,
    });
  } catch (error) {
    console.error("Failed to save access token:", error);
    saveToCookie("access", access);
  }
};

export const getTokenFromCookie = (key: string): string | undefined => {
  return Cookie.get(key);
};

export const removeAllFromCookie = (): void => {
  Cookie.remove("token");
  Cookie.remove("role");
  Cookie.remove("access");

  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("access");
};