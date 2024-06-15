import React from 'react';

const About = () => {
    return (
        <section className="w-full h-full p-8 bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <div className="container mx-auto">
                <h1 className="text-5xl font-bold mb-4"><br/><br/>Trayambak Shrivastava</h1>
                <p className="text-2xl mb-2">B.E. (Hons.) in Computer Science & Minor in Finance, Class of 2025</p>
                <p className="text-lg mb-4">📧 Email: <a href="mailto:F20211629@PILANI.BITS-PILANI.AC.IN" className="underline">F20211629@PILANI.BITS-PILANI.AC.IN</a></p>
                <p className="text-lg mb-4">📞 Mobile: +91 8306579267</p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Academic Journey</h2>
                <ul className="list-disc list-inside">
                    <li className="text-xl mb-2">BITS Pilani, Pilani Campus - Shaping my future in Computer Science and Finance.</li>
                    <li className="text-xl mb-2">Nalanda Academy, Kota - Where I spent countless nights cracking the toughest problems.</li>
                    <li className="text-xl mb-2">St. Michael's High School, Patna - The place where it all began, my first steps into the world of knowledge.</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Skills & Proficiency</h2>
                <p className="text-xl mb-2">I speak fluent Python, Java, and C++. SQL is my second language. I also dabble in deep learning and financial analytics.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Internship Experience</h2>
                <p className="text-xl mb-2">As an ML Intern at VoiceQube, I engineered a machine learning app with NLP (RAKE) and RNNs for sentiment analysis using Python (TensorFlow).</p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Interests</h2>
                <p className="text-xl mb-2">
                    I have a deep passion for the intersection of technology and finance. My interests span a wide range of topics:
                </p>
                <ul className="list-disc list-inside ml-6">
                    <li className="text-xl mb-2">📊 <strong>Machine Learning & AI:</strong> Fascinated by the potential of machine learning to transform industries, I enjoy building intelligent systems that learn and adapt. My work in sentiment analysis and natural language processing has deepened my appreciation for AI's capabilities.</li>
                    <li className="text-xl mb-2">📚 <strong>Natural Language Processing:</strong> The ability of machines to understand and generate human language intrigues me. I love exploring techniques like RAKE and RNNs to uncover insights from textual data.</li>
                    <li className="text-xl mb-2">💾 <strong>Database Management:</strong> Designing and optimizing databases is both a challenge and a joy. I relish the process of creating efficient, scalable systems that manage data seamlessly.</li>
                    <li className="text-xl mb-2">📈 <strong>Financial Analytics:</strong> Merging my technical skills with finance, I delve into equity research, capital budgeting, and cash flow analysis. Understanding market dynamics and making data-driven financial decisions excites me.</li>
                    <li className="text-xl mb-2">🔍 <strong>Data Structures & Algorithms:</strong> I am passionate about the theoretical foundations of computer science. Implementing efficient algorithms and data structures not only solves complex problems but also enhances my coding proficiency.</li>
                    <li className="text-xl mb-2">🧠 <strong>Deep Learning:</strong> The complexity and depth of neural networks fascinate me. From image classification to text generation, I am keen on exploring various architectures and their applications.</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Certifications</h2>
                <p className="text-xl mb-2">I've completed courses on Econometrics and Statistics for Business in R & Python and Valuation for Startups Using DCF Approach.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Competitions</h2>
                <ul className="list-disc list-inside">
                    <li className="text-xl mb-2">Adobe Devcraft, DTU - Finalist in the prestigious hackathon, created a document classifier using advanced techniques.</li>
                    <li className="text-xl mb-2">NASA HERC - Represented India and BITS Pilani at the international stage, securing 1st in Project Review and an overall 12th rank.</li>
                </ul>

                <p className="text-xl mt-8">Currently living in Kolkata, West Bengal, but natively from Patna, Bihar. I balance my time between coding, financial analysis, and exploring the cultural richness of Kolkata.</p>
            </div>
        </section>
    );
};

export default About;
