import { use } from "react";

const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    
  return (
    <div className="py-20">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-4xl">Choose Your AI Model</h2>
        <p className="text-gray-600">Our subscription gives you access to all frontier AI models</p>
      </div>

      <div>
        {
            models.map(model => <h3 key={model.id} className="text-2xl font-semibold">{model.title}</h3>)
        }
      </div>
    </div>
  );
};

export default Models;
