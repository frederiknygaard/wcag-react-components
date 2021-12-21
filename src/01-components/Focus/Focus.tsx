import { useEffect } from 'react'

export interface FocusProps {
  /** An array of the focusable elements */
  focusableElements: HTMLElement[]
}

// TODO: Add feature of finding focusable element in component, instead of passing as prop
export const Focus: React.FC<FocusProps> = ({ children, focusableElements }) => {
  useEffect(() => {
    const clickHandler = (event: KeyboardEvent) => {
      // TODO: Is document.activeElement always an HTMLElement?
      const activeElement = document.activeElement as HTMLElement
      const anyItemIsFocus = activeElement ? focusableElements.includes(activeElement) : false

      const firstItem = focusableElements[0]
      const lastItem = focusableElements[focusableElements.length - 1]

      const activeItemIndex = focusableElements?.indexOf(activeElement)

      switch (event.key) {
        case 'ArrowDown': {
          // If not any item is in focus, arrow down is ignored
          if (!anyItemIsFocus) return
          // If the last item is in focus, focus the first element
          if (lastItem === activeElement) firstItem?.focus()
          // Else, focus the next element
          else focusableElements?.[activeItemIndex + 1]?.focus()

          break
        }

        case 'ArrowUp': {
          // If not any item is in focus, arrow up is ignored
          if (!anyItemIsFocus) return
          // If the first item is in focus, focus the last element
          if (firstItem === activeElement) lastItem?.focus()
          // Else focus the previous element
          else focusableElements?.[activeItemIndex - 1]?.focus()

          break
        }

        case 'Home': {
          // If not any item is in focus, home key is ignored
          if (!anyItemIsFocus) return
          // Else focus the first element
          firstItem?.focus()

          break
        }

        case 'End': {
          // If not any item is in focus, end key is ignored
          if (!anyItemIsFocus) return
          // Else focus the last element
          lastItem?.focus()

          break
        }
      }
    }

    window.addEventListener('keydown', clickHandler)

    return () => window.removeEventListener('keydown', clickHandler)
  }, [focusableElements])

  return <>{children}</>
}
