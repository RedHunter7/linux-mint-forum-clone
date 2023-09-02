import { type ReactNode } from 'react'

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

export default Toolbar
