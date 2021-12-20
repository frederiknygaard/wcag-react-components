import { useState } from 'react'
import cx from 'classnames'
import { generateId } from '../../../09-helpers/id'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface AccordionItemProps {
  /** Label for the trigger */
  label: string
  /** The heading level of the accordion item trigger */
  headingLevel?: HeadingLevel
  classNames?: {
    accordionItem?: string
    accordionTrigger?: string
    accordionTriggerOpen?: string
    accordionContent?: string
    accordionContentOpen?: string
  }
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, label, headingLevel = 'h2', classNames }) => {
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

  const HeadingTag = `${headingLevel}` as keyof JSX.IntrinsicElements

  return (
    <li className={accordionItemClass}>
      <HeadingTag>
        <button
          className={cx(accordionTriggerClass, { [accordionTriggerOpenClass]: isOpen })}
          onClick={clickHandler}
          aria-expanded={isOpen}
          aria-controls={contentId}
          id={triggerId}
        >
          {label}
        </button>
      </HeadingTag>
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
