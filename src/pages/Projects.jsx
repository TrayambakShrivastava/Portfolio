import React from 'react';

const Projects = () => {
    return (
        <section className="w-full h-screen p-8 bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <div className="container mx-auto flex flex-col items-center justify-center h-full space-y-6">
                <a 
                    href="https://github.com/TrayambakShrivastava" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-all"
                >
                    <img 
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                        alt="GitHub" 
                        className="w-8 h-8 mr-3"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/32?text=GH"; }}
                    />
                    My GitHub Projects
                </a>
                <a 
                    href="https://www.linkedin.com/in/trayambak-shrivastava-756aba228/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3" viewBox="0 0 24 24">
                        <path d="M21.5 0h-19c-1.379 0-2.5 1.122-2.5 2.5v19c0 1.379 1.122 2.5 2.5 2.5h19c1.379 0 2.5-1.122 2.5-2.5v-19c0-1.379-1.122-2.5-2.5-2.5zm-6.399 18.101v-10.543h-2.351v10.543h2.351zm-1.176-11.823c.826 0 1.5-.674 1.5-1.5s-.674-1.5-1.5-1.5-1.5.674-1.5 1.5.674 1.5 1.5 1.5zM17.5 18.101v-6.98c0-.243-.198-.441-.441-.441h-1.118c-.243 0-.441.198-.441.441v6.98h-2.351v-10.543h2.351v.989c.553-.694 1.338-1.082 2.176-1.082 1.591 0 2.876 1.333 2.876 2.976v8.66h-2.351z"/>
                    </svg>
                    Connect on LinkedIn
                </a>
                <a 
                    href="https://www.youtube.com/@KhooniMonday" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition-all"
                >
                    <img 
                        src="https://www.scdn.co/i/_global/favicon.png" 
                        alt="YouTube" 
                        className="w-8 h-8 mr-3"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/32?text=YT"; }}
                    />
                    My Favorite YouTube Channel
                </a>
            </div>
        </section>
    );
};

export default Projects;
