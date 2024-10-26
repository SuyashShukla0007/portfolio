import { Linkedin,Mail,Twitter } from 'lucide-react'
export const Contacts = () => {
  return (
    <div className='flex gap-4 ml-3 cursor-pointer'>
      <a href="">
      <Linkedin color='#FFCD6D' />
      </a>
      <a href="">
      <Twitter   color='#FFCD6D' />
      </a>
      <a href="">
      <Mail  color='#FFCD6D' />
      </a>
    </div>
  )
}
