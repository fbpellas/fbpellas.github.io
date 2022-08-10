import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EMAIL } from '../constants';

export interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = (_props) => {
  const [emailBody, setEmailBody] = React.useState('');
  const [emailSubject, setEmailSubject] = React.useState('');
  const buttonRequest = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return <Form className="form">
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Email form</Form.Label>
      <Form.Text className="text-muted">{`Or send me an email directly at ${EMAIL}`}</Form.Text>
      <br />
      <Form.Label>Subject</Form.Label>
      <Form.Control
        onChange={(e) => {
          setEmailSubject(e.target.value);
        }}
        type="text"
        placeholder="Subject"
      />
      <br />
      <Form.Label>Body</Form.Label>
      <Form.Control
        onChange={(e) => {
          setEmailBody(e.target.value);
        }}
        as="textarea"
        rows={10}
        placeholder="Your message"
      />
    </Form.Group>
    <br />
    <Button
      onClick={() => {
        window.open(
          buttonRequest
        );
      }}
      variant="warning"
      type="submit"
    >
      Send
    </Button>
  </Form>
}

export { ContactForm }