import { Button } from '@material-ui/core'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from '../service/firebase'

export default () => {
  const [user, loading, error] = useAuthState(getAuth())

  return (
    <header>
      {user && <Button>ログアウト</Button>}
      {user && <Button>Google ログイン</Button>}
    </header>
  )
}
