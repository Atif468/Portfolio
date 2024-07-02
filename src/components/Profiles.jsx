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
      <div className="max-w-6xl  p-8 overflow-hidden">
        <h2 className="text-4xl font-bold mb-8 text-center">Profiles</h2>

        <div className="flex flex-row gap-8 justify-center">

          {/* GitHub Section */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center w-96" data-aos="fade-down-right">
            <h3 className="text-3xl text-blue-400 mb-4">GitHub</h3>
            {loading ? (
              <p className="text-gray-400">Loading GitHub data...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : githubData ? (
              <div>
                <a href={githubData.html_url} className="text-blue-400 hover:text-blue-300 cursor-pointer">Visit GitHub Profile</a>
                <p className="text-gray-300 text-lg mt-4">Username: {githubData.login}</p>
                <p className="text-gray-300 text-lg">Public Repos: {githubData.public_repos}</p>
                <p className="text-gray-300 text-lg">Followers: {githubData.followers}</p>
                <p className="text-gray-300 text-lg">Following: {githubData.following}</p>
              </div>
            ) : null}
          </div>

          {/* LeetCode Section */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center w-96" data-aos="fade-down">
            <h3 className="text-3xl text-green-400 mb-4">LeetCode</h3>
            {loading ? (
              <p className="text-gray-400">Loading LeetCode data...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : leetcodeData ? (
              <div>
                <a href={leetcodeData.url} className="text-green-400 hover:text-green-300 cursor-pointer">Visit LeetCode Profile</a>
                <p className="text-gray-300 text-lg mt-4">Total Solved: {leetcodeData.totalSolved}</p>
                <p className="text-gray-300 text-lg">World Rank: {leetcodeData.ranking}</p>
                <p className="text-gray-300 text-lg">Easy solved: {leetcodeData.easySolved}</p>
                <p className="text-gray-300 text-lg">Medium solved: {leetcodeData.mediumSolved}</p>
                <p className="text-gray-300 text-lg">Hard solved: {leetcodeData.hardSolved}</p>
              </div>
            ) : null}
          </div>

          {/* GFG Section */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg text-center w-96" data-aos="fade-down-left">
            <h3 className="text-3xl text-yellow-400 mb-4">GeeksforGeeks</h3>
            {loading ? (
              <p className="text-gray-400">Loading GeeksforGeeks data...</p>
            ) : error ? (
              <p className="text-red-400">Error: {error}</p>
            ) : gfgData ? (
              <div >
                <a href={gfgData.url} className="text-yellow-400 hover:text-yellow-300 cursor-pointer">Visit GFG Profile</a>
                <p className="text-gray-300 text-lg mt-4">Total problems: {gfgData.TotalProblemSolved}</p>
                <p className="text-gray-300 text-lg">Easy Solved: {gfgData.Hard}</p>
                <p className="text-gray-300 text-lg">Medium Solved: {gfgData.Basic}</p>
                <p className="text-gray-300 text-lg">Hard Solved: {gfgData.School}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
