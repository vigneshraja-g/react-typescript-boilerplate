import React, { useEffect, useRef, useState } from 'react'

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void
  onError?: (err: Error) => void
}

function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const { onCompleted, onError } = options
  useEffect(() => {
    setLoading(true)
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`../../assets/icons/${name}.svg`)
        ).default
        onCompleted?.(name, ImportedIconRef.current)
      } catch (err) {
        onError?.(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name, onCompleted, onError])

  return { error, loading, SvgIcon: ImportedIconRef.current }
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  onCompleted?: UseDynamicSVGImportOptions['onCompleted']
  onError?(): UseDynamicSVGImportOptions['onError']
}

const Icon = ({
  name,
  onCompleted,
  onError,
  ...rest
}: IconProps): JSX.Element | null => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  })
  if (error) {
    return <span>error.message</span>
  }
  if (loading) {
    return <span>Loading...</span>
  }
  if (SvgIcon) {
    return <SvgIcon fill="#eee" {...rest} />
  }
  return null
}

export default Icon
