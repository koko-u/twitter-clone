import { css } from '@emotion/react'
import { SvgIcon } from '@mui/material'

const styles = {
  sidebarOption: css`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #e8f5fe;
      border-radius: 15px;
      color: var(--twitter-color);
      transition: color 0.1s ease-out;
    }

    h2 {
      font-size: 20px;
      margin-right: 20px;
      font-weight: 800;
    }
  `,
  iconStyle: css`
    padding-right: 20px;
  `,
}

type Props = {
  title: string
  icon: typeof SvgIcon
}

const SidebarOption = (props: Props) => {
  return (
    <div css={styles.sidebarOption}>
      <props.icon css={styles.iconStyle} />
      <h2>{props.title}</h2>
    </div>
  )
}

export default SidebarOption
