// ButtonGroup.tsx
import React from 'react';

const ButtonGroup: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Tapi/Descrição</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">Dar Feedback</button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded-md">Metaprojeto/Artefatos</button>
    </div>
  );
};

export default ButtonGroup;
