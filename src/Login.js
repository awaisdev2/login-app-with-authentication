import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFname] = useState('');
    const [lastName, setLname] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Username:', username);
        console.log('Password:', password);
        

        setFname('');
        setLname('');
        setUsername('');
        setPassword('');
    };

    return (
        <>


            <div className='container'>
                <section style={{ margin: '50px 100px' }} className="bg-white rounded-lg my-12">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-transparent md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl leading-tight tracking-tight  font-bold md:text-2xl">
                                    Create an account
                                </h1>
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <div>
                                            <label htmlFor="first_name" className="block mb-2 text-sm font-bold  font-bold">First name</label>
                                            <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i className="fa-solid fa-user"></i>
                                            </div>
                                            <input type="text" id="first_name" className="text-sm block w-full pl-10 p-2.5 bg-transparent border border-gray-300  font-bold rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full" placeholder="First Name" required="is required" value={firstName} onChange={(event) => setFname(event.target.value)} />
                                        </div>
                                            
                                        </div>
                                        <div>
                                            <label htmlFor="last_name" className="block my-2 text-sm font-bold  font-bold">Last name</label>
                                            <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i className="fa-solid fa-user-tie"></i>
                                            </div>
                                            <input type="text" id="last_name" className="text-sm block w-full pl-10 p-2.5 bg-transparent border border-gray-300  font-bold rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full" placeholder="Last Name"  required="is required" value={lastName} onChange={(event) => setLname(event.target.value)}  />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-bold  font-bold">Your email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 svg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            </div>
                                            <input type="email" name="email" id="email" className="text-sm block w-full pl-10 p-2.5 bg-transparent border border-gray-300  font-bold rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full" placeholder="name@company.com" required="is required" value={username} onChange={(event) => setUsername(event.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-bold  font-bold">Password</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i className="fa-solid  fa-filter"></i>
                                            </div>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="text-sm block w-full pl-10 p-2.5 bg-transparent border border-gray-300  font-bold rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full" required="is required" value={password} onChange={(event) => setPassword(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-transparent focus:ring-3 focus:ring-blue-300" required="is required" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light ">I accept the <a className="font-black text-blue-600 hover:underline" href="/">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full hover:text-white bg-transparent border border-blue-600 transition font-bold hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center">Create an Account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
