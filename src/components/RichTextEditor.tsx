import { type ReactNode, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const RichTextEditor = (): ReactNode => {
  const [value, setValue] = useState('')

  return <ReactQuill
  placeholder='Write your content here'
  theme="snow" value={value} onChange={setValue} />
}

export default RichTextEditor
