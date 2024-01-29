import "./form.scss"
import Container from "@/components/Container"
import Button from "@/components/Button"
import Heading from "@/components/Heading";
import {useState} from "react";
import Paragraph from "@/components/Paragraph";


export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };
  return (
      <Container>
        {formSubmitted ? (
            <Paragraph content={"Dziękujemy za wysłanie wiadomości"} />
        ) : (
            <>
              <Heading level={1} content="Skontaktuj się z nami" />
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Imię:
                  <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>
                  E-mail:
                  <input type="email" name="email" onChange={handleChange} />
                </label>
                <label>
                  Temat:
                  <input type="text" name="subject" onChange={handleChange} />
                </label>
                <label>
                  Treść wiadomości:
                  <textarea name="message" onChange={handleChange} />
                </label>

                <Button text="Wyślij wiadomość" onClick={() => {}} />
              </form>
            </>
        )}
      </Container>
  );
}