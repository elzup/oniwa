import { useState } from 'react'
import { Button, Input, Typography } from '@material-ui/core'
import firebase from 'firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

import { initializeFirebase } from '../../service/firebase'
import 'firebase/firestore'

const userId = 'OegHtdhSLTtslN2L3YJn'

initializeFirebase()
const fdb = firebase.firestore()

function TopPage() {
  const [user, loading, error] = useAuthState(firebase.auth())
  const [text, setText] = useState<string>('')

  return (
    <div>ge0j
      pa
    </div>
  )
}
export default TopPage
