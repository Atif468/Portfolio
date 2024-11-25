import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";

const Profiles = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [gfgData, setGfgData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    leetcode: null,
    github: null,
    gfg: null,
  });

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Atif_2005"
        );
        if (!response.ok) throw new Error("Failed to fetch LeetCode data");
        const data = await response.json();
        setLeetcodeData(data);
      } catch (error) {
        setError((prev) => ({ ...prev, leetcode: error.message }));
      }
    };

    const fetchGithubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Atif468");
        if (!response.ok) throw new Error("Failed to fetch GitHub data");
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        setError((prev) => ({ ...prev, github: error.message }));
      }
    };

    const fetchGfgData = async () => {
      try {
        const response = await fetch(
          "https://gfgstats.onrender.com/?userName=atifans468"
        );
        if (!response.ok) throw new Error("Failed to fetch GFG data");
        const data = await response.json();
        setGfgData(data.data);
      } catch (error) {
        setError((prev) => ({ ...prev, gfg: error.message }));
      }
    };

    Promise.all([fetchLeetcodeData(), fetchGithubData(), fetchGfgData()])
      .catch(() => setLoading(false))
      .finally(() => setLoading(false)); 
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 py-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent text-white">
          Profiles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           <ProfileCard
            title="GitHub"
            titleColor="text-white"
            hoverColor="hover:text-blue-400"
            loading={loading}
            error={error.github}
            data={githubData}
            link={githubData?.html_url}
            stats={[
              { label: "Username", value: githubData?.login },
              { label: "Public Repos", value: githubData?.public_repos },
              { label: "Followers", value: githubData?.followers },
              { label: "Following", value: githubData?.following },
            ]}
          />

           <ProfileCard
            title="LeetCode"
            titleColor="text-white"
            hoverColor="hover:text-blue-400"
            loading={loading}
            error={error.leetcode}
            data={leetcodeData}
            link="https://leetcode.com/u/Atif_2005"
            stats={[
              { label: "Total Solved", value: leetcodeData?.totalSolved },
              { label: "World Rank", value: leetcodeData?.ranking },
              { label: "Easy Solved", value: leetcodeData?.easySolved },
              { label: "Medium Solved", value: leetcodeData?.mediumSolved },
              { label: "Hard Solved", value: leetcodeData?.hardSolved },
            ]}
          />

           <ProfileCard
            title="GeeksforGeeks"
            titleColor="text-white"
            hoverColor="hover:text-blue-400"
            loading={loading}
            error={error.gfg}
            data={gfgData}
            link={gfgData?.url}
            stats={[
              { label: "Total Problems", value: gfgData?.TotalProblemSolved },
              { label: "Easy Solved", value: gfgData?.Hard },
              { label: "Medium Solved", value: gfgData?.Basic },
              { label: "Hard Solved", value: gfgData?.School },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const ProfileCard = ({
  title,
  titleColor,
  hoverColor,
  loading,
  error,
  data,
  link,
  stats,
}) => {
  return (
    <div
      className="bg-gradient-to-br from-blue-400 via-black to-transparent hover:shadow-blue rounded-lg p-6 md:p-8 hover:scale-105 transition-transform duration-300 relative group"
      data-aos="zoom-in"
    >
      <BackgroundBeams />
      
      <h3 className={`text-2xl md:text-3xl ${titleColor} mb-4`}>{title}</h3>
      {loading ? (
        <p className="text-gray-400">Loading {title} data...</p>
      ) : error ? (
        <p className="text-red-400">Error: {error}</p>
      ) : data ? (
        <div>
          <ol className="mt-4 space-y-2">
            {stats.map(
              (stat, index) =>
                stat.value && (
                  <li key={index} className="text-gray-300 text-sm md:text-lg">
                    <span className="font-bold">{stat.label}:</span>{" "}
                    {stat.value}
                  </li>
                )
            )}
          </ol>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 italic ${hoverColor} transition-colors relative space-x-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-blue-400 after:w-0 after:h-[2px] after:transition-all after:duration-500 hover:after:w-full`}
          >
            See {title.toLowerCase()} Profile→
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Profiles;
