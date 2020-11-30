import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box, StyledInput, StyledButton } from '..';

const formDefaults = {
  email: '',
  botField: '',
};

const NewsletterForm = () => {
  const [recaptchaDone, setRecaptchaDone] = useState(false);
  const [formFields, setFormFields] = useState(formDefaults);
  const recaptchaRef = useRef();

  const onFieldChange = ({ target }) => {
    setFormFields({ ...formFields, [target.name]: target.value });
  };

  return (
    <form
      name='newsletter'
      method='post'
      action='/'
      netlify-honeypot='botField'
      data-netlify='true'
      data-netlify-recaptcha='true'
    >
      <input type='hidden' name='botField' />
      <Box flex ai='center'>
        <StyledInput
          name='email'
          type='email'
          placeholder='Your email'
          minw='178px'
          onChange={onFieldChange}
          value={formFields.email}
          required
        />
        <StyledButton type='submit' design='secondary' ml='0.75em' disabled={!recaptchaDone}>
          Subscribe
        </StyledButton>
      </Box>
      {process.env.SITE_RECAPTCHA_KEY && (
        <Box mt='1em'>
          <ReCAPTCHA
            ref={recaptchaRef}
            size='normal'
            theme='dark'
            sitekey={process.env.SITE_RECAPTCHA_KEY}
            onChange={() => setRecaptchaDone(true)}
          />
        </Box>
      )}
    </form>
  );
};

export default NewsletterForm;
