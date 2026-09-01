"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { routes } from "@/lib/routes";

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12l5 5 8-10" stroke="#3DFF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function SignInCard() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [loginDone, setLoginDone] = useState(false);
  const [signupDone, setSignupDone] = useState(false);

  return (
    <div className="si-wrap">
      <style>{`
        .si-wrap{min-height:calc(100vh - 62px);display:flex;align-items:center;justify-content:center;padding:150px 20px 90px;background:var(--bg);position:relative;overflow:hidden}
        .si-wrap::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 45% at 50% 0%,rgba(61,255,135,.06) 0%,transparent 65%);pointer-events:none}
        .si-card{position:relative;z-index:1;width:100%;max-width:440px;background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:40px 36px}
        .si-eyb{display:inline-flex;align-items:center;gap:7px;padding:4px 12px;border:1px solid rgba(61,255,135,.22);background:rgba(61,255,135,.06);border-radius:22px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--green);margin-bottom:18px}
        .si-eyb::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green)}
        .si-card h1{font-size:28px;font-weight:400;letter-spacing:-.02em;color:var(--text);line-height:1.15;margin-bottom:8px}
        .si-card h1 em{font-family:var(--fs);font-style:italic;color:var(--green)}
        .si-sub{font-size:13.5px;color:var(--text2);line-height:1.6;margin-bottom:26px}
        .si-seg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:26px;background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:5px}
        .si-seg button{padding:12px 10px;border:none;background:none;border-radius:8px;font-family:var(--ff);font-size:14px;font-weight:500;color:var(--text2);cursor:pointer;transition:all .2s var(--ease)}
        .si-seg button.on{background:var(--green);color:#030C05}
        .si-forgot{display:block;text-align:right;font-size:12.5px;color:var(--text3);margin:-6px 0 18px}
        .si-forgot:hover{color:var(--green)}
        .si-foot{font-size:11.5px;color:var(--text3);text-align:center;margin-top:16px;line-height:1.6}
        .si-foot a{color:var(--green)}
      `}</style>

      <div className="si-card gs">
        <div className="si-eyb">Candidate &amp; client portal</div>
        <h1>{mode === "login" ? <>Welcome <em>back.</em></> : <>Create your <em>account.</em></>}</h1>
        <p className="si-sub">{mode === "login" ? "Sign in to track your applications and hear from your recruiter." : "One profile to apply for any role and keep talking to the same recruiter."}</p>

        <div className="si-seg">
          <button type="button" className={mode === "login" ? "on" : ""} onClick={() => setMode("login")}>Log in</button>
          <button type="button" className={mode === "signup" ? "on" : ""} onClick={() => setMode("signup")}>Create account</button>
        </div>

        {mode === "login" ? <LoginForm done={loginDone} onSubmit={() => setLoginDone(true)} /> : <SignupForm done={signupDone} onSubmit={() => setSignupDone(true)} />}

        <div className="si-foot">By continuing you agree to Rivago&apos;s <Link href={routes.terms}>Terms</Link> and <Link href={routes.privacy}>Privacy Policy</Link>.</div>
      </div>
    </div>
  );
}

function LoginForm({ done, onSubmit }: { done: boolean; onSubmit: () => void }) {
  if (done) return <SuccessState heading="You're signed in." body="Redirecting you back to your applications and saved roles." />;
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <div className="if-field">
        <label>Email</label>
        <input type="email" placeholder="you@email.com" required />
      </div>
      <div className="if-field">
        <label>Password</label>
        <input type="password" placeholder="Your password" required />
      </div>
      <Link href={routes.contactUs} className="si-forgot">Forgot password?</Link>
      <button type="submit" className="if-submit">Log in</button>
    </form>
  );
}

function SignupForm({ done, onSubmit }: { done: boolean; onSubmit: () => void }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  if (done) return <SuccessState heading="Account created." body="You can now apply to any role in one click and hear back from a named recruiter." />;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (password !== confirm) {
          setError("Passwords don't match — please check and try again.");
          return;
        }
        setError("");
        onSubmit();
      }}
    >
      <div className="if-field">
        <label>Full name</label>
        <input type="text" placeholder="Your full name" required />
      </div>
      <div className="if-field">
        <label>Email</label>
        <input type="email" placeholder="you@email.com" required />
      </div>
      <div className="if-field">
        <label>Password</label>
        <input type="password" placeholder="Create a password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="if-field">
        <label>Confirm password</label>
        <input type="password" placeholder="Repeat your password" required minLength={8} value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      </div>
      {error && <div style={{ fontSize: 12.5, color: "#ffb3b3", background: "rgba(255,107,107,.09)", border: "1px solid rgba(255,107,107,.32)", borderRadius: 9, padding: "10px 13px", marginBottom: 16 }}>{error}</div>}
      <button type="submit" className="if-submit">Create account</button>
    </form>
  );
}

function SuccessState({ heading, body }: { heading: string; body: string }) {
  return (
    <div style={{ textAlign: "center", padding: "22px 0 6px" }}>
      <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(61,255,135,.12)", border: "1px solid rgba(61,255,135,.3)", display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
        <Check />
      </div>
      <div style={{ fontSize: 16, fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>{heading}</div>
      <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, maxWidth: 320, margin: "0 auto" }}>{body}</div>
    </div>
  );
}
