import { css } from '@emotion/react'
import Sidebar from './components/sidebar/Sidebar'

const styles = {
  divstyle: css`
    width: 100%;
  `,
}

function App() {
  return (
    <div css={styles.divstyle}>
      <Sidebar></Sidebar>
    </div>
  )
}

export default App
