import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projects"
      intro={
        <>
          Open source is a real passion and a way of thinking. My tools are used
          and trusted by <strong>thousands of developers</strong> all over the
          world.
        </>
      }
      projects={{
        laravel: {
          label: 'The PHP Framework for Web Artisans',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/how-laravel-development-company-can-help-you-build-an-enterprise-app-solution-2020/">
                  How laravel development company can help you build an
                  enterprise app solution 2020
                </a>
              </li>
            </>
          ),
        },
        'machine-learning': {
          label: 'Free themes for Gatsby',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/how-machine-learning-is-beneficial-for-retail-industry/">
                  How machine learning is beneficial for retail industry
                </a>
              </li>
            </>
          ),
        },
        'app-development': {
          label: 'Recommended by React Team',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/how-laravel-development-company-can-help-you-build-an-enterprise-app-solution-2020/">
                  How laravel development company can help you build an
                  enterprise app solution 2020
                </a>
              </li>
            </>
          ),
        },
        erp: {
          label: 'Design System Toolkit',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/how-laravel-development-company-can-help-you-build-an-enterprise-app-solution-2020/">
                  How laravel development company can help you build an
                  enterprise app solution 2020
                </a>
              </li>
            </>
          ),
        },
        shopify: {
          label: 'React UI Library',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/how-laravel-development-company-can-help-you-build-an-enterprise-app-solution-2020/">
                  How laravel development company can help you build an
                  enterprise app solution 2020
                </a>
              </li>
            </>
          ),
        },
        wordpress: {
          label: 'The world’s most popular website builder.',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/how-laravel-development-company-can-help-you-build-an-enterprise-app-solution-2020/">
                  How laravel development company can help you build an
                  enterprise app solution 2020
                </a>
              </li>
            </>
          ),
        },
      }}
    />
  )
}
