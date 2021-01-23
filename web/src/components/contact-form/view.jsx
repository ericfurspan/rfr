import React, { useState, useCallback } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
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
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [formFields, setFormFields] = useState(formDefaults);

  const onFieldChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormFields({ ...formFields, [target.name]: value });
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
    <Box flex col maxw='550px' m='auto' ta='initial'>
      <h2 css={Typography.responsiveTitle3}>Send us a message</h2>
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
              placeholder='Full Name'
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
              placeholder='Email Address'
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
              placeholder='Phone number (optional)'
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
              placeholder='Your message to us'
              onChange={onFieldChange}
              value={formFields.message}
              required
            />
          </StyledLabel>
        </Box>

        <GoogleReCaptcha onVerify={handleReCaptchaVerify} />

        <Box mt='2em' ta='right'>
          <StyledButton design='primary' type='submit' disabled={!recaptchaToken}>
            Send Message
          </StyledButton>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
