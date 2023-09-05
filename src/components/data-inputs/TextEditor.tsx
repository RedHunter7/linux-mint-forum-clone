import { type ReactNode, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Toolbar = (): ReactNode => (
  <div id="toolbar">
    <select
      className="ql-header"
      defaultValue={''}
      onChange={(e) => {
        e.persist()
      }}
    >
      <option value="1"></option>
      <option value="2"></option>
      <option value=''></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-blockquote"></button>
    <button className="ql-code-block"></button>
    <button className="ql-list" value='ordered'></button>
    <button className="ql-list" value='bullet'></button>
    <button className="ql-link"></button>
  </div>
)

export const TextEditor = (): ReactNode => {
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
      <ReactQuill
        placeholder="Write your content here"
        modules={modules}
        formats={formats}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  )
}
