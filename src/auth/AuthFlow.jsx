import React, { useState } from "react";
import "./AuthFlow.css"; // Add styles here

const AuthFlow = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="auth-container">
      {step === 1 && <Signup nextStep={nextStep} />}
      {step === 2 && <PhoneVerification nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <EmailVerification nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <ProfileSelection nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <ConfirmIdentity nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <SuccessScreen prevStep={prevStep} />}
    </div>
  );
};

// Step 1: Signup
const Signup = ({ nextStep }) => (
  <div className="step">
    <h2>Hello</h2>
    <p>Create an Account</p>
    <button onClick={nextStep}>Continue with Google</button>
    <button onClick={nextStep}>Continue with Facebook</button>
    <button onClick={nextStep}>Enter Email & Password</button>
  </div>
);

// Step 2: Phone Verification
const PhoneVerification = ({ nextStep, prevStep }) => (
  <div className="step">
    <h2>Verify your Account</h2>
    <p>Enter the 6-digit code sent to your phone</p>
    <input type="text" maxLength="6" />
    <button onClick={nextStep}>Confirm</button>
    <button onClick={prevStep}>Back</button>
  </div>
);

// Step 3: Email Verification
const EmailVerification = ({ nextStep, prevStep }) => (
  <div className="step">
    <h2>Making sure it's you</h2>
    <p>Enter the 5-digit code sent to your email</p>
    <input type="text" maxLength="5" />
    <button onClick={nextStep}>Confirm</button>
    <button onClick={prevStep}>Back</button>
  </div>
);

// Step 4: Profile Selection
const ProfileSelection = ({ nextStep, prevStep }) => (
  <div className="step">
    <h2>Select your Profile</h2>
    <div className="profile-list">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="profile-item" onClick={nextStep}>
          <p>Dr. Peter Drew</p>
          <p>Gynecologist - 1+ years experience</p>
        </div>
      ))}
    </div>
    <button onClick={prevStep}>Back</button>
  </div>
);

// Step 5: Confirm Identity
const ConfirmIdentity = ({ nextStep, prevStep }) => (
  <div className="step">
    <h2>Confirm your Identity</h2>
    <p>Click confirm to proceed</p>
    <button onClick={nextStep}>Confirm</button>
    <button onClick={prevStep}>Back</button>
  </div>
);

// Step 6: Success Screen
const SuccessScreen = ({ prevStep }) => (
  <div className="step">
    <h2>Success</h2>
    <p>Your account has been verified</p>
    <button onClick={prevStep}>Back</button>
  </div>
);

export default AuthFlow;
