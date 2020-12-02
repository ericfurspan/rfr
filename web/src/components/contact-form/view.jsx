import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box, StyledLabel, StyledInput, StyledButton } from '..';
import { Typography } from '../typography';
import { encode } from '../../lib/helpers';

const formDefaults = {
  name: '',
  emailAddress: '',
  phone: '',
  message: '',
  botField: '',
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
        alert('Thanks for reaching out! We will get back to you soon.');
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
    <Box flex col maxw='550px'>
      <h2 css={Typography.responsiveTitle2}>Send us a message</h2>
      <form
        name='contact'
        method='POST'
        netlify-honeypot='botField'
        data-netlify='true'
        data-netlify-recaptcha='true'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <input type='hidden' name='botField' onChange={onFieldChange} />

        <Box>
          <StyledLabel>
            Name
            <StyledInput
              type='text'
              name='name'
              id='name'
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
              type='email'
              name='emailAddress'
              id='emailAddress'
              placeholder='Email'
              onChange={onFieldChange}
              value={formFields.emailAddress}
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
              id='phone'
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
              id='message'
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
