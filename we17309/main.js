import './style.css'

import { render } from './src/lib'
import app from './src/app'

document.addEventListener("DOMContentLoaded", () => {

  const page_component = document.querySelector("#app12");
  console.log(page_component)
  render(app, page_component)
})
