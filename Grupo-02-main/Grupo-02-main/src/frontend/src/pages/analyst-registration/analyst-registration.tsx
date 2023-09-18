import React, { useState } from 'react';
import { AnalystDto } from '../../api/dtos/analyst.dto';
import { useNavigate } from 'react-router';
import { postAnalystRegistration } from '../../api/services/post-analyst-registration';

const AnalystRegistration: React.FC = () => {
  const [analystData, setAnalystData] = useState<AnalystDto>({
    name: '',
    password: '',
    email: '',
    role: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setAnalystData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const history = useNavigate();
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      const response = await postAnalystRegistration(analystData);

      console.log('Analista cadastrado:', response);
      localStorage.setItem('userType', 'analyst');
      history('/home');
    } catch (error) {
      console.error('Erro ao cadastrar analista:', error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col h-full w-screen">
      <div className="space-y-4 p-8 rounded border border-gray-200 w-[50%px]">
        <h1 className="font-medium text-2xl">Cadastro de analista</h1>
        <p className="text-gray-600 mt-6 text-xl">
          Cadastre-se aqui como um analista de iniciativas para conseguir avaliar e/ou acompanhar o andamento dos projetos
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              value={analystData.name}
              onChange={handleInputChange}
              required
              className="text-sm bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />

            <label htmlFor="password" className="text-sm text-gray-700 block mb-1 font-medium">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              value={analystData.password}
              onChange={handleInputChange}
              required
              className="text-sm bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />

            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email@inteli.edu.br"
              value={analystData.email}
              onChange={handleInputChange}
              required
              className="text-sm bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />

            <label htmlFor="role" className="text-sm text-gray-700 block mb-1 font-medium">
              Cargo
            </label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="(ex. Analista)"
              value={analystData.role}
              onChange={handleInputChange}
              required
              className="text-sm bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            />
          </div>
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="text-xl py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50"
            >
              Cadastrar
            </button>
            <button
              type="button"
              className="text-xl py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnalystRegistration;
