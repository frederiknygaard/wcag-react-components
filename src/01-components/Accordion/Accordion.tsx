import { AccordionItem } from './AccordionItem'

export interface AccordionProps {
  classNames?: {
    accordion?: string
    accordionWrapper?: string
  }
}

const Accordion: React.FC<AccordionProps> & { Item: typeof AccordionItem } = ({ children, classNames }) => {
  const { accordion: accordionClass, accordionWrapper: accordionWrapperClass } = classNames ?? {}

  return (
    <div className={accordionClass}>
      <ul className={accordionWrapperClass}>{children}</ul>
    </div>
  )
}

Accordion.Item = AccordionItem

export { Accordion }
