import './paragraph.scss'

interface ParagraphProps {
  content: string
}
export default function Paragraph(props: ParagraphProps) {
  return (
      <p>
        {props.content}
      </p>
  );
}