import React from 'react' // For making JSX work 😆

import { navBar } from '../api/navBar'
import { socialLinks } from '../api/socialLinks'

const { logo } = navBar

export const footerContent = {
  logo,
  content: [
    {
      title: `Address`,
      body: (
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        <><em>Nashik, India&nbsp;🇮🇳</em><br />WiFi? There I stay&nbsp;😉</>
      )
    },
    {
      title: `Mail me here ✉️`,
      body: (
        <><a href="mailto:hey@kumarabhirup.com" className="text-success">hey@kumarabhirup.com</a><br />I typically reply within a day.<br /></>
      )
    },
    {
      title: `Tech Stack`,
      body: (
        <>JavaScript, Node.JS, React.JS<br />GraphQL/Prisma<br />PHP, WordPress &amp; Laravel</>
      )
    }
  ],
  copyright: (
    <>Why copywriting?? Code is hosted on <a href="https://github.com/KumarAbhirup/kumarabhirup" className="text-success">GitHub</a>&nbsp;😎</>
  ),
  social: socialLinks.icons
}