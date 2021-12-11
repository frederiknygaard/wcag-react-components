export interface SkipToMainProps {
  classNames?: {
    link?: string
  }
  /** The text that is read by screen readers and visible when element is in focus */
  text: string
  /** The id of the container that the skip to main should go to. Defaults to "main" */
  id?: string
}

export const SkipToMain: React.FC<SkipToMainProps> = ({ text, id = 'main', classNames }) => {
  const {
    link: linkClass = 'py-4 px-8 text-center w-full fixed top-0 left-0 bg-gray-200 focus-ring-2 transform -translate-y-full focus:translate-y-0',
  } = classNames ?? {}
  return (
    <a className={linkClass} href={`#${id}`}>
      {text}
    </a>
  )
}
