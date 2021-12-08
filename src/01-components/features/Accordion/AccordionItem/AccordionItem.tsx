import { useState } from 'react'
import cx from 'classnames'
import { generateId } from '../../../../09-helpers/id'

export interface AccordionItemProps {
  label: string
  classNames: {
    accordionTrigger?: string
    accordionTriggerOpen?: string
    accordionContent?: string
    accordionContentOpen?: string
  }
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, label, classNames }) => {
  const {
    accordionTrigger:
      accordionTriggerClass = 'border-2 border-light-blue-500 text-black py-2 px-4 w-full text-left hover:bg-gray-10',
    accordionTriggerOpen: accordionTriggerOpenClass = '',
    accordionContent: accordionContentClass = 'py-2 px-4 border-t-2 border-light-blue-500 hidden',
    accordionContentOpen: accordionContentOpenClass = 'block',
  } = classNames ?? {}

  const [isOpen, setIsOpen] = useState(false)
  const [id] = useState(generateId())
  const clickHandler = () => setIsOpen(!isOpen)

  const triggerId = `trigger-${id}`
  const contentId = `content-${id}`

  return (
    <>
      <button
        className={cx(accordionTriggerClass, { [accordionTriggerOpenClass]: isOpen })}
        onClick={clickHandler}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={triggerId}
      >
        {label}
      </button>
      <div
        aria-labelledby={triggerId}
        id={contentId}
        role="region"
        className={cx(accordionContentClass, { [accordionContentOpenClass]: isOpen })}
      >
        {children}
      </div>
    </>
  )
}
