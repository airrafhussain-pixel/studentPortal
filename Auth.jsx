<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f9fa] to-[#e5e7eb] px-4">
  <div className="max-w-md w-full bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8">
    <h2 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 mb-2">
      {isSignup ? "Create Your DevXcript Account" : "Login to DevXcript Portal"}
    </h2>
    <p className="text-sm text-center text-gray-500 mb-6">
      {isSignup
        ? "Sign up with email & password"
        : "Use your credentials to continue"}
    </p>

    <form onSubmit={handleEmailAuth} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="info@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-orange-500 transition"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
      >
        {isSignup ? "Sign Up" : "Sign In"}
      </button>
    </form>

    <div className="mt-6">
      <div className="flex items-center justify-center">
        <div className="w-full h-px bg-gray-300"></div>
        <span className="px-2 text-xs text-gray-500">OR</span>
        <div className="w-full h-px bg-gray-300"></div>
      </div>
      <button
        onClick={handleGoogleAuth}
        className="mt-6 flex items-center justify-center gap-2 border border-gray-300 w-full py-2 rounded-xl bg-white hover:bg-gray-50 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
          <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303..."/>
        </svg>
        <span className="font-medium text-gray-700">Continue with Google</span>
      </button>
    </div>

    <p className="text-sm text-center text-gray-500 mt-6">
      {isSignup ? (
        <>
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 font-medium hover:underline">Sign in</a>
        </>
      ) : (
        <>
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-500 font-medium hover:underline">Sign up</a>
        </>
      )}
    </p>
  </div>
</div>
