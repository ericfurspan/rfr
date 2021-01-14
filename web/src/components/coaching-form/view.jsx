import React, { useState, useCallback } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { StyledInput, StyledLabel, StyledButton } from '..';
import { encode } from '../../lib/helpers';

const formDefaults = {
  name: '',
  emailAddress: '',
  botField: '',
};

const CoachingForm = ({ recaptchaTheme = 'light' }) => {
  const [formFields, setFormFields] = useState(formDefaults);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const onFieldChange = ({ target }) => {
    setFormFields({ ...formFields, [target.name]: target.value });
  };

  const onReset = () => {
    setFormFields(formDefaults);
  };

  const handleReCaptchaVerify = useCallback(
    (token) => {
      setRecaptchaToken(token);
    },
    [setRecaptchaToken]
  );

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const form = e.target;

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          'g-recaptcha-response': recaptchaToken,
          ...formFields,
        }),
      });

      if (res.ok && res.status === 200) {
        alert('Thanks! Stay tuned for a reply from one of our coaches');
      } else {
        alert(`${res.status} - ${res.statusText}`);
      }
    } catch (error) {
      alert(error);
    } finally {
      onReset();
    }
  };

  return (
    <form
      name='coaching-request'
      method='POST'
      netlify-honeypot='botField'
      data-netlify='true'
      data-netlify-recaptcha='true'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='form-name' value='coaching-request' />
      <input type='hidden' name='botField' onChange={onFieldChange} />

      <StyledLabel>
        Name
        <StyledInput
          type='text'
          name='name'
          id='name'
          placeholder='Enter your Name'
          onChange={onFieldChange}
          value={formFields.name}
          required
        />
      </StyledLabel>

      <StyledLabel>
        Email Address
        <StyledInput
          type='email'
          name='emailAddress'
          placeholder='Enter your Email'
          aria-label='Email Address'
          onChange={onFieldChange}
          value={formFields.emailAddress}
          minw='175px'
          required
          mb='0.5em'
        />
      </StyledLabel>
      <StyledButton
        type='submit'
        design='primary'
        disabled={!recaptchaToken}
      >
        Request a Coach
      </StyledButton>

      <GoogleReCaptcha onVerify={handleReCaptchaVerify} />
    </form>
  );
};

export default CoachingForm;
