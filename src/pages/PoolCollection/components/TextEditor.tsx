import React, {
  ChangeEvent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import GradientWrraper from 'src/components/GradientWrapper'
import { BaseProps } from 'src/types'
import { ReactComponent as ExpandIcon } from 'src/assets/icons/toolbar-expand.svg'
import { ReactComponent as TextIcon } from 'src/assets/icons/T-icon.svg'
import { RangeStatic, StringMap } from 'quill'

type Props = {
  placeholder?: string
} & BaseProps

const Size = Quill.import('formats/size')
Size.whitelist = ['text', 'title']
Quill.register(Size, true)

const formats = ['align', 'image', 'link', 'size', 'color']

const TextEditor = ({ className, placeholder }: Props) => {
  const [showToolbar, setShowToolbar] = useState(false)
  const [editorHtml, setEditorHtml] = useState('')

  const quillRef = useRef<ReactQuill>(null)
  const imgInputRef = useRef<HTMLInputElement>(null)

  const toogleToolbar = useCallback(() => setShowToolbar((prev) => !prev), [])
  const handleLogoIcon = useCallback(() => {
    imgInputRef.current && imgInputRef.current.click()
  }, [])
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
        <QuillToolbar show={showToolbar} editorRef={quillRef} />
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

const options: Option[] = [
  {
    value: 'text',
    icon: <TextIcon width={10} />,
  },
  {
    value: 'title',
    icon: <TextIcon />,
  },
]

type ToolbarProps = {
  show: boolean
  editorRef: RefObject<ReactQuill | null>
} & BaseProps

function QuillToolbar({ show, editorRef, className }: ToolbarProps) {
  const [currentFormat, setCurrentFormat] = useState<StringMap>({})
  const [savedSelection, setSavedSelection] = useState<RangeStatic>()

  const handleTextIconChange = useCallback((option: Option, selection: RangeStatic | null) => {
    if (editorRef.current && selection) {
      const instance = editorRef.current.getEditor()
      const { index, length }: RangeStatic = selection
      instance.focus()
      if (length === 0) {
        instance.format('size', option.value, 'user')
      } else {
        instance.formatText(index, length, 'size', option.value)
      }
      instance.setSelection(index, length)
    }
  }, [])

  useEffect(() => {
    if (editorRef.current) {
      const quillInstance = editorRef.current.getEditor()
      const callback = () => {
        const range = quillInstance.getSelection()
        if (range) {
          setSavedSelection((prev) => {
            if (prev) {
              range.index !== prev.index || range.length !== prev.length ? range : prev
            }
            return range
          })
          const formats = quillInstance.getFormat(range.index, range.length)
          setCurrentFormat(formats)
        }
      }

      quillInstance.on('editor-change', callback)

      return () => {
        quillInstance.off('editor-change', callback)
      }
    }
  }, [editorRef.current])

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
        <IconPicker
          options={options}
          selection={savedSelection}
          onOptionChange={handleTextIconChange}
          formats={currentFormat}
        />
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
interface Option {
  value: string
  icon: JSX.Element
}

interface IconPickerProps extends BaseProps {
  options: Option[]
  formats: StringMap
  selection?: RangeStatic
  onOptionChange: (option: Option, selection: RangeStatic | null) => void
}

const IconPicker: React.FC<IconPickerProps> = ({
  options,
  onOptionChange,
  formats,
  selection,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>(options[0])
  const [savedSelection, setSavedSelection] = useState<RangeStatic>()

  const openPicker = useCallback(() => {
    setSavedSelection(selection)
    setIsOpen((prev) => !prev)
  }, [selection])

  const handleOptionClick = useCallback(
    (option: Option) => {
      setSelectedOption(option)
      setIsOpen(false)
      if (savedSelection) {
        onOptionChange(option, savedSelection)
      }
    },
    [onOptionChange, savedSelection],
  )

  useEffect(() => {
    const option = options.find((option) => option.value === formats.size) || options[0]
    setSelectedOption(option)
  }, [formats.size])

  return (
    <div
      className={clsx(
        'ql-picker ql-icon-picker custom-icon-picker',
        { 'ql-expanded': isOpen },
        className,
      )}
    >
      <span
        className={clsx('ql-picker-label !flex justify-center items-center')}
        onClick={openPicker}
      >
        {selectedOption.icon}
      </span>
      <div className='ql-picker-options' aria-hidden={!isOpen}>
        {options.map((option) => (
          <span
            key={option.value}
            className={clsx('ql-picker-item !flex justify-center items-center', {
              '!hidden': selectedOption === option,
            })}
            onClick={(e) => {
              e.preventDefault()
              handleOptionClick(option)
            }}
          >
            {option.icon}
          </span>
        ))}
      </div>
    </div>
  )
}
