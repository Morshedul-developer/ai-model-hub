import { use } from "react";
import Model from "../Model/Model";

const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    
  return (
    <div className="py-20 max-w-7xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-4xl">Choose Your AI Model</h2>
        <p className="text-gray-600">Our subscription gives you access to all frontier AI models</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
            models.map(model => <Model key={model.id} model={model} />)
        }
      </div>
    </div>
  );
};

export default Models;
