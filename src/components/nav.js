import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import useI18n from '../hooks/use-i18n'

const Nav = () => {
  const i18n = useI18n()
  const [hidden, setHidden] = useState(true)
  const data = useStaticQuery(graphql`
    {
      siteMetadata: allContentfulSiteMetadata {
        nodes {
          siteTitle
        }
        edges {
          node {
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  // console.log(data.siteMetadata.edges[0].node.logo.file.url)
  const imageUrl = data.siteMetadata.edges[0].node.logo.file.url
  console.log(imageUrl)

  return (
    <nav className="p-6 bg-white" aria-label="Main Navigation">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div>
          <Link
            to="/"
            className="flex flex-col items-center flex-shrink-0 mr-6"
          >
            <img
              src="//images.ctfassets.net/fbgn9bbu23ix/4peB0jSeKlCOrID2vCDlvy/3910eddbb80148115c9910ef0b0a006f/IronRange_logo.jpg"
              width="250"
            />
            <div className="text-xl font-semibold tracking-tight">
              {data.siteMetadata.nodes[0].siteTitle}
            </div>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => {
              setHidden(!hidden)
            }}
            aria-expanded={!hidden}
            className="flex items-center px-3 py-2 text-grey-800 border border-gray-800 rounded hover:text-blue hover:border-blue"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{i18n.get('menu')}</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            hidden ? 'hidden' : ''
          }`}
        >
          <li>
            <Link
              to="/contact"
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
            >
              {i18n.get('contact')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
