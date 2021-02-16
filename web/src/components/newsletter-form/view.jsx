import React, { useState, useCallback } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Box, StyledInput, StyledButton } from '..';
import { encode } from '../../lib/helpers';

const formDefaults = {
  emailAddress: '',
  botField: '',
};

const NewsletterForm = ({ recaptchaTheme = 'light' }) => {
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
        alert('Thanks! Stay tuned for Newsletter content in your inbox \n\n (you may need to check the spam folder)');
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
      name='newsletter'
      method='POST'
      netlify-honeypot='botField'
      data-netlify='true'
      data-netlify-recaptcha='true'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='form-name' value='newsletter' />
      <input type='hidden' name='botField' onChange={onFieldChange} />

      <Box flex col maxw='250px'>
        <StyledInput
          type='email'
          name='emailAddress'
          placeholder='Email address'
          aria-label='Email Address'
          onChange={onFieldChange}
          value={formFields.emailAddress}
          minw='175px'
          required
          mb='0.5em'
        />
        <StyledButton
          type='submit'
          design='primary'
          disabled={!recaptchaToken}
        >
          Subscribe
        </StyledButton>
      </Box>

      <GoogleReCaptcha onVerify={handleReCaptchaVerify} />
    </form>
  );
};

export default NewsletterForm;
