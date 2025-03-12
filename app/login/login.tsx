import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold text-blue-600">Login Now</h1>
        <p className="text-gray-600 mt-2">Please login to continue using our app.</p>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="p-2 bg-black text-white rounded-md">F</button>
          <button className="p-2 bg-black text-white rounded-md">X</button>
        </div>

        <p className="text-gray-500 mt-4">Or login with email</p>
        <input type="email" placeholder="Email" className="w-full mt-2 p-2 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full mt-2 p-2 border rounded-md" />

        <div className="mt-4 flex justify-between text-sm">
          <span></span>
          <Link href="/forgot-password" className="text-blue-600">Forgot Password?</Link>
        </div>

        <button className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md">Login</button>

        <p className="mt-4 text-gray-600">
          Don't have an account? <Link href="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
}