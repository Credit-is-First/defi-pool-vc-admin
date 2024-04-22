import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import GradientWrraper from 'src/components/GradientWrapper'
import { BaseProps } from 'src/types'

type Props = {
  placeholder?: string
} & BaseProps

const modules = {
  toolbar: [[{ font: [] }], [{ align: [] }], ['image', 'link']],
}

const formats = ['font', 'align', 'image', 'link']

const TextEditor = ({ className, placeholder }: Props) => {
  const [editorHtml, setEditorHtml] = useState('')

  const handleChange = useCallback((html: string) => {
    setEditorHtml(html)
  }, [])

  return (
    <GradientWrraper
      borderWidth={1}
      className={clsx('flex overflow-hidden rounded-[10px]', className)}
    >
      <ReactQuill
        className='w-full flex flex-col'
        value={editorHtml}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
      />
    </GradientWrraper>
  )
}

export default TextEditor
