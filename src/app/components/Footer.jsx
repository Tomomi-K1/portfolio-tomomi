'use client'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return(
        <footer className='py-5 text-center text-white bg-gray-900'>
            <ul className='w-3/12 sm:w-1/12 max-w-[90px] flex justify-between mx-auto mb-2'> 
                <li><a href="https://www.linkedin.com/in/tomomi-kosaka/"><LinkedInIcon color="white"/></a></li>
                <li><a href="https://github.com/Tomomi-K1"><GitHubIcon /></a></li>
            </ul>
            <p>created and designed by <span className="font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Tomomi Kosaka</span></p>
        </footer>
    );
}