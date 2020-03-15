import dynamic from 'next/dynamic'
import App from '../components/App'

const LoginPage = dynamic(() => import('../components/LoginPage'), {
  ssr: false,
})

export default () => {
  return (
    <App>
      <LoginPage />
    </App>
  )
}
