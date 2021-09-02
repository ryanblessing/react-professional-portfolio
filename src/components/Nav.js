import React from 'react'

const nav = (props) => {
    const tabs = ['Home', 'About', 'Contact', 'Projects']
    return (
        <ul className="nav nav-pills mb-3 justify-content-around" id="nav">
            {tabs.map(tab => (
                <li className="nav-item" id="tabs" key={tab}>
                    <a
                    href={'#' + tab.toLowerCase()}
                    // Whenever a tab is clicked on,
                    // the current page is set through the handlePageChange props.
                    onClick={() => props.handlePageChange(tab)}
                    className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }
                    >
                        {tab}
                    </a>
                </li>
            ))}

        </ul>
        )
}

export default nav;

