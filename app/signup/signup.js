import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold text-blue-600">Sign Up</h1>
        <p className="text-gray-600 mt-2">Please register with your email to continue using our app.</p>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="p-2 bg-black text-white rounded-md">F</button>
          <button className="p-2 bg-black text-white rounded-md">X</button>
        </div>

        <p className="text-gray-500 mt-4">Or sign up with email</p>
        <input type="email" placeholder="Email" className="w-full mt-2 p-2 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full mt-2 p-2 border rounded-md" />

        <div className="mt-4 flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-gray-600 text-sm">I agree with the privacy policy</span>
        </div>

        <button className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md">Sign Up</button>

        <p className="mt-4 text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}