import { ReactNode } from 'react'
import { Global, Theme, ThemeProvider } from '@emotion/react'
import localFont from 'next/font/local'

import resetStyle from 'resetStyle'
import COLOR from 'constants/color'
import styled from '@emotion/styled'
import Flex from 'components/Flex'

const THEME: Theme = {
  color: COLOR,
}

const pretandardFont = localFont({
  src: 'fonts/PretendardVariable.woff2',
})

type Props = {
  children: ReactNode
}

const GlobalStyleProvider = ({ children }: Props) => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${pretandardFont.style.fontFamily};
        }
      `}</style>
      <Global styles={resetStyle} />
      <ThemeProvider theme={THEME}>
        <Frame align="center" justify="center">
          {children}
        </Frame>
      </ThemeProvider>
    </>
  )
}

export default GlobalStyleProvider

const Frame = styled(Flex)`
  padding: 20px;
`
