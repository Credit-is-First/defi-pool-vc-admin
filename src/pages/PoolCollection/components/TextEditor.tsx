import React, { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react'
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

const formats = ['align', 'image', 'link']

const TextEditor = ({ className, placeholder }: Props) => {
  const [showToolbar, setShowToolbar] = useState(false)
  const [editorHtml, setEditorHtml] = useState('')
  const quillRef = useRef<ReactQuill>(null)
  const imgInputRef = useRef<HTMLInputElement>(null)

  const toogleToolbar = useCallback(() => setShowToolbar((prev) => !prev), [])
  const handleLogoIcon = useCallback(() => {
    imgInputRef.current && imgInputRef.current.click()
  }, [])
  const handleText = useCallback(() => {}, [])
  const insertImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0 &&
      quillRef.current
    ) {
      const file = e.currentTarget.files[0]

      const formData = new FormData()
      formData.append('file', file)
      const quill = quillRef.current.getEditor()
      quill.focus()

      const range = quill.getSelection()
      const position = range ? range.index : 0
      const Image = Quill.import('formats/image')
      const url = window.URL.createObjectURL(file)
      Image.sanitize = (url: string) => url

      quill.insertEmbed(position, 'image', url)
      quill.setSelection(position + 1, 1)
    }
  }, [])

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {
          expand: toogleToolbar,
          logo: handleLogoIcon,
          text: handleText,
        },
      },
    }
  }, [])

  const handleChange = useCallback((html: string) => {
    setEditorHtml(html)
  }, [])

  return (
    <GradientWrraper borderWidth={1} className={clsx('flex rounded-[10px]', className)}>
      <div className='w-full flex flex-row-reverse sm:flex-col'>
        <QuillToolbar show={showToolbar} />
        <input
          type='file'
          accept='image/*'
          ref={imgInputRef}
          style={{ display: 'none' }}
          onChange={insertImage}
        />
        <div className='relative w-full flex-auto'>
          <ReactQuill
            ref={quillRef}
            className='absolute inset-0 !p-0'
            value={editorHtml}
            onChange={handleChange}
            placeholder={placeholder}
            modules={modules}
            formats={formats}
          />
        </div>
      </div>
    </GradientWrraper>
  )
}

export default TextEditor

type ToolbarProps = {
  show: boolean
} & BaseProps

function QuillToolbar({ show, className }: ToolbarProps) {
  return (
    <div
      id='toolbar'
      className={clsx(
        className,
        'gap-2 !flex-col !justify-start sm:!flex-row sm:!justify-end !pb-0 items-center',
      )}
    >
      <span className='ql-formats sm:!hidden'>
        <button className='ql-expand !flex justify-center'>
          <ExpandIcon fill={show ? 'white' : '#5a5a5a'} />
        </button>
      </span>
      <span className={clsx({ '!hidden': !show }, 'ql-formats sm:!inline-block')}>
        <button className='ql-text !flex justify-center'>
          <TextIcon width={10} />
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
      <span className={clsx({ '!hidden': !show }, 'ql-formats sm:!inline-block !pt-[1px]')}>
        <button className='ql-logo !w-[22px] !h-[20px] text-[12px] text-disactive !border-solid !border-[1px] rounded-[3px] !p-0'>
          Lg
        </button>
      </span>
    </div>
  )
}
