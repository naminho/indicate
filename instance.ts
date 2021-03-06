import { createInstance, addIndicators, addObservers } from './element'
import { observe } from './observer'
import { Instance, Elements, Options, directions } from './types'
import { isTable, log, Message, removeHideScrollbarStyle } from './helper'

export const instances = new Map<HTMLElement, Instance>()

export const getDOMNodes = (element: Elements) => {
  if (typeof element === 'string') {
    const elements = document.querySelectorAll(element)
    if (elements.length) {
      return elements
    }
  }

  if (element instanceof NodeList && element.length) {
    return element
  }

  // Second check to make sure element if attached to DOM.
  if (element instanceof HTMLElement && element.isConnected) {
    return [element]
  }

  log(Message.InvalidElement, { element })

  return false
}

export const initialize = (options: Options, element: HTMLElement) => {
  if (instances.get(element)) {
    log(Message.ExistingInstance, { element })
    return
  }

  const instance = createInstance(element, options)

  addIndicators(instance)
  addObservers(instance)

  instances.set(element, instance)

  observe(instance)
}

export const remove = (element: Elements) => {
  const elements = getDOMNodes(element)

  if (!elements) {
    return
  }

  elements.forEach((currentElement: HTMLElement) => {
    const instance = instances.get(currentElement)

    if (!instance) {
      log(Message.RemoveNoInstance, { element: currentElement })
      return
    }

    directions.forEach((direction) => {
      instance.indicator[direction].remove()
      instance.observer[direction].remove()
    })

    instance.intersectionObserver.disconnect()

    removeHideScrollbarStyle(instance.element, instance.innerWrapper)

    if (!instance.options.outerWrapper) {
      // Remove outer wrapper.
      instance.outerWrapper.replaceWith(
        ...Array.from(instance.outerWrapper.childNodes)
      )
    }

    if (!instance.options.innerWrapper) {
      // Remove inner wrapper.
      if (isTable(instance.element)) {
        instance.innerWrapper.replaceWith(
          ...Array.from(instance.innerWrapper.childNodes)
        )
      } else {
        const contents = instance.innerWrapper.innerHTML
        instance.innerWrapper.remove()
        currentElement.innerHTML = contents
      }
    }

    instances.delete(currentElement)
  })
}
