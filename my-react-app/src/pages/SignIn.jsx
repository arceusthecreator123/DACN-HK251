import React from 'react';
import AppLogo from '../assets/blank-profile-pic.jpg';
import './SignIn.css';
function SignIn() {
  return (
    <div className='login-container'>
      <img src={AppLogo} alt='Web logo'/>

      <h1>Sign In</h1>

      <div className='form-box  '>
        <form>
          <div className='input-group'>
            <label htmlFor='login-field'>Username or email address</label>
            <input type='text' id='login-field' name='login' defaultValue='helpmeImStuck' required/>

          </div>
          <div className='input-group'>
            <div className='password-label'>
              <label htmlFor='password'>Password</label>
              <a href='#'>Forgot password</a>
            </div>
            <input type="password" id="password" name="password" defaultValue="............" required />

          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
      <div className="separator">or</div>

      <div className="social-logins">
        <button type="button" className="btn btn-social">
          <img src={AppLogo} alt="Google logo" />
          Continue with Google
        </button>
        <button type="button" className="btn btn-social">
          <img src={AppLogo} alt="Apple logo" />
          Continue with Apple
        </button>
      </div>

      <div className="signup-box">
        New to GitHub? <a href="#">Create an account</a>
      </div>

      <a href="#" className="passkey-link">Sign in with a passkey</a>

    </div>
  )
}

export default SignIn
