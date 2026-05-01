import "./SectionBody.scss"
import React, {useEffect, useState} from 'react'
import {useParser} from "/src/hooks/parser.js"
import ArticleCards from "/src/components/articles/ArticleCards.jsx"
import ArticleContactForm from "/src/components/articles/ArticleContactForm.jsx"
import ArticleFacts from "/src/components/articles/ArticleFacts.jsx"
import ArticleInfoList from "/src/components/articles/ArticleInfoList.jsx"
import ArticleInlineList from "/src/components/articles/ArticleInlineList.jsx"
import ArticleNotFound from "/src/components/articles/ArticleNotFound.jsx"
import ArticlePortfolio from "/src/components/articles/ArticlePortfolio.jsx"
import ArticleStack from "/src/components/articles/ArticleStack.jsx"
import ArticleSkills from "/src/components/articles/ArticleSkills.jsx"
import ArticleTestimonials from "/src/components/articles/ArticleTestimonials.jsx"
import ArticleText from "/src/components/articles/ArticleText.jsx"
import ArticleThread from "/src/components/articles/ArticleThread.jsx"
import ArticleTimeline from "/src/components/articles/ArticleTimeline.jsx"

function SectionBody({ section }) {
    const parser = useParser()
    const articleDataWrappers = parser.parseSectionArticles(section)

    useEffect(() => {
        const sectionBodyEl = document.querySelector(`#section-${section.id} .section-body`)
        if(!sectionBodyEl)
            return

        const revealItems = Array.from(sectionBodyEl.children)
        if(!revealItems.length)
            return

        revealItems.forEach(item => item.classList.add('section-reveal-item'))

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting)
                    entry.target.classList.add('section-reveal-item-visible')
            })
        }, {
            threshold: 0.18,
            root: sectionBodyEl.closest('.scrollable') || null,
            rootMargin: '0px 0px -5% 0px'
        })

        revealItems.forEach(item => observer.observe(item))
        return () => observer.disconnect()
    }, [section?.id])

    return (
        <div className={`section-body`}>
            {articleDataWrappers && articleDataWrappers.map((dataWrapper, key) => {
                const Component = SectionBody.ARTICLES[dataWrapper.component] || ArticleNotFound
                return (
                    <div className={`section-reveal-shell`} key={key}>
                        <Component dataWrapper={dataWrapper}
                                  id={key}/>
                    </div>
                )
            })}
        </div>
    )
}

SectionBody.ARTICLES = {
    ArticleCards,
    ArticleContactForm,
    ArticleFacts,
    ArticleInfoList,
    ArticleInlineList,
    ArticleNotFound,
    ArticlePortfolio,
    ArticleSkills,
    ArticleStack,
    ArticleTestimonials,
    ArticleText,
    ArticleThread,
    ArticleTimeline
}

export default SectionBody