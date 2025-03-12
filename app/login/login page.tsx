export default function Login() {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
          <h1 className="text-2xl font-bold text-blue-600">Login Now</h1>
          <p className="text-gray-600 mt-2">Please login to continue using our app.</p>
          <input type="email" placeholder="Email" className="w-full mt-2 p-2 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full mt-2 p-2 border rounded-md" />
          <button className="w-full mt-4 p-3 bg-blue-500 text-white rounded-md">Login</button>
        </div>
      </div>
    );
  }