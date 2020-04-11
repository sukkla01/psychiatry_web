import React from 'react'

export const Setting = () => {
    return (
        <div>
            <div id="settings-trigger"><i className="mdi mdi-settings" /></div>
            <div id="right-sidebar" className="settings-panel">
                <i className="settings-close mdi mdi-close" />
                <ul className="nav nav-tabs bg-gradient-primary" id="setting-panel" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                    </li>
                </ul>

            </div>
        </div>
    )
}
