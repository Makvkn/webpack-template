import './styles.css'
import IMAGE from './react.svg'
import ClickCounter from './ClickCounter'

export const App = () => {
    return (
        <>
            <h1>
                React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{' '}
                {process.env.name}
            </h1>
            <img src={IMAGE} alt="React Logo" width="300" height="200" />
            <ClickCounter />
        </>
    )
}

// 'plugin:import/errors',
// 'plugin:import/warnings',
// 'plugin:import/typescript',
// 'plugin:jsx-a11y/recommended',
// 'plugin:eslint-comments/recommended',
// 'prettier/@typescript-eslint',
// 'plugin:prettier/recommended',
