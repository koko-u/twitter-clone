import type { FC } from 'react'

import { css } from '@emotion/react'

import TwitterIcon from '@mui/icons-material/Twitter'
import SidebarOption from './SidebarOption'

import {
  Home,
  Search,
  NotificationsNone,
  Message,
  Bookmarks,
  FormatListBulleted,
  Person,
  MoreHoriz,
} from '@mui/icons-material'
import { Button } from '@mui/material'

const styles = {
  sidebar: css`
    border-right: 1px solid var(--twitter-background);
    flex: 0.2;
    min-width: 250px;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  `,
  sidebarTwitterIcon: css`
    color: var(--twitter-color);
    font-size: 30px;
    margin-left: 20px;
    margin-bottom: 20px;
  `,
  sidebarTweet: css`
    background-color: var(--twitter-color);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    height: 50px;
    margin-top: 20px;
  `,
}

const Sidebar: FC = () => {
  return (
    <div css={styles.sidebar}>
      {/* Twitter icon */}
      <TwitterIcon css={styles.sidebarTwitterIcon} />

      {/* Sidebar Options */}
      <SidebarOption title="Home" icon={Home}></SidebarOption>
      <SidebarOption title="Search Topics" icon={Search}></SidebarOption>
      <SidebarOption
        title="Notification"
        icon={NotificationsNone}
      ></SidebarOption>
      <SidebarOption title="Messages" icon={Message}></SidebarOption>
      <SidebarOption title="Bookmarks" icon={Bookmarks}></SidebarOption>
      <SidebarOption
        title="Your List"
        icon={FormatListBulleted}
      ></SidebarOption>
      <SidebarOption title="Profile" icon={Person}></SidebarOption>
      <SidebarOption title="More..." icon={MoreHoriz}></SidebarOption>

      {/* Tweet button */}
      <Button variant="outlined" css={styles.sidebarTweet}>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar
