import { supabase } from "../../utils/supabaseClient";
import { useRef, useState } from "react";

// const AddComment = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChange = (event: any) => {
//     setEmail(event.target.value);
//   };
//   const handlePWChange = (event: any) => {
//     setPassword(event.target.value);
//   };
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     console.log("in submit");
//     signInWithEmail();
//   };

//   async function signInWithEmail() {
//     const { user, error } = await supabase.auth.signIn({
//       email: email,
//       password: password,
//     });
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="email"
//           value={email}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="password"
//           value={password}
//           onChange={handlePWChange}
//         />
//         <button type="submit">login</button>
//       </form>
//     </div>
//   );
// };
// export default AddComment;
export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
