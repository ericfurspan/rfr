import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box, StyledLabel, StyledInput, StyledButton } from '..';
import { Typography } from '../typography';

const formDefaults = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [recaptchaDone, setRecaptchaDone] = useState(false);
  const [formFields, setFormFields] = useState(formDefaults);
  const recaptchaRef = useRef();

  const onFieldChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormFields({ ...formFields, [target.name]: value });
  };

  const onReset = () => {
    setFormFields(formDefaults);
    setRecaptchaDone(false);
    recaptchaRef.current.reset();
  };

  console.log(process.env.SITE_RECAPTCHA_KEY);

  return (
    <Box flex col maxw='550px'>
      <h2 css={Typography.responsiveTitle2}>Send us a message</h2>
      <form
        name='contact'
        method='POST'
        netlify-honeypot='bot-field'
        data-netlify-recaptcha='true'
        data-netlify='true'
      >
        <input type='hidden' name='bot-field' />
        <Box>
          <StyledLabel>
            Name
            <StyledInput
              type='text'
              name='name'
              placeholder='Your Name'
              onChange={onFieldChange}
              value={formFields.name}
              required
            />
          </StyledLabel>
        </Box>

        <Box>
          <StyledLabel>
            Email
            <StyledInput
              name='email'
              type='email'
              placeholder='Email'
              onChange={onFieldChange}
              value={formFields.email}
              required
            />
          </StyledLabel>
        </Box>

        <Box>
          <StyledLabel>
            Phone
            <StyledInput
              type='tel'
              name='phone'
              placeholder='Phone'
              onChange={onFieldChange}
              value={formFields.phone}
            />
          </StyledLabel>
        </Box>

        <Box>
          <StyledLabel>
            Message
            <StyledInput
              type='textarea'
              name='message'
              placeholder='Start a conversation and we will get back to you'
              onChange={onFieldChange}
              value={formFields.message}
              required
            />
          </StyledLabel>
        </Box>

        {process.env.SITE_RECAPTCHA_KEY && (
          <Box flex col ai='flex-end'>
            <ReCAPTCHA
              ref={recaptchaRef}
              size='normal'
              sitekey={process.env.SITE_RECAPTCHA_KEY}
              onChange={() => setRecaptchaDone(true)}
            />
          </Box>
        )}

        <Box mt='2em'>
          <StyledButton design='secondary' type='reset' onClick={onReset}>
            Reset
          </StyledButton>
          <StyledButton design='primary' type='submit' disabled={!recaptchaDone} ml='0.75em'>
            Send Message
          </StyledButton>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
