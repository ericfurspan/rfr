import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box, StyledInput, StyledButton } from '..';
import { encode } from '../../lib/helpers';

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

  const onReset = () => {
    setFormFields(formDefaults);
    setRecaptchaDone(false);
    recaptchaRef.current.reset();
  };

  const handleSubmit = (e) => {
    const form = e.target;
    const recaptchaValue = recaptchaRef.current.getValue();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...formFields,
      }),
    })
      .then(() => {
        onReset();
        alert('Thanks! Stay tuned for Newsletter content in your inbox');
      })
      .catch((error) => console.error(error));

    e.preventDefault();
  };

  return (
    <form
      name='newsletter'
      method='post'
      action='/'
      netlify-honeypot='botField'
      data-netlify='true'
      data-netlify-recaptcha='true'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='botField' onChange={onFieldChange} />
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
