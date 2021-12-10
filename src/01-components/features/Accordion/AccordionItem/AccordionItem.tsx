import { useState } from 'react'
import cx from 'classnames'
import { generateId } from '../../../../09-helpers/id'

export interface AccordionItemProps {
  label: string
  classNames?: {
    accordionItem?: string
    accordionTrigger?: string
    accordionTriggerOpen?: string
    accordionContent?: string
    accordionContentOpen?: string
  }
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, label, classNames }) => {
  const {
    accordionItem: accordionItemClass = 'border border-b-0 last:border-b border-light-blue-500',
    accordionTrigger: accordionTriggerClass = 'py-4 px-8 w-full text-left hover:bg-gray-10',
    accordionTriggerOpen: accordionTriggerOpenClass = '',
    accordionContent: accordionContentClass = 'border-t border-light-blue-500 py-4 px-8',
    accordionContentOpen: accordionContentOpenClass = '',
  } = classNames ?? {}

  const [isOpen, setIsOpen] = useState(false)
  const [id] = useState(generateId())
  const clickHandler = () => setIsOpen(!isOpen)

  const triggerId = `trigger-${id}`
  const contentId = `content-${id}`

  return (
    <li className={accordionItemClass}>
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
        className={cx(accordionContentClass, { hidden: !isOpen }, { [accordionContentOpenClass]: isOpen })}
      >
        {children}
      </div>
    </li>
  )
}
