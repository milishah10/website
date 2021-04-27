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
                <a href="https://www.ncodetechnologies.com/blog/how-laravel-development-company-can-help-you-build-an-enterprise-app-solution-2020/">
                  How Laravel development company can help you build an
                  enterprise app solution 2020
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/laravel-web-development-for-enterprise-apps/">
                  Laravel web development for enterprise apps
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/compelling-reasons-to-choose-laravel-web-development-company/">
                  Compelling reasons to choose Laravel web development company
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-ai-can-enhance-the-laravel-web-development/">
                  How AI can enhance the Laravel web development
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-the-laravel-framework-is-highly-preferable-to-strengthen-business-growth/">
                  Why Laravel framework is highly preferable to strengthen
                  business growth
                </a>
              </li>
            </>
          ),
        },
        'machine-learning': {
          label: 'Automates Analytical Model Building',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-machine-learning-is-beneficial-for-retail-industry/">
                  How Machine Learning Is Beneficial For Retail Industry
                </a>
              </li>
            </>
          ),
        },
        'app-development': {
          label: 'Process of Writing Software That Works on a Mobile Device',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/5-ways-to-make-your-mobile-application-more-engaging/">
                  5 Ways to make your mobile application more engaging
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/5-ways-to-make-your-mobile-application-more-engaging-2/">
                  5 Ways to make your mobile application more engaging 2
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/why-go-for-grocery-development-apps-in-covid-19/">
                  Why go for grocery development apps in COVID-19
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-flutter-can-bring-you-the-credibility-to-your-business-with-its-features/">
                  Why flutter mobile development is the best option for startups
                </a>
              </li>
            </>
          ),
        },
        erp: {
          label: 'Enterprise Resource Planning',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/why-erp-is-essential-for-manufacturing-operations/">
                  Why ERP is essential for manufacturing operations
                </a>
              </li>
            </>
          ),
        },
        shopify: {
          label: 'The All-in-one Commerce Platform to Build a Business',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/The+Call+for+Customize+Checkout+Page+for+Shopify+Web+Development">
                  The call for Customize Checkout page for Shopify web
                  Development
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/managing-multiple-custom-designs-with-shopify-online-poster-design-tool/">
                  Managing multiple custome designs with shopify online poster
                  design tool
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/shopify-plus-serving-international-brands-with-its-stand-out-features/">
                  Shopify plus serving international brands with its stand out
                  features
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/customize-banner-design-ultimate-solution-provided-by-shopify-development-company/">
                  Customize banner design ultimate solution provided by Shopify
                  development company
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/unknown-facts-of-shopify-ecommerce-store-sevelopment/">
                  Unknown facts of shopify e-commerce store development
                </a>
              </li>
            </>
          ),
        },
        wordpress: {
          label: 'The World’s Most Popular Website Builder',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-wordpress-web-stories-plugins-could-get-you-on-the-today-show/">
                  How Wordpress web stories plugins could get you on the today
                  show
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/the-amendments-of-the-wordpress-new-version-5-5/">
                  The amendments of Wordpress new version 5.5
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-to-develop-a-wordpress-website-as-a-saas/">
                  How to develop a Wordpress website as a saas
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/things-to-consider-in-wordpress-website-optimization/">
                  Things to consider in Wordpress website optimization
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/perks-you-can-get-with-wordpress-web-development-company/">
                  Perks you can get with Wordpress web development company
                </a>
              </li>
              <li>
                <a href="https://www.wordpresssupporthub.com/">
                  FAQ - Wordpress support hub
                </a>
              </li>
            </>
          ),
        },
        'web-development': {
          label: 'Work Involved in Developing a Web Site',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/magnificent-php-web-development-trends-2020-to-endorse/">
                  Magnificent PHP web development trends 2020 to endorse
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/the-importance-of-python-programming-language/">
                  Importance of python programming language
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/importance-of-page-speed-in-ecommerce-conversion-rate/">
                  Importance of page speed in e-commmerce conversion rate
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-web-development-can-help-your-business-in-coronavirus/">
                  How web development can help your business in coronavirus
                </a>
              </li>
            </>
          ),
        },
        iot: {
          label: 'Internet of Things',
          description: (
            <>
              <li>
                <a href="https://www.esparkinfo.com/node-js-for-iot.html/">
                  Nodejs for IoT
                </a>
              </li>
            </>
          ),
        },
        'digital-marketing': {
          label: 'Component of Marketing That Utilizes Internet',
          description: (
            <>
              <li>
                <a href="http://www.smsidea.biz/Service/SMM-services/">
                  Web site content - Social media Marketing services
                </a>
              </li>
              <li>
                <a href="http://www.smsidea.biz/Service/SMO-services/">
                  Web site content - SMO services
                </a>
              </li>
              <li>
                <a href="http://wizardseohub.com/services/social-media-optimization//">
                  Web site content - Social Media Optimization services
                </a>
              </li>
            </>
          ),
        },
        pwa: {
          label: 'Progressive Web App Development',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/insights-of-progressive-web-app-development/">
                  Insights of progressive web app development
                </a>
              </li>
            </>
          ),
        },
        devops: {
          label: 'Where The World Meets DevOps',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/devops-software-development-services-survivor-of-covid-19/">
                  Devops software development services survivor of COVID-19
                </a>
              </li>
            </>
          ),
        },
        'CRM': {
          label: 'Customer Relationship Management',
          description: (
            <>
              <li>
                <a href="https://solvios.technology/things-to-check-for-successful-salesforce-integration/">
                Things to check for Successful Salesforce Integration
                </a>
              </li>
            </>
          ),
        },
        magento: {
          label: 'Leading Platform for Open Commerce Innovation',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/ncode-technologies-as-a-guide-for-magento-2-4/">
                  NCode technologies as a guide for Magento 2.4
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/magento-extension-to-stand-ahead-of-the-competition/">
                  Magento extension to stand ahead of the competition
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-magento-can-accelerate-your-b2b-business-at-the-global-level/">
                  How Magento can accelerate your B2B business at the global
                  level
                </a>
              </li>
            </>
          ),
        },
        'nop-commerce': {
          label: 'Most Popular ASP.NET Shopping Cart',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-nopcommerce-development-services-your-go-to-choice-for-b2b-development/">
                  How NopCommerce development services your go to choice for B2B
                  development
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/the-signification-of-multi-vendor-nopcommerce-e-commerce-web-store/">
                  The signification of multi vendor NopCommerce e-commerce web
                  store
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/how-to-decrease-the-cart-abandonment-rate-for-your-nopcommerce-website/">
                  How to decrease the cart abandonment rate for your NopCommerce
                  website
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/nopcommerce-4-3-the-newer-the-better/">
                  NopCommerce 4.3 the newer the better
                </a>
              </li>
            </>
          ),
        },
        'woo-commerce': {
          label: 'Open-source E-Commerce Plugin for WordPress',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/woocommerce-plugins-to-choose-for-better-audience-engagement/">
                  Woocommerce plugins to choose for better audience engagement
                </a>
              </li>
            </>
          ),
        },
        codeigniter: {
          label: 'Open-source Software Rapid Development Web Framework',
          description: (
            <>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/death-of-codeigniter-web-development-is-that-true/">
                  Death of Codeigniter web development is that true
                </a>
              </li>
              <li>
                <a href="https://www.ncodetechnologies.com/blog/the-important-aspects-to-check-before-choosing-codeigniter-development-company/">
                  The important aspects to check before choosing the Codeigniter
                  development company
                </a>
              </li>
            </>
          ),
        },
        'home-decore': {
          label: 'Brighten up Your Living Spaces',
          description: (
            <>
              <li>
                <a href="http://www.ccsydneyglassandmirrors.com.au/splashback/">
                  Webpage content - Splashback
                </a>
              </li>
              <li>
                <a href="http://www.ccsydneyglassandmirrors.com.au/shower-screen/">
                  Webpage content - Shower screen
                </a>
              </li>
              <li>
                <a href="http://www.ccsydneyglassandmirrors.com.au/glass-partitioning/">
                  Webpage content - Glass partitioning
                </a>
              </li>
              <li>
                <a href="http://www.ccsydneyglassandmirrors.com.au/mirrors/">
                  Webpage content - Mirrors
                </a>
              </li>
            </>
          ),
        },
        'cyber-security': {
          label: 'Protection of Computer Systems and Networks',
          description: (
            <>
              <li>
                <a href="https://www.global-technical-support.co.uk/kaspersky-support">
                  FAQ - Kaspersky
                </a>
              </li>
              <li>
                <a href="https://www.global-technical-support.co.uk/avast-support">
                  FAQ - Avast
                </a>
              </li>
              <li>
                <a href="https://www.global-technical-support.co.uk/mcafee-support">
                  FAQ - McAfee
                </a>
              </li>
              <li>
                <a href="https://www.global-technical-support.co.uk/netgear-support">
                  FAQ - Netgear
                </a>
              </li>
            </>
          ),
        },
        other: {
          label: 'Online Story Board',
          description: (
            <>
              <li>
                <a href="https://www.lugelo.com/storybook/feature_inner/i-tried-the-ketogenic-diet-for-30-days-and-heres-what-happened">
                  My experience on ketogenic diet for 30 days
                </a>
              </li>
              <li>
                <a href="https://www.lugelo.com/storybook/feature_inner/2020-is-this-the-end-of-travel-blogging-for-me-and-whats-next">
                  2020 - The end of the travel blogging for me and what is next
                </a>
              </li>
              <li>
                <a href="https://www.lugelo.com/storybook/public/a-school-principals-journey-through-the-covid-19-lockdown">
                  A school principals journey through the COVID-19
                </a>
              </li>
              <li>
                <a href="https://www.lugelo.com/storybook/public/how-i-teach-my-kid-to-control-their-anger">
                  How I teach my kid to control their anger
                </a>
              </li>
              <li>
                <a href="https://www.lugelo.com/storybook/public/how-i-turned-my-workouts-into-my-business">
                  How I turned my workouts into my business
                </a>
              </li>
              <li>
                <a href="https://www.lugelo.com/storybook/feature_inner/how-journal-helped-me-to-cherish-my-pregnancy-journey">
                  How journal helped me to cherish my pregnancy
                </a>
              </li>
            </>
          ),
        },
      }}
    />
  )
}
