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
                  How Machine Learning Is Beneficial For Retail Industry
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
                <a href="https://www.ncodetechnologies.com/5-ways-to-make-your-mobile-application-more-engaging/">
                  5 Ways to make your mobile application more engaging
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/5-ways-to-make-your-mobile-application-more-engaging-2/">
                  5 Ways to make your mobile application more engaging 2
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/why-go-for-grocery-development-apps-in-covid-19/">
                  Why go for grocery development apps in COVID-19
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/why-flutter-mobile-development-is-the-best-option-for-startups/">
                  Why flutter mobile development is the best option for startups
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
