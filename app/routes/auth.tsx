import { useLocation, useNavigate } from "react-router";
import {useEffect} from "react";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "HireScope | Auth" },
  { name: "description", content: "Log into your account" },
];

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split('next=')[1];
  const navigate = useNavigate();

  useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white w-90 h-70 p-6 text-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="font-quattrocento"><span className="text-[2.5rem]">Welcome</span></h1>
          </div>
          <div className="flex justify-center items-center ">
            {isLoading ? (
              <button className="auth-button animate-pulse px-4 py-2 text-xs">
                <p className="font-courier">Signing you in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                    <button className="auth-button px-4 py-2 text-xs" onClick={auth.signOut}>
                    <p className="font-courier">Log Out</p>
                  </button>
                ) : (
                  <button className="auth-button px-4 py-2 text-xs" onClick={auth.signIn}>
                    <h2 className="font-quattrocento"><span className="text-[1.3rem]">Log In to Continue Your Job Journey</span></h2>
                    <p className="font-courier">Log In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
