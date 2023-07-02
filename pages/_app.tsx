import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import { AuthProvider } from "@/cHooks/useAuth";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}
