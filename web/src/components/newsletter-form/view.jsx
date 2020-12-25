import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box, StyledInput, StyledButton } from '..';
import { encode } from '../../lib/helpers';

const formDefaults = {
  emailAddress: '',
  botField: '',
};

const NewsletterForm = ({ recaptchaTheme = 'light' }) => {
  const [recaptchaDone, setRecaptchaDone] = useState(false);
  const [formFields, setFormFields] = useState(formDefaults);
  const recaptchaRef = useRef();

  const onFieldChange = ({ target }) => {
    setFormFields({ ...formFields, [target.name]: target.value });
  };

  const onReset = () => {
    setFormFields(formDefaults);
    setRecaptchaDone(false);
    recaptchaRef.current.reset();
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const form = e.target;
      const recaptchaValue = recaptchaRef.current.getValue();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          'g-recaptcha-response': recaptchaValue,
          ...formFields,
        }),
      });

      if (res.ok && res.status === 200) {
        alert('Thanks! Stay tuned for Newsletter content in your inbox');
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

      <Box flex ai='center'>
        <StyledInput
          type='email'
          name='emailAddress'
          id='emailAddress'
          placeholder='Email address'
          aria-label='Email Address'
          onChange={onFieldChange}
          value={formFields.emailAddress}
          minw='178px'
          required
        />
        <StyledButton type='submit' design='primary' m='0 0.5em' disabled={!recaptchaDone}>
          Subscribe
        </StyledButton>
      </Box>

      {process.env.SITE_RECAPTCHA_KEY && (
        <Box mt='1em'>
          <ReCAPTCHA
            ref={recaptchaRef}
            size='normal'
            theme={recaptchaTheme}
            sitekey={process.env.SITE_RECAPTCHA_KEY}
            onChange={() => setRecaptchaDone(true)}
          />
        </Box>
      )}
    </form>
  );
};

export default NewsletterForm;
