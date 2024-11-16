import { Link } from "react-router-dom";
import { ArrowRight, LineChart, Factory, GitBranch } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-800 to-blue-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
          Our Journey to Net Zero
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto">
          Explore our environmental impact and the steps we're taking to create
          a sustainable future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<LineChart className="w-12 h-12" />}
            title="Historical Emissions"
            description="Learn about our historical emissions and how we've changed over time."
          />
          <FeatureCard
            icon={<Factory className="w-12 h-12" />}
            title="Impact of Industries"
            description="Learn about the impact of industries on our emissions."
          />
          <FeatureCard
            icon={<GitBranch className="w-12 h-12" />}
            title="Scenario Modelling"
            description="Simulate different scenarios to see how we can achieve net zero."
          />
        </div>

        <div className="text-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
          >
            View Dashboard
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
    <div className="text-green-400 mb-4">{icon}</div>
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Home;
