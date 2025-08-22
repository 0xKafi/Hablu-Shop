import React from 'react';

const Footer = () => {
    return (
        <footer className='rounded-t-4xl h-60 bg-primary'>
            <div className='w-11/12 max-w-screen-xl mx-auto py-10'>
                <div className="text-center text-sm text-secondary">
                <h2 className='font-bold text-2xl text-secondary mb-4'>
                    <span className='bg-secondary text-primary px-2 rounded-sm'>H</span>
                    ablu Shop
                </h2>
                <p>© {new Date().getFullYear()} Hablu Shop. All rights reserved.</p>
                    <address className="not-italic mt-2">
                        123 Main Street<br />
                        Suite 400<br />
                        San Francisco, CA 94105<br />
                        United States
                    </address>
                </div>
            </div>
        </footer>
    );
};

export default Footer;