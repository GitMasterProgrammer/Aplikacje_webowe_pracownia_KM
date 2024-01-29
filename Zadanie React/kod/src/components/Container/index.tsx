import './container.scss'

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container(props: ContainerProps) {
  return (
    <div className='container'>
      {props.children}
    </div>
  )
}