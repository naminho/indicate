export enum Direction {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom',
}

export const directions: Direction[] = [
  Direction.left,
  Direction.right,
  Direction.top,
  Direction.bottom,
]

export const isHorizontal = (direction: Direction) =>
  direction === Direction.left || direction === Direction.right

export const isVertical = (direction: Direction) =>
  direction === Direction.top || direction === Direction.bottom

export const isStart = (direction: Direction) =>
  direction === Direction.top || direction === Direction.left

export const isEnd = (direction: Direction) =>
  direction === Direction.right || direction === Direction.bottom

export type Elements = string | Element | HTMLElement | NodeListOf<Element>

export interface Theme {
  indicator: (direction: Direction, options: Options) => CSSProperties
  arrow: (direction: Direction) => CSSProperties
  hide: (indicator: HTMLSpanElement) => void
  show: (indicator: HTMLSpanElement) => void
}

type ArrowPosition = 'start' | 'center' | 'end'

// Omit passing option-props to children in React component.
export const pluginOptionsProperties = [
  'arrow',
  'color',
  'width',
  'click',
  'hideScrollbar',
]

// Unpublished, required for React plugin.
interface UnpublishedOptions {
  outerWrapper?: HTMLElement
  innerWrapper?: HTMLElement
}

export interface ClickOptions {
  denominator?: number
}

export interface ArrowOptions {
  position?: ArrowPosition
  image?: string
  markup?: Node | string
}

// User facing options.
export type PluginOptions = {
  arrow?: boolean | ArrowOptions
  color?: string
  width?: string
  click?: boolean | ClickOptions
  hideScrollbar?: boolean
} & UnpublishedOptions

// Internal options extended with defaults.
export type Options = {
  arrow: false | ArrowOptions
  theme: Theme
  color: string
  width: string
  click: false | ClickOptions
  hideScrollbar: boolean
} & UnpublishedOptions

export interface Instance {
  outerWrapper: HTMLDivElement
  innerWrapper: HTMLDivElement
  element: HTMLElement
  indicator: {
    left: HTMLSpanElement
    right: HTMLSpanElement
    top: HTMLSpanElement
    bottom: HTMLSpanElement
  }
  observer: {
    left: HTMLSpanElement
    right: HTMLSpanElement
    top: HTMLSpanElement
    bottom: HTMLSpanElement
  }
  intersectionObserver: IntersectionObserver
  options: Options
}

export interface Visibility {
  left: boolean
  right: boolean
  top: boolean
  bottom: boolean
}

// See https://stackoverflow.com/a/52876098/3185545 if nesting required.
export type CSSProperties = {
  [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P]
}
