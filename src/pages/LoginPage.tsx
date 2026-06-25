import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLogin } from '@/features/auth/hooks/useLogin'
import logoDark from '@/assets/logo/logo-ditc-dark.svg'

export default function LoginPage() {
  const navigate = useNavigate()
  const { mutate: login, isPending } = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  function validate(): boolean {
    let valid = true
    setEmailError('')
    setPasswordError('')

    if (!email.trim()) {
      setEmailError('Email is required')
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Enter a valid email address')
      valid = false
    }

    if (!password) {
      setPasswordError('Password is required')
      valid = false
    }

    return valid
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setEmailTouched(true)
    setPasswordTouched(true)
    if (!validate()) return

    login(
      { email, password },
      {
        onSuccess: () => navigate('/dashboard'),
        onError: (error) => {
          setPasswordError(error.message)
        },
      },
    )
  }

  return (
    <div className="flex h-screen w-full">
      {/* Left half — border-r is the column divider */}
      <div className="flex w-1/2 flex-col border-r border-gray-200 bg-white px-16 py-12">
        {/* Fix 1: logo top-left, small, self-start prevents stretching */}
        <img src={logoDark} alt="DITC" className="h-8 w-auto self-start" />

        {/* Fix 2: "Admin" regular / "portal" bold, both black, ~72px */}
        <div className="flex flex-1 items-center">
          <h1 className="text-7xl leading-[1.1] text-black">
            <span className="block font-normal">Admin</span>
            <span className="block font-bold">portal</span>
          </h1>
        </div>

        <p className="text-sm text-secondary/60">
          © 2025 DITC. All rights reserved.
        </p>
      </div>

      {/* Fix 6: flex-col + justify-center for proper vertical centering */}
      <div className="flex w-1/2 flex-col items-center justify-center bg-white">
        <form onSubmit={handleSubmit} noValidate className="w-full max-w-sm px-4">
          {/* Fix 5: black, bold, text-3xl (~30px) */}
          <h2 className="mb-8 text-3xl font-bold text-black">
            Sign In Admin
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-1.5 block text-sm font-semibold text-black">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError('')
                }}
                onBlur={() => setEmailTouched(true)}
                placeholder="Email"
                className={`w-full rounded-hard border bg-white px-4 py-2.5 pr-10 text-base text-secondary outline-none placeholder:text-secondary/40 focus:border-primary focus:ring-0 ${
                  emailTouched && emailError ? 'border-primary' : 'border-gray-300'
                }`}
              />
              {emailTouched && emailError && (
                <AlertCircle
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                  size={18}
                />
              )}
            </div>
            {emailTouched && emailError && (
              <p className="mt-1.5 text-sm text-primary">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="mb-1.5 block text-sm font-semibold text-black">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError('')
                }}
                onBlur={() => setPasswordTouched(true)}
                placeholder="Password"
                className={`w-full rounded-hard border bg-white px-4 py-2.5 pr-10 text-base text-secondary outline-none placeholder:text-secondary/40 focus:border-primary focus:ring-0 ${
                  passwordTouched && passwordError ? 'border-primary' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary/40 hover:text-secondary"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {passwordTouched && passwordError && (
              <p className="mt-1.5 text-sm text-primary">{passwordError}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isPending}
            className="h-11 w-full rounded-soft bg-primary text-base font-medium text-white hover:bg-primary-hover disabled:opacity-40"
          >
            {isPending ? 'Signing in…' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  )
}
