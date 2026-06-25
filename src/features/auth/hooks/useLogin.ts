import { useMutation } from '@tanstack/react-query'

interface LoginCredentials {
  email: string
  password: string
}

// TODO: replace with Firebase Auth when backend is ready
async function mockSignIn({ email, password }: LoginCredentials): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (email === 'admin@gmail.com' && password === '12345') {
    localStorage.setItem('mock_authed', 'true')
    return
  }
  throw new Error('Invalid email or password')
}

export function useLogin() {
  return useMutation<void, Error, LoginCredentials>({
    mutationFn: mockSignIn,
  })
}
