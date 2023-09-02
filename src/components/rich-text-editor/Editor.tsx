import { type ReactNode, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Toolbar from './Toolbar'

const Editor = (): ReactNode => {
  const [value, setValue] = useState('')

  const modules = {
    toolbar: {
      container: '#toolbar'
    }
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'code-block'
  ]

  return (
    <div className="text-editor">
      <Toolbar/>
      <ReactQuill placeholder='Write your content here'
      modules={modules} formats={formats}
      theme="snow" value={value} onChange={setValue} />
    </div>
  )
}

export default Editor
