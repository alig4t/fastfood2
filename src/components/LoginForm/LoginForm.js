import React, { useState, useRef, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginForm.css"

function LoginForm() {

  /*********************  Initial States   *********************/
  const [phoneInput, setPhoneInput] = useState(''); //Mobile number that the user enters
  const [smsCode, setSmsCode] = useState(); //The code that is sent to confirm the mobile number
  const [verifyInput, setVerifyInput] = useState(''); //The code that the user sends to confirm the mobile number


  /*********************  Ref's of display messages  *********************/
  const phoneRef = useRef()
  const msgFormRef = useRef()
  const msgValidRef = useRef()


  /*********************  Focus on input  *********************/
  useEffect(() => {
    phoneRef.current.focus()
  },)


  /*********************  Phone Number Input Handler   *********************/
  const loginHandler = (event) => {
    event.preventDefault()
    if (check_phone(phoneInput)) {
      let randomCode = generate(6);
      console.log(randomCode);
      msgFormRef.current.innerHTML = '';
      setSmsCode(randomCode)
    } else {
      msgFormRef.current.innerHTML = 'شماره همراه معتبر نیست..';
    }
  }

  /*********************  Verify Code Input Handler   *********************/
  const verifyHandler = () => {
    if (verifyInput == smsCode) {
      console.log("Taeeeeeeed");
      msgValidRef.current.innerHTML = "این بخش فعلا غیرفعال است.."
    } else {
      console.log('wring code');
      msgValidRef.current.innerHTML = "کد تایید نادرست است.."
    }
  }

  /*********************  Generate a 6-digit random number  *********************/
  function generate(n) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.  
    if (n > max) {
      return generate(max) + generate(n - max);
    }
    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return ("" + number).substring(add);
  }


  /*********************  Validation of typed number   *********************/
  const check_phone = (number) => {
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    var result = regex.test(number);
    return result;
  };



  /*********************  Verification Section Element   *********************/
  const verifyElementForm = (
    <>
      <Form.Label>لطفاً برای تکمیل ثبت نام کد ارسال شده را وارد کنید:</Form.Label>
      <Form.Control type="text" placeholder="این بخش فعلا غیرفعال است.."
        value={verifyInput}
        onChange={(e) => setVerifyInput(e.target.value)}
        ref={phoneRef}
      />
      <span ref={msgValidRef} className="msg-form-error"></span>
      <Button variant="danger" size="sm" className='mt-3 mr-2' type="submit"
        onClick={verifyHandler}
      >
        تایید
      </Button>
    </>
  )

  /*********************  Phone Number Section Element   *********************/
  const phoneElementForm = (
    <>
      <Form.Label>شماره موبایل</Form.Label>
      <Form.Control type="text" placeholder=""
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value)}
        ref={phoneRef}
      />
      <span ref={msgFormRef} className="msg-form-error"></span>
      <Button variant="danger" size="sm" className='mt-3 mr-2' type="submit"
        onClick={loginHandler}
      >
        ورود
      </Button>
    </>
  )

  return (
    <>
      {smsCode ? verifyElementForm : phoneElementForm}
    </>
  );
}

export default LoginForm