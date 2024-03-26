import React from 'react';

function LoginForm() {
    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
            <div className='40-w p-5 rounded'> 
                <form>
                    <h3>Login</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" name="email" placeholder='Enter your email adress' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" name="password" placeholder='Enter your password' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" id="remember" name="remember" className='custom-control custom checkbox' />
                        <label htmlFor="remember" className='custom-input-label'>
                            Remember me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                    <p className='text-right'>
                        Forgot <a href="">Password?</a><a href=''>Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
