import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('https://treasure-hunt-tcb7.onrender.com/api/v1/user/create-user', {
        email,
        password,
        name
      }, {
        withCredentials: true
      })
      console.log(data);
      navigate('/admin-users')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-300 rounded-3xl px-4 md:p-12 shadow-2xl w-full md:w-[36rem] h-[30rem] m-5 py-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Create User</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-xl appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline bg-gray-100 focus:bg-white"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-xl appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline bg-gray-100 focus:bg-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-xl appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline bg-gray-100 focus:bg-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center md:justify-between">
            {/* <Link to="/home"> */}
            <button
              type="submit"
              className="shadow-2xl bg-indigo-600  hover:bg-white text-white hover:text-indigo-600 font-bold py-2 px-4 rounded-xl focus:outline"
            >
              Create User
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}
