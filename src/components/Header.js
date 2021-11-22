import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"
import profile from '../assets/profile.jpg'

function Header() {
    return (
        <header>
            <div className="logo-nav-container">
                <svg width="48.72" height="46.32" viewBox="0 0 203 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.968 19.576L38.84 19.72C44.168 19.72 47.744 19.264 49.568 18.352C49.328 21.424 48.56 23.488 47.264 24.544C45.968 25.6 43.64 26.128 40.28 26.128C36.92 26.128 32.192 25.6 26.096 24.544C26.048 27.28 25.016 34.936 23 47.512C32.408 47.416 38.576 46.624 41.504 45.136C41.216 48.928 40.136 51.28 38.264 52.192C37.256 52.72 36.296 53.056 35.384 53.2C34.472 53.296 33.368 53.344 32.072 53.344C30.824 53.344 27.512 53.128 22.136 52.696C20.984 60.472 20.408 66.448 20.408 70.624C20.408 74.752 21.344 77.848 23.216 79.912C21.728 81.64 20.072 82.504 18.248 82.504C14.504 82.504 12.632 79.336 12.632 73C12.632 70.072 13.496 63.184 15.224 52.336C14.456 52.288 13.208 52.264 11.48 52.264C11.72 50.488 12.104 49.312 12.632 48.736C13.16 48.112 14.288 47.728 16.016 47.584C17.312 38.608 17.96 32.584 17.96 29.512C17.96 26.392 17.6 23.752 16.88 21.592C18.56 20.248 22.256 19.576 27.968 19.576ZM57.2534 83.008C53.9894 83.008 51.3974 81.4 49.4774 78.184C47.6054 74.968 46.6694 70.552 46.6694 64.936C46.6694 55.912 48.6854 48.304 52.7174 42.112C56.7974 35.872 61.8134 32.752 67.7654 32.752C71.8454 32.752 75.2294 34.36 77.9174 37.576C78.3014 36.088 78.7814 35.032 79.3574 34.408C79.9814 33.784 80.9174 33.472 82.1654 33.472C83.4614 33.472 84.6614 34.096 85.7654 35.344C84.9014 37.648 84.1574 41.512 83.5334 46.936C82.9094 52.36 82.5974 57.424 82.5974 62.128C82.5974 66.784 82.8374 70.408 83.3174 73C83.8454 75.544 84.7094 77.824 85.9094 79.84C84.5174 81.616 82.8854 82.504 81.0134 82.504C76.8854 82.504 74.8214 77.44 74.8214 67.312C74.8214 65.68 75.0134 62.824 75.3974 58.744C72.9014 65.704 69.9254 71.488 66.4694 76.096C63.0614 80.704 59.9894 83.008 57.2534 83.008ZM68.0534 37.72C63.9734 37.72 60.6374 40.096 58.0454 44.848C55.5014 49.6 54.2294 55.696 54.2294 63.136C54.2294 66.928 54.7094 69.928 55.6694 72.136C56.6774 74.296 58.0214 75.376 59.7014 75.376C61.4294 75.376 63.5894 73.504 66.1814 69.76C68.8214 66.016 71.2214 61.456 73.3814 56.08C75.5414 50.656 76.8614 45.784 77.3414 41.464C74.0774 38.968 70.9814 37.72 68.0534 37.72ZM103.875 82.504C100.131 82.504 98.2591 79.336 98.2591 73C98.2591 70.36 98.7631 65.896 99.7711 59.608C100.779 53.32 101.283 48.16 101.283 44.128C101.283 40.096 100.779 37.12 99.7711 35.2C100.971 34.096 102.435 33.544 104.163 33.544C107.667 33.544 109.419 35.368 109.419 39.016C109.419 40.312 109.107 42.976 108.483 47.008C107.907 51.04 107.523 53.8 107.331 55.288C109.923 48.472 112.827 43.024 116.043 38.944C119.307 34.816 121.995 32.752 124.107 32.752C125.307 32.752 126.195 33.328 126.771 34.48C127.395 35.632 127.707 36.808 127.707 38.008C127.707 39.208 127.563 40.432 127.275 41.68C126.555 41.536 125.883 41.464 125.259 41.464C122.187 41.464 119.091 43.264 115.971 46.864C112.899 50.464 110.475 54.424 108.699 58.744C106.971 63.064 106.107 66.64 106.107 69.472C106.107 74.464 107.019 77.944 108.843 79.912C107.355 81.64 105.699 82.504 103.875 82.504ZM165.322 81.496C163.642 82.168 162.034 82.504 160.498 82.504C158.962 82.504 157.858 81.904 157.186 80.704C156.562 79.456 156.25 77.68 156.25 75.376C156.25 73.072 156.682 68.608 157.546 61.984C158.458 55.36 158.914 50.584 158.914 47.656C158.914 44.68 158.65 42.784 158.122 41.968C157.642 41.104 156.73 40.672 155.386 40.672C153.61 40.672 151.474 42.88 148.978 47.296C146.482 51.664 144.346 56.608 142.57 62.128C140.842 67.648 139.978 71.968 139.978 75.088C139.978 78.16 140.386 80.296 141.202 81.496C139.522 82.168 137.914 82.504 136.378 82.504C134.842 82.504 133.738 81.904 133.066 80.704C132.442 79.456 132.13 77.704 132.13 75.448C132.13 73.144 132.586 68.512 133.498 61.552C134.41 54.544 134.866 48.904 134.866 44.632C134.866 40.312 134.362 37.168 133.354 35.2C133.834 34.72 134.554 34.336 135.514 34.048C136.474 33.712 137.338 33.544 138.106 33.544C139.786 33.544 141.034 34.12 141.85 35.272C142.666 36.424 143.074 38.608 143.074 41.824C143.074 44.992 142.378 50.464 140.986 58.24C145.786 46.048 149.914 38.368 153.37 35.2C154.954 33.76 156.538 33.04 158.122 33.04C163.402 33.04 166.042 37.192 166.042 45.496C166.042 49.576 165.73 53.824 165.106 58.24C171.202 41.44 176.89 33.04 182.17 33.04C187.498 33.04 190.162 37.192 190.162 45.496C190.162 47.896 189.874 51.352 189.298 55.864C188.77 60.376 188.506 63.808 188.506 66.16C188.506 72.928 189.562 77.512 191.674 79.912C190.09 81.64 188.434 82.504 186.706 82.504C182.722 82.504 180.73 77.848 180.73 68.536C180.73 65.08 181.114 60.736 181.882 55.504C182.65 50.224 183.034 46.864 183.034 45.424C183.034 43.936 182.77 42.784 182.242 41.968C181.762 41.104 180.826 40.672 179.434 40.672C177.658 40.672 175.522 42.88 173.026 47.296C170.53 51.664 168.418 56.608 166.69 62.128C164.962 67.648 164.098 71.968 164.098 75.088C164.098 78.16 164.506 80.296 165.322 81.496Z" fill="#340E51"/>
                    <path d="M22.968 110.576L33.84 110.72C39.168 110.72 42.744 110.264 44.568 109.352C44.328 112.424 43.56 114.488 42.264 115.544C40.968 116.6 38.64 117.128 35.28 117.128C31.92 117.128 27.192 116.6 21.096 115.544C21.048 118.28 20.016 125.936 18 138.512C27.408 138.416 33.576 137.624 36.504 136.136C36.216 139.928 35.136 142.28 33.264 143.192C32.256 143.72 31.296 144.056 30.384 144.2C29.472 144.296 28.368 144.344 27.072 144.344C25.824 144.344 22.512 144.128 17.136 143.696C15.984 151.472 15.408 157.448 15.408 161.624C15.408 165.752 16.344 168.848 18.216 170.912C16.728 172.64 15.072 173.504 13.248 173.504C9.504 173.504 7.632 170.336 7.632 164C7.632 161.072 8.496 154.184 10.224 143.336C9.456 143.288 8.208 143.264 6.48 143.264C6.72 141.488 7.104 140.312 7.632 139.736C8.16 139.112 9.288 138.728 11.016 138.584C12.312 129.608 12.96 123.584 12.96 120.512C12.96 117.392 12.6 114.752 11.88 112.592C13.56 111.248 17.256 110.576 22.968 110.576ZM53.7345 173.504C49.9905 173.504 48.1185 170.336 48.1185 164C48.1185 161.36 48.6225 156.896 49.6305 150.608C50.6385 144.32 51.1425 139.16 51.1425 135.128C51.1425 131.096 50.6385 128.12 49.6305 126.2C50.8305 125.096 52.2945 124.544 54.0225 124.544C57.5265 124.544 59.2785 126.368 59.2785 130.016C59.2785 131.312 58.9665 133.976 58.3425 138.008C57.7665 142.04 57.3825 144.8 57.1905 146.288C59.7825 139.472 62.6865 134.024 65.9025 129.944C69.1665 125.816 71.8545 123.752 73.9665 123.752C75.1665 123.752 76.0545 124.328 76.6305 125.48C77.2545 126.632 77.5665 127.808 77.5665 129.008C77.5665 130.208 77.4225 131.432 77.1345 132.68C76.4145 132.536 75.7425 132.464 75.1185 132.464C72.0465 132.464 68.9505 134.264 65.8305 137.864C62.7585 141.464 60.3345 145.424 58.5585 149.744C56.8305 154.064 55.9665 157.64 55.9665 160.472C55.9665 165.464 56.8785 168.944 58.7025 170.912C57.2145 172.64 55.5585 173.504 53.7345 173.504ZM92.3569 152.768C91.0609 152.768 89.7649 152.696 88.4689 152.552C88.5169 157.88 89.5009 161.936 91.4209 164.72C93.3889 167.504 96.1249 168.896 99.6289 168.896C104.573 168.896 108.173 166.472 110.429 161.624C111.581 162.728 112.157 164.072 112.157 165.656C112.157 168.344 110.645 170.456 107.621 171.992C104.645 173.48 101.525 174.224 98.2609 174.224C92.4529 174.224 88.0609 172.376 85.0849 168.68C82.1569 164.984 80.6929 160.208 80.6929 154.352C80.6929 150.848 81.2449 147.32 82.3489 143.768C83.4529 140.168 84.9649 136.88 86.8849 133.904C88.8049 130.88 91.2769 128.432 94.3009 126.56C97.3249 124.688 100.637 123.752 104.237 123.752C107.837 123.752 110.573 124.664 112.445 126.488C114.365 128.312 115.325 130.664 115.325 133.544C115.325 138.2 113.165 142.568 108.845 146.648C104.573 150.728 99.0769 152.768 92.3569 152.768ZM107.765 135.92C107.765 133.952 107.141 132.344 105.893 131.096C104.693 129.8 103.013 129.152 100.853 129.152C98.7409 129.152 96.8929 129.752 95.3089 130.952C93.7729 132.152 92.5489 133.76 91.6369 135.776C90.0049 139.52 88.9969 143.576 88.6129 147.944C89.7649 148.088 90.8449 148.16 91.8529 148.16C96.7489 148.16 100.613 146.912 103.445 144.416C106.325 141.872 107.765 139.04 107.765 135.92ZM138.149 128.792C136.133 128.792 134.525 129.32 133.325 130.376C132.125 131.384 131.525 132.776 131.525 134.552C131.525 136.328 132.101 137.888 133.253 139.232C134.453 140.576 136.469 142.4 139.301 144.704C142.133 147.008 143.885 148.448 144.557 149.024C148.397 152.192 150.317 155.888 150.317 160.112C150.317 164.336 148.925 167.696 146.141 170.192C143.357 172.688 139.397 173.936 134.261 173.936C130.421 173.936 127.205 173.216 124.613 171.776C122.069 170.288 120.797 168.152 120.797 165.368C120.797 163.4 121.949 161.264 124.253 158.96C125.069 162.416 126.533 165.008 128.645 166.736C130.805 168.416 133.037 169.256 135.341 169.256C137.693 169.256 139.613 168.68 141.101 167.528C142.637 166.376 143.405 164.864 143.405 162.992C143.405 161.36 143.093 160.088 142.469 159.176C141.893 158.216 141.437 157.52 141.101 157.088C140.765 156.608 140.117 155.96 139.157 155.144C138.197 154.28 137.453 153.656 136.925 153.272C136.445 152.84 135.485 152.072 134.045 150.968C132.605 149.816 131.525 148.952 130.805 148.376C126.821 145.256 124.829 141.512 124.829 137.144C124.829 132.776 126.317 129.464 129.293 127.208C132.269 124.904 136.349 123.752 141.533 123.752C148.013 123.752 151.253 125.984 151.253 130.448C151.253 132.56 150.149 134.48 147.941 136.208C145.925 131.264 142.661 128.792 138.149 128.792ZM169.946 172.496C168.314 173.168 166.706 173.504 165.122 173.504C163.586 173.504 162.482 172.904 161.81 171.704C161.186 170.456 160.874 168.488 160.874 165.8C160.874 163.112 161.858 155.912 163.826 144.2C167.138 124.184 167.618 111.824 165.266 107.12C166.418 106.064 167.906 105.536 169.73 105.536C171.602 105.536 172.946 106.112 173.762 107.264C174.578 108.416 174.986 110.528 174.986 113.6C174.986 116.624 174.17 122.744 172.538 131.96C170.954 141.176 170.018 146.936 169.73 149.24C174.818 137.048 179.186 129.368 182.834 126.2C184.514 124.76 186.194 124.04 187.874 124.04C193.442 124.04 196.226 128.192 196.226 136.496C196.226 138.896 195.938 142.352 195.362 146.864C194.834 151.376 194.57 154.808 194.57 157.16C194.57 163.928 195.626 168.512 197.738 170.912C196.058 172.64 194.378 173.504 192.698 173.504C188.714 173.504 186.722 168.848 186.722 159.536C186.722 156.08 187.106 151.736 187.874 146.504C188.69 141.224 189.098 137.864 189.098 136.424C189.098 134.936 188.81 133.784 188.234 132.968C187.658 132.104 186.65 131.672 185.21 131.672C183.29 131.672 180.986 133.88 178.298 138.296C175.61 142.664 173.33 147.608 171.458 153.128C169.634 158.6 168.722 162.896 168.722 166.016C168.722 169.136 169.13 171.296 169.946 172.496Z" fill="#340E51"/>
                </svg>

                <ul className="nav">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">About</Link></li>
                    <li><Link to="/home">Stall</Link></li>
                    <li><Link to="/home">Contact Us</Link></li>
                </ul>
            </div>
            <div className="user-nav-profile">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                </svg>
                {/* make this either profile or sign in */}
                <img className="profile" src={profile} alt={profile} />
                <Link to="/login"><p>Sign in</p></Link>
            </div>
        </header>
    )
}

export default Header
