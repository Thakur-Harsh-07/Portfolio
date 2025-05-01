import React, { useEffect, useState } from "react";
import { SkillsData } from "../../Data/SkillsData";
import Card from "../Card";
import Spinner from "../Common/Spinner";


const Skills = () => {

    const [stats, setStats] = useState([]);
    const[loading, setLoading] = useState(false);

    const fetchStats = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/HarshVardhanSinghChauhan');
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchStats();
    }, []);
    
    

    return (
        <div className="py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-12 flex flex-col items-center justify-center w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">
                    Technical Skills
                </h2>
                <p className="text-white-400 max-w-2xl mx-auto text-center">
                    Technologies and tools I work with
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                {SkillsData.map((skill) => (
                    <Card 
                        key={skill.id}
                        name={skill.name}
                        logo={skill.logo}
                        
                    />
                ))}
            </div>

            {
                loading ? (
                   <Spinner/>
                ) : (

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-blue-500 mb-6">LeetCode Stats</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-all duration-300 border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400">
                            <p className="text-xl font-semibold text-white">{stats.totalSolved}</p>
                            <p className="text-gray-400">Total Solved</p>
                        </div>
                        <div className="bg-green-800 p-4 rounded-lg hover:scale-105 transition-all duration-300 border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400">
                            <p className="text-xl font-semibold text-white">{stats.easySolved}</p>
                            <p className="text-gray-400">Easy</p>
                        </div>
                        <div className="bg-yellow-800 p-4 rounded-lg hover:scale-105 transition-all duration-300 border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400">
                            <p className="text-xl font-semibold text-white">{stats.mediumSolved}</p>
                            <p className="text-gray-400">Medium</p>
                        </div>
                        <div className="bg-red-800 p-4 rounded-lg hover:scale-105 transition-all duration-300 border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400">
                            <p className="text-xl font-semibold text-white">{stats.hardSolved}</p>
                        
                            <p className="text-gray-400">Hard</p>
                        </div>
                        
                        
                    </div>
                    <img
                        src={`https://leetcard.jacoblin.cool/HarshVardhanSinghChauhan?font=volkhov&theme=dark&extension=heatmap`}
                        alt="LeetCode Stats"
                        className="mx-auto rounded-lg shadow-lg border border-blue-500 transition-all duration-300 
                            transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400"
                        style={{ width: '500px', maxWidth: '100%' }}
                    />
                </div>
            )}
        
        </div>
    );
};

export default Skills;
