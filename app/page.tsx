export default function Home() {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
          <h1 className="text-2xl font-bold text-blue-600">Welcome</h1>
          <p className="text-gray-600 mt-2">Please login or sign up to continue using our app.</p>
          <div className="mt-6">
            <a href="/login">
              <button className="w-full p-3 bg-blue-500 text-white rounded-md">Login</button>
            </a>
            <a href="/signup">
              <button className="w-full mt-3 p-3 bg-gray-300 rounded-md">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    );
  }