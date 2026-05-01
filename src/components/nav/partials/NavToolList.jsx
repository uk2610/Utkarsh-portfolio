import "./NavToolList.scss"
import React from 'react'
import NavToolThemePicker from "/src/components/nav/tools/NavToolThemePicker.jsx"

function NavToolList({ expanded }) {
    const shrinkClass = expanded ?
        `` :
        `nav-tools-shrink`

    return (
        <div className={`nav-tools ${shrinkClass}`}>
            <div className={`nav-tools-item nav-tools-item-theme`}>
                <NavToolThemePicker/>
            </div>

            <span className={`nav-tools-divider`}/>

            <div className={`nav-tools-social-group`}>
                <div className={`nav-tools-item nav-tools-item-social`}>
                    <a className={`nav-tools-social-link`}
                       href={`https://github.com/uk2610`}
                       target={`_blank`}
                       rel={`noreferrer`}
                       data-tooltip={`GitHub`}>
                        <i className={`fa-brands fa-github`}/>
                    </a>
                </div>

                <div className={`nav-tools-item nav-tools-item-social`}>
                    <a className={`nav-tools-social-link`}
                       href={`https://linkedin.com/in/Uk2610`}
                       target={`_blank`}
                       rel={`noreferrer`}
                       data-tooltip={`LinkedIn`}>
                        <i className={`fa-brands fa-linkedin-in`}/>
                    </a>
                </div>

                <div className={`nav-tools-item nav-tools-item-social`}>
                    <a className={`nav-tools-social-link`}
                       href={`mailto:utkarshkumar26102004@gmail.com`}
                       data-tooltip={`Email`}>
                        <i className={`fa-solid fa-envelope`}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavToolList