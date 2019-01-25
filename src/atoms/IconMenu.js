import React, { Component } from 'react';

class IconMenu extends Component {

    constructor( props ) {
        super( props );
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
        let Main = document.querySelector('.Main');
        Main.classList.toggle('Sidebar-is-open');
    }

    render() {
        return (
            <div className="Icon IconMenu" onClick={this.handleClick}>
                <svg width="30px" height="30px" viewBox="0 0 30 30">
                    <g id="icon/menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path d="M1,25 C0.44771525,25 0,24.5522847 0,24 C0,23.4477153 0.44771525,23 1,23 L29,23 C29.5522847,23 30,23.4477153 30,24 C30,24.5522847 29.5522847,25 29,25 L1,25 Z M1,7 C0.44771525,7 0,6.55228475 0,6 C0,5.44771525 0.44771525,5 1,5 L29,5 C29.5522847,5 30,5.44771525 30,6 C30,6.55228475 29.5522847,7 29,7 L1,7 Z M1,16 C0.44771525,16 0,15.5522847 0,15 C0,14.4477153 0.44771525,14 1,14 L29,14 C29.5522847,14 30,14.4477153 30,15 C30,15.5522847 29.5522847,16 29,16 L1,16 Z" id="Combined-Shape" fill="#000000" fillRule="nonzero"></path>
                    </g>
                </svg>
            </div>
        )
    }
}

export default IconMenu;