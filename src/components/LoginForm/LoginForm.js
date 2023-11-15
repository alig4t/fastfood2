import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Button, Form, Modal } from 'react-bootstrap';
import "./LoginForm.css"

import { SmsCodeContext } from '../../context/SmsCodeContext';
import { AuthContext } from '../../context/AuthContext';

import Countdown from 'react-countdown';
import SpinnerLoading from '../UI/SpinnerLoading/SpinnerLoading';


function LoginForm(props) {

  /*********************  Contexts  *********************/
  const [AuthStatus, LoginHanler] = useContext(AuthContext) //Authorization User Context 
  const [smsCode, defineCode] = useContext(SmsCodeContext); //The code that is sent to confirm the mobile number

  /*********************  Initial States   *********************/
  const [phoneInput, setPhoneInput] = useState(''); //Mobile number that the user enters
  const [verifyInput, setVerifyInput] = useState(''); //The code that the user sends to confirm the mobile number
  const [isLoading, setIsLoading] = useState({ status: false, 'msg': "" }) //Loading when user entered number

  /*********************  Ref's of display messages  *********************/
  const phoneRef = useRef()
  const msgFormRef = useRef()

  /*********************  useNavigate for Routing  *********************/
  // const navigate = useNavigate()

  /*********************  Focus on input  *********************/
  useEffect(() => {
    if (props.show) {
      phoneRef.current.value = ''
      phoneRef.current.focus()
    }
  }, [props.show])

  /*********************  Close Modal When User Logged In  *********************/
  useEffect(() => {
    if (AuthStatus === true) {
      props.handleClose()
    }
  }, [AuthStatus])


  /*********************  Phone Number Input Handler   *********************/
  const loginHandler = (event) => {
    event.preventDefault();
    setIsLoading({ status: true, 'msg': "" })
    setTimeout(() => {
      if (check_phone(phoneInput)) {
        msgFormRef.current.innerHTML = '';
        defineCode()
        setIsLoading({ status: false, 'msg': "" })
      } else {
        setIsLoading({ status: false, 'msg': "شماره همراه معتبر نیست.." })
      }
    }, 500)
  }

  /*********************  Verify Code Input Handler   *********************/
  const verifyHandler = () => {
    if (verifyInput === smsCode) {
      LoginHanler('/')
    } else {
      msgFormRef.current.innerHTML = "کد تایید نادرست است.."
    }
  }

  /*********************  Validation of typed number   *********************/
  const check_phone = (number) => {
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    var result = regex.test(number);
    return result;
  };

  /*********************  timer for verify phone   *********************/
  const timer = useMemo(() => {
    if (smsCode) {
      return <Countdown
        date={Date.now() + parseInt(process.env.REACT_APP_SMS_TIMER_LIMIT)}
        renderer={({ seconds, minutes }) => (
          <span>{minutes * 60 + seconds} ثانیه </span>
        )}
      />
    }
  }, [smsCode])



  return (
    <Modal show={props.show} onHide={props.handleClose} scrollable={true} size='sm' backdrop="static" keyboard={false}>
      <Modal.Header className='py-2 px-3'>
        <Modal.Title className='h6'>ورود / ثبت نام</Modal.Title>
        <button type="button" className="btn-close m-0" onClick={props.handleClose} aria-label="Close"></button>
      </Modal.Header>
      <Modal.Body>

        <CSSTransition
          in={true}
          timeout={8000}
          classNames="effect-ff"

        >
          {smsCode ? (
            <>
              <Form.Label>لطفاً برای تکمیل ثبت نام کد ارسال شده را وارد کنید:</Form.Label>
              <Form.Control type="text" placeholder=""
                value={verifyInput}
                onChange={(e) => setVerifyInput(e.target.value)}
                ref={phoneRef}
              />
              <span ref={msgFormRef} className="msg-form-error">{isLoading.msg}</span>
              <div className='d-flex jusifty-content-around mt-3'>
                <Button variant="danger" size="sm" className='mr-2' type="submit"
                  onClick={verifyHandler}
                >
                  تایید
                </Button>
                <span className='timer-ff flex-fill text-start'>
                  {timer}
                </span>
              </div>
            </>
          ) : (
            <>
              <Form.Label>شماره موبایل</Form.Label>
              <Form.Control type="text" placeholder=""
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                ref={phoneRef}
              />
              <span ref={msgFormRef} className="msg-form-error">{isLoading.msg}</span>
              <Button variant="danger" size="sm" className='mt-3 mr-2' type="submit"
                onClick={loginHandler}
              >
                ورود
              </Button>
            </>
          )
          }

        </CSSTransition>





        {isLoading.status ? <SpinnerLoading />

          : null}







      </Modal.Body>
    </Modal>


  );
}

export default LoginForm