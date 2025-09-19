import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="w-full max-w-md text-center">
                <div className="mb-8">
                    <img 
                        src="/404page.jpg"  
                        alt="404 Not Found" 
                        className="mx-auto w-72 h-72 object-contain drop-shadow-lg"
                    />
                    <Link 
                        to="/dashboard" 
                        className="inline-block mt-6 px-6 py-3 text-white font-semibold text-lg bg-[#DE8628] rounded-full shadow-md hover:bg-[#c76f1c] hover:scale-105 transition-transform duration-300"
                    >
                        Go To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
