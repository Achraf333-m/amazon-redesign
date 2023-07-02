import { auth } from "@/firebase";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useEffect, useState, useMemo, useContext } from "react";

interface props {
    children: React.ReactNode
}

interface FbAuth {
    user: User | null ,
    signIn: (email:string, password:string) => Promise<void>,
    signUp: (email:string, password:string) => Promise<void>,
    logOut: () => Promise<void>,
    error: string | null,
    loading: boolean
}

const AuthContext = createContext<FbAuth>({
    user: null,
    signIn: async () => {},
    signUp: async () => {},
    logOut: async () => {},
    error: null,
    loading: false
})

export const AuthProvider = ({children}:props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, [auth]);

  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        setUser(userCreds.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        setUser(userCreds.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const logOut = async () => {
    setLoading(true);

    await signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  const memo = useMemo(
    () => (
      { user, loading, error, signIn, logOut, signUp }
      ),
      [loading, user, error]
  );

  return <AuthContext.Provider value={memo}>{children}</AuthContext.Provider>
};

export default function useAuth() {
    return useContext(AuthContext)
}