import { useState } from 'react'
import Container from "@/components/Container"
import Button from "@/components/Button"
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default function Clicker() {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  };

  return (
      <Container>
          <Heading level={1} content="Poklikaj mnie" />
          <Paragraph content={`Kliknięto ${clicks} raz(y)`} />
          <Button text="Kliknij mnie" onClick={handleClick} />
      </Container>
  );
}
