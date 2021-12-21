import { HTMLAttributeAnchorTarget } from 'react'

export type Link = {
  href: string
  children: string | React.ReactNode
  target?: HTMLAttributeAnchorTarget | undefined
}

export interface BreadcrumbProps {
  /**
   * The label of the nav that wraps the breadcrumb items.
   * Should describe that the type of navigation is a breadcrumb
   */
  ariaLabel: string
  /** The breadcrumb items */
  items: Link[]
  /** Should the last item be a text? */
  lastItemAsText?: boolean
  classNames?: {
    /** The nav-tag and main wrapper for the breadcrumb */
    navigation?: string
    /** The ol-tag item */
    list?: string
    /** The li-tag for each breadcrumb */
    listItem?: string
    /** The a-tag inside the li items for each breadcrumb */
    link?: string
    /** if 'lastItemAsText' is true, the last item is recieving this classname */
    text?: string
  }
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  ariaLabel = 'Breadcrumb',
  items,
  lastItemAsText = true,
  classNames,
}) => {
  const {
    navigation: navigationClass,
    list: listClass = 'flex -mx-2',
    listItem: listItemClass = 'mx-2 arrow-after flex ',
    link: linkClass = 'mr-4 underline opacity-60 hover:opacity-100',
    text: textClass = '',
  } = classNames ?? {}

  return (
    <nav aria-label={ariaLabel} className={navigationClass}>
      <ol className={listClass}>
        {items &&
          items.map((item, index) => (
            <li className={listItemClass} key={index}>
              {lastItemAsText && index === items.length - 1 ? (
                <p className={textClass}>{item.children}</p>
              ) : (
                <a href={item.href} target={item.target} className={linkClass}>
                  {item.children}
                </a>
              )}
            </li>
          ))}
      </ol>
    </nav>
  )
}
