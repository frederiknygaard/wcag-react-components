import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { AccordionItem } from './AccordionItem'
import { Focus } from '../Focus'

export interface AccordionProps {
  classNames?: {
    /** Main div for the accordion */
    accordion?: string
    /** Wrapper for the accordion items */
    accordionWrapper?: string
  }
}

const Accordion: React.FC<AccordionProps> & { Item: typeof AccordionItem } = ({ children, classNames }) => {
  const { accordion: accordionClass, accordionWrapper: accordionWrapperClass } = classNames ?? {}
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([])

  const ulRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const { children: accordionLiItems = [] } = ulRef.current ?? {}
    const accordionButtonItems = Array.from(accordionLiItems).map((item) => item.querySelector('button')!)

    setFocusableElements(accordionButtonItems)
  }, [ulRef])

  return (
    <Focus focusableElements={focusableElements}>
      <div className={accordionClass}>
        <ul className={accordionWrapperClass} ref={ulRef}>
          {children}
        </ul>
      </div>
    </Focus>
  )
}

Accordion.Item = AccordionItem

export { Accordion }
