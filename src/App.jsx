import React, { useState } from 'react';
import Navigation from './components/Navigation';
import SignUpPage from './components/SignUpPage';
import UserCard from './components/UserCard';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const sampleUsers = [
    {
      name: 'Vidhi ',
      email: 'vidhi.bisht@example.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Siddharth Sharma',
      email: 'siddharth.sharma@example.com',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Nandita Das',
      email: 'nandita.das@example.com'
    },
    {
      name: 'Rishabh Rawat',
      email: 'rishabh.rawat@example.com',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  if (currentView === 'signup') {
    return <SignUpPage />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Frontend Tasks Demo
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-indigo-300 max-w-2xl mx-auto">
            Showcasing responsive navigation, sign-up forms, and user cards
          </p>
          <button
            onClick={() => setCurrentView('signup')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-500 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            Try Sign-Up Form
          </button>
        </div>
      </section>

      {/* User Cards Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              User Cards Component
            </h2>
            <p className="text-xl text-gray-300">
              Reusable UserCard components accepting name and email props
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleUsers.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                email={user.email}
                avatar={user.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About This Frontend Tasks Demo
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This application demonstrates three key frontend components: a responsive navigation bar, 
              a comprehensive sign-up form with validation, and reusable user card components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow">
              <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Responsive Navigation</h3>
              <p className="text-gray-400">Mobile-friendly navigation with smooth animations and hamburger menu.</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg shadow">
              <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sign-Up Form</h3>
              <p className="text-gray-400">Complete form with real-time validation, error handling, and success states.</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg shadow">
              <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">User Cards</h3>
              <p className="text-gray-400">Reusable components with props for name and email, featuring elegant hover effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Have questions about these components? Feel free to reach out!
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>

      {/* Back to Home Button */}
      {currentView === 'signup' && (
        <button
          onClick={() => setCurrentView('home')}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          ← Back
        </button>
      )}
    </div>
  );
}

export default App;
