declare interface HTMLElement {
  index(prop: number): number
  remove(): void
}

declare interface Array {
  remove(this: Element[]): void
  // Array<Element>.remove(...items: Element[]): number
}

// declare interface Object {
//   getPropertyNames(): string[]
// }

declare interface Function {
  debounce(wait: number, immediate?: boolean): () => void
}
