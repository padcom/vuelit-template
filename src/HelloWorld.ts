import { defineComponent, html } from 'vuelit'

import styles from './HelloWorld.css?inline'

defineComponent('hello-world', { styles, shadowRoot: true }, { counter: 0 }, ({ props }) => {
  function increment() {
    props.counter++
  }

  return () => html`
    <h2>Number of clicks: ${props.counter}</h2>
    <button @click="${increment}">Increment</button>
    <p>Now delete me and get to work!</p>
  `
})
