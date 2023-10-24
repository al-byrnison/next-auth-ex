'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Loader from './Loader'

export default function ButtonAuth() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <Loader />
  }

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className='btn btn-danger'
        >
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className='btn btn-primary'
      >
        Sign in
      </button>
    </>
  )
}
