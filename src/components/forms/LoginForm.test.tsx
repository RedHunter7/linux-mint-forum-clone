import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, it, afterEach, vi } from 'vitest'
import { LoginForm } from '.'
import userEvent from '@testing-library/user-event'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe('LoginForm component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginForm login={() => {}} />)
    const emailInput = screen.getByPlaceholderText('email')

    // Action
    await userEvent.type(emailInput, 'bejo@email.com')

    // Assert
    expect(emailInput).toHaveValue('bejo@email.com')
  })

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginForm login={() => {}} />)
    const passwordInput = screen.getByPlaceholderText('password')

    // Action
    await userEvent.type(passwordInput, 'passwordtest')

    // Assert
    expect(passwordInput).toHaveValue('passwordtest')
  })

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn()
    render(<LoginForm login={mockLogin} />)
    const emailInput = screen.getByPlaceholderText('email')
    await userEvent.type(emailInput, 'bejo@email.com')
    const passwordInput = screen.getByPlaceholderText('password')
    await userEvent.type(passwordInput, 'passwordtest')
    const loginButton = screen.getByRole('button', { name: 'Login' })

    // Action
    await userEvent.click(loginButton)

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'bejo@email.com',
      password: 'passwordtest'
    })
  })
})
