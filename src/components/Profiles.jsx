import React, { useState, useEffect } from 'react';

const Profiles = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [gfgData, setGfgData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch LeetCode Data
  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Atif_32395');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLeetcodeData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetcodeData();
  }, []);

  // Fetch GitHub Data
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Atif468');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Fetch GFG Data
  useEffect(() => {
    const fetchGfgData = async () => {
      try {
        const response = await fetch('https://gfgstats.onrender.com/?userName=atifans468');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setGfgData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGfgData();
  }, []);

  return (
    <section className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Profiles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {/* LinkedIn Section */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-2xl text-orange-400 mb-2">LinkedIn</h3>
            <a href="#" className="text-orange-400 hover:text-blue-300">Visit LinkedIn Profile</a>
          </div>

          {/* GitHub Section */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-2xl text-white-400 mb-2">GitHub</h3>
            {loading ? (
              <p className="text-gray-400">Loading GitHub data...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : githubData ? (
              <div>
                <a href={githubData.html_url} className="text-white-400 hover:text-gray-300 cursor-pointer">Visit GitHub Profile</a>
                <p className="text-gray-300">Username: {githubData.login}</p>
                <p className="text-gray-300">Public Repos: {githubData.public_repos}</p>
                <p className="text-gray-300">Followers: {githubData.followers}</p>
                <p className="text-gray-300">Following: {githubData.following}</p>
              </div>
            ) : null}
          </div>

          {/* LeetCode Section */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-2xl text-green-400 mb-2">LeetCode</h3>
            {loading ? (
              <p className="text-gray-400">Loading LeetCode data...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : leetcodeData ? (
              <div>
                <a href={leetcodeData.url} className="text-green-400 hover:text-green-300 cursor-pointer">Visit LeetCode Profile</a>
                <p className="text-gray-300">Total Solved: {leetcodeData.totalSolved}</p>
                <p className="text-gray-300">World Rank: {leetcodeData.ranking}</p>
                <p className="text-gray-300">Easy solved: {leetcodeData.easySolved}</p>
                <p className="text-gray-300">Medium solved: {leetcodeData.mediumSolved}</p>
                <p className="text-gray-300">Hard solved: {leetcodeData.hardSolved}</p>
              </div>
            ) : null}
          </div>

          {/* GFG Section */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-2xl text-yellow-400 mb-2">GeeksforGeeks</h3>
            {loading ? (
              <p className="text-gray-400">Loading GeeksforGeeks data...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : gfgData ? (
              <div>
                <a href={gfgData.url} className="text-yellow-400 hover:text-yellow-300 cursor-pointer">Visit GeeksforGeeks Profile</a>
                <p className="text-gray-300">Total problems: {gfgData.TotalProblemSolved}</p>
                <p className="text-gray-300">Easy Solved: {gfgData.Hard}</p>
                <p className="text-gray-300">Medium Solved: {gfgData.Basic}</p>
                <p className="text-gray-300">Hard Solved: {gfgData.School}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
