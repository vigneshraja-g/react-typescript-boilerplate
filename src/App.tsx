import { Counter } from './Counter'
import SVGI from 'icons/svg1.svg'
import Icon from './components/IconLoader/IconLoader'

export const App = () => {
  return (
    <>
      <SVGI />
      <h1>React TypeScript Webpack Starter Template Vignesh</h1>
      <Counter />
      <Icon name="svg1" fill="blue" />
    </>
  )
}
