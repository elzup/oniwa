import { useState } from 'react'
import { Button, Input, Typography } from '@material-ui/core'
import firebase from 'firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

import { getAuth } from '../../service/firebase'
import 'firebase/firestore'

const userId = 'OegHtdhSLTtslN2L3YJn'

const fdb = getFirestore()

function TopPage() {
  const [user, loading, error] = useAuthState(getAuth())
  const [text, setText] = useState<string>('')

  return (
    <div>
      {actions?.docs.map(action => {
        return (
          <div>
            <Typography>{action.data().name}</Typography>
            <Input
              value={text}
              onChange={e => {
                setText(e.target.value)
              }}
            ></Input>
            <Button
              onClick={() => {
                console.log('log')
              }}
            >
              記録
            </Button>
          </div>
        )
      })}
    </div>
  )
}
export default TopPage
