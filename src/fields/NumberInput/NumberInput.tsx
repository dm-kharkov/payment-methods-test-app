import type { ReactElement, ChangeEvent } from 'react'

import { Controller } from 'react-hook-form'

import TextField from '@/components/TextField'

import useFormContext from '@/hooks/useFormContext'

const NumberInput = ({
  name,
  label,
  maxLength,
  isPassword = false,
  helperText
}: NumberInputProps): ReactElement => {

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          type={isPassword ? 'password' : 'text'}
          error={!!fieldState.error}
          helperText={fieldState.error
            ? fieldState.error.message
            : helperText
          }
          slotProps={{
            inputLabel: {
              shrink: true
            }
          }}
          inputProps={{
            maxLength,
            inputMode: 'numeric',
            pattern: '[0-9]*'
          }}

          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/[^0-9]/g, '')

            field.onChange(value)
          }}
        />
      )}
    />
  )
}

interface NumberInputProps {
  name: string;
  label: string;
  maxLength: number;
  isPassword?: boolean;
  helperText?: string;
}

export default NumberInput 