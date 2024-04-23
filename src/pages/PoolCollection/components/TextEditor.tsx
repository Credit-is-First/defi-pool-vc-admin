import React, { useCallback, useMemo, useState } from 'react'
import clsx from 'clsx'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import GradientWrraper from 'src/components/GradientWrapper'
import { BaseProps } from 'src/types'
import { ReactComponent as ExpandIcon } from 'src/assets/icons/toolbar-expand.svg'
import { ReactComponent as TextIcon } from 'src/assets/icons/T-icon.svg'

type Props = {
  placeholder?: string
} & BaseProps

const formats = ['font', 'align', 'image', 'link']

const TextEditor = ({ className, placeholder }: Props) => {
  const [showToolbar, setShowToolbar] = useState(false)
  const [editorHtml, setEditorHtml] = useState('')

  const toogleToolbar = useCallback(() => setShowToolbar((prev) => !prev), [])
  const handleTextToolbarIcon = useCallback(() => {}, [])

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {
          expand: toogleToolbar,
          customText: handleTextToolbarIcon,
        },
      },
    }
  }, [])

  const handleChange = useCallback((html: string) => {
    setEditorHtml(html)
  }, [])

  return (
    <GradientWrraper
      borderWidth={1}
      className={clsx('flex overflow-hidden rounded-[10px]', className)}
    >
      <div className='w-full flex flex-row-reverse sm:flex-col'>
        <QuillToolbar show={showToolbar} />
        <ReactQuill
          className='w-full flex flex-col flex-auto overflow-y-auto !p-3 sm:!pt-0'
          value={editorHtml}
          onChange={handleChange}
          placeholder={placeholder}
          modules={modules}
          formats={formats}
        />
      </div>
    </GradientWrraper>
  )
}

export default TextEditor

const Font = Quill.import('formats/font')
Font.whitelist = ['arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida']
Quill.register(Font, true)

type ToolbarProps = {
  show: boolean
} & BaseProps

function QuillToolbar({ show, className }: ToolbarProps) {
  return (
    <div
      id='toolbar'
      className={clsx(className, 'gap-2 !flex-col !justify-start sm:!flex-row sm:!justify-end')}
    >
      <span className='ql-formats sm:!hidden'>
        <button className='ql-expand'>
          <ExpandIcon fill={show ? 'white' : '#5a5a5a'} />
        </button>
      </span>
      <span className={clsx({ '!hidden': !show }, 'ql-formats sm:!inline-block')}>
        <button className='ql-customText'>
          <TextIcon />
        </button>
      </span>
      <span className={clsx({ '!hidden': !show }, 'ql-formats sm:!inline-block')}>
        <select className='ql-align' />
      </span>
      <span className={clsx({ '!hidden': !show }, 'ql-formats sm:!inline-block')}>
        <button className='ql-link' />
      </span>
      <span className={clsx({ '!hidden': !show }, 'ql-formats sm:!inline-block')}>
        <button className='ql-image' />
      </span>
    </div>
  )
}
